## Part 4 - Design your One Productivity Hub using Microsoft Graph Toolkit components
Now, you're ready to add any of the Microsoft Graph Toolkit components to your tab.

### Login component
Let's start with the `Login` component, add the below code to the body of your `public/index.html`:

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

### Tasks component

Add the `Tasks` component inside the second column div tagged with `id="two"` under `public/index.html`:

```HTML
<mgt-tasks></mgt-tasks>
```

### Get component

Add the `Get` component that enables getting e-mails from user's mailbox inside the third column div tagged with `id="three"` under `public/index.html`:

```HTML
<mgt-get resource="/me/messages" version="beta" scopes="mail.read" max-pages="1">
     <template>
        <div class="email" data-for="email in value">
            <h4><mgt-person person-query="{{email.sender.emailAddress.address}}" show-name person-card="hover"></mgt-person></h4>
             <h3>{{ email.subject }}</h3>
             <div data-if="email.bodyPreview" class="preview" innerHtml>{{email.bodyPreview}}</div>
             <div data-else class="preview">email body is empty</div>
        </div>
      </template>
      <template data-type="loading">loading</template>
      <template data-type="error">{{ this }} </template>
</mgt-get>  
```

## References
- Microsoft Docs - [Build a Microsoft Teams tab with the Microsoft Graph Toolkit](https://cda.ms/1Jh)

## Next Step
> **[Part 5 - Test your tab in Microsoft Teams App Studio](/Labs/05-Test_your_tab.md)**