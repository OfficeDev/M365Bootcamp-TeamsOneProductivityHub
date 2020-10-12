## Part 3 - Add the Microsoft Graph Toolkit and build the auth pop-up page

- [Part 0 - Environment Setup](00-Setup.md) 
- [Part 1 - Create a new Teams custom tab](01-Create_Teams_tab.md) 
- [Part 2 - Register your application in Azure Active Directory](02-Register_your_app_in_Azure_AD.md) 
- [Part 3 - Add Microsoft Graph Toolkit and build the auth pop-up page](03-Initialize_MGT_and_auth_page.md) ( **📍 You are here** )
- [Part 4 - Design your One Productivity Hub using Microsoft Graph Toolkit components](04-Design_your_tab_using_MGT_components.md)
- [Part 5 - Test your tab in Microsoft Teams App Studio](05-Test_your_tab.md)

We are back to our project on Visual Studio Code.

### Add the Microsoft Graph Toolkit

To use the Toolkit and the Teams SDK via the loaders, add the following references to `public/index.html`:

```HTML
<script src="https://unpkg.com/@microsoft/teams-js/dist/MicrosoftTeams.min.js" crossorigin="anonymous"></script>
<script src=" https://unpkg.com/@microsoft/mgt@1.3.4/dist/bundle/mgt-loader.js"></script>
```

### Initialize the Teams provider

In `public/index.html`, add the Teams provider as shown.

```HTML
<mgt-teams-provider
  client-id="<YOUR_CLIENT_ID>"
  auth-popup-url="https://<YOUR_NGROK_URL>/auth.html"
  scopes="User.Read, User.Read.All, Calendars.Read, Contacts.Read, People.Read, Group.Read.All, Group.ReadWrite.All, Tasks.Read, Tasks.ReadWrite, Mail.ReadBasic, Mail.Read, Mail.ReadWrite"
></mgt-teams-provider>
```
> **📌 NOTE 📌 :** Make sure to add the following scopes in your provider `scopes="User.Read, User.Read.All, Calendars.Read, Contacts.Read, People.Read, Group.Read.All, Group.ReadWrite.All, Tasks.Read, Tasks.ReadWrite, Mail.ReadBasic, Mail.Read, Mail.ReadWrite"`.

Replace `<YOUR_CLIENT_ID>` with the client ID for your Azure AD application and `<YOUR_NGROK_URL>` with the ngrok URL you created.


### Create the auth popup page

In order to allow users to sign in, you need to provide a URL that the Teams app will open in a popup to follow the authentication flow. The URL needs to be in your domain, and all this page needs to do is call the `TeamsProvider.handleAuth()` method.

You can do this in your HTML by adding a new `auth.html` file in the `public` folder (which should be at the same level as `index.html`) and adding the following code:

```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>
<body>
    <script src="https://unpkg.com/@microsoft/teams-js/dist/MicrosoftTeams.min.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/@microsoft/mgt@1.3.4/dist/bundle/mgt-loader.js"></script>

    <script>
      mgt.TeamsProvider.handleAuth();
    </script>
        
</body>
</html>
```

## References
- Microsoft Docs - [Build a Microsoft Teams tab with the Microsoft Graph Toolkit](https://cda.ms/1Jh)

## Next Step
> ▶️ **[Part 4 - Design your One Productivity Hub using Microsoft Graph Toolkit components](04-Design_your_tab_using_MGT_components.md)**
