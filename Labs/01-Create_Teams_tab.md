## Part 1 - Create a new Teams custom tab

1. Select Microsoft Teams icon on the left side bar in Visual Studio Code and **Sign in**.

   ![Microsoft Teams Toolkit Extension for Visual Studio Code](/Labs/Images/CreateTeamsTab-1.png)
   
1. Select **Create a new Teams app**, 
   * Give a name for the app 
   * Choose **Tab** for the capability
   * Select **Next**
   
   ![Microsoft Teams Toolkit Extension for Visual Studio Code](/Labs/Images/CreateTeamsTab-2.png)
   
   * Select **Personal tab**
   * Select **Finish**
   
   ![Microsoft Teams Toolkit Extension for Visual Studio Code](/Labs/Images/CreateTeamsTab-3.PNG)
   
   * Open Terminal and run:
   
      ```Bash
      npm install

      npm start
      ```
## Set up ngrok and create a tunnel
If you didn't setup your ngrok yet, you may follow the instructions: **Setup [Ngrok](https://ngrok.com/download)**.

In order to test your application later, you will need to host your application over a public-facing URL using HTTPS. Install [ngrok](https://ngrok.com/download) and create a tunnel from the Internet to `http://localhost:3000` with the following command:

```Bash
ngrok http 3000
```

> **Important:** In your project directory, locate the `.publish\Development.env` file and replace the value for `baseUrl0` with your ngrok URL. 

## References
- Microsoft Docs - [Build apps with the Microsoft Teams Toolkit and Visual Studio Code](https://cda.ms/1Jj)
- Visual Studio Marketplace - [Microsoft Teams Toolkit Extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension)
- [Ngrok](https://ngrok.com/download)

## Next Step
> **[Part 2 - Register your application in Azure Active Directory](/Labs/02-Register_your_app_in_Azure_AD.md)**