## Part 4 - Design your One Productivity Hub using Microsoft Graph Toolkit components

- [Part 0 - Environment Setup](00-Setup.md) 
- [Part 1 - Create a new Teams custom tab](01-Create_Teams_tab.md) 
- [Part 2 - Register your application in Azure Active Directory](02-Register_your_app_in_Azure_AD.md) 
- [Part 3 - Add Microsoft Graph Toolkit and build the auth pop-up page](03-Initialize_MGT_and_auth_page.md) 
- [Part 4 - Design your One Productivity Hub using Microsoft Graph Toolkit components](04-Design_your_tab_using_MGT_components.md) ( **📍 You are here** )
- [Part 5 - Test your tab in Microsoft Teams App Studio](05-Test_your_tab.md)

Now, you're ready to add any of the Microsoft Graph Toolkit components to your tab.

### Login component
Let's start with the `Login` component, add the below code to the body of your `public/index.html` in the `<body></body>` section:

```HTML
<mgt-login></mgt-login>
```
### Design your tab with HTML and CSS
To make our tab look structured, we create three columns in a row by using some HTML and CSS code as the following:

- Add below HTML code under the Login component in `public/index.html`:

```HTML
<div class="row" id="content">
    
      <div class="column" id="one"></div>
      <div class="column" id="two"></div>
      <div class="column" id="three"></div>
      
</div>
```

- Add below CCS code in `src/index.css`:

```CSS
/* Main content */
#content, html, body {
  height: 98%;
  
}
#one {
  float: left;
  width: 33%;
  background:transparent;
  height:500px;
  overflow: hidden;
}
#one:hover {
  overflow-y: auto;
}
#two {
  float: left;
  width: 33%;
  background: transparent;
  height: 500px;
  overflow: hidden;
}
#two:hover {
  overflow-y: auto;
}
#three {
  float: left;
  width: 33%;
  background: transparent;
  height: 500px;
  overflow: hidden;
}
#three:hover {
  overflow-y: auto;
}
/*Email*/
.email {
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin: 8px 4px;
  font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
}
.email:hover {
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin: 8px 4px;
}
.email h3 {
  font-size: 12px;
  margin-top: 4px;
}
.email h4 {
  font-size: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.email mgt-person {
  --font-size: 10px;
  --avatar-size-s: 12px;
}
.email .preview {
  font-size: 13px;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 2.8em;
  line-height: 1.4em;
}


```

### Agenda component

Add the Agenda component inside the first column div tagged with `id="one"` under `public/index.html`:

```HTML
<mgt-agenda></mgt-agenda>
```

---
**🔥 CHALLENGE 🔥 : Use properties!**   

1️⃣ Define agenda to group events by day.

2️⃣ Always show events for upcoming 7 days.

---


### Tasks component

Add the `Tasks` component inside the second column div tagged with `id="two"` under `public/index.html`:

```HTML
<mgt-tasks></mgt-tasks>
```

### Get component

Add the custom element, `Get` component for getting user's mailbox messages inside the third column div tagged with `id="three"` under `public/index.html`:

```HTML
<mgt-get></mgt-get>  
```

---
**🔥 CHALLENGE 🔥 : Get e-mails!** 

Use the custom element `mgt-get` for making a Microsoft Graph get query for `https://graph.microsoft.com/beta/me/messages`.

👀 You may want to check out [Microsoft Graph Explorer](https://aka.ms/g-explorer) and [Microsoft Graph Toolkit Playground](https://mgt.dev) for a hint.

---


## References
- Microsoft Docs - [Build a Microsoft Teams tab with the Microsoft Graph Toolkit](https://cda.ms/1Jh)

## Next Step
> ▶️ **[Part 5 - Test your tab in Microsoft Teams App Studio](05-Test_your_tab.md)**
