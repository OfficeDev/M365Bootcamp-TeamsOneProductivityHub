## Part 3 - Add the Microsoft Graph Toolkit and build the auth pop-up page

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
></mgt-teams-provider>
```
Replace `<YOUR_CLIENT_ID>` with the client ID for your Azure AD application and `<YOUR_NGROK_URL>` with the ngrok URL you created.

### Create the auth popup page

In order to allow users to sign in, you need to provide a URL that the Teams app will open in a popup to follow the authentication flow. The URL needs to be in your domain, and all this page needs to do is call the `TeamsProvider.handleAuth()` method.

You can do this in your HTML by adding a new `auth.html` file in the `public` folder (which should be at the same level as `index.html`) and adding the following code:

```HTML
<script src="https://unpkg.com/@microsoft/teams-js/dist/MicrosoftTeams.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@microsoft/mgt/dist/bundle/mgt-loader.js"></script>

<script>
  mgt.TeamsProvider.handleAuth();
</script>
```

## References
- Microsoft Docs - [Build a Microsoft Teams tab with the Microsoft Graph Toolkit](https://cda.ms/1Jh)