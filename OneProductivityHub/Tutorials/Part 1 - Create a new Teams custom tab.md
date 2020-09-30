## Part 1- Create a new Teams custom tab

1. Select Microsoft Teams icon on the left side bar in Visual Studio Code and **Sign in**.

   ![Microsoft Teams Toolkit Extension for Visual Studio Code](/OneProductivityHub/Images/CreateTeamsTab-1.png)
   
1. Select **Create a new Teams app**, 
   * Give a name for the app 
   * Choose **Tab** for the capability
   * Select **Next**
   
   ![Microsoft Teams Toolkit Extension for Visual Studio Code](/OneProductivityHub/Images/CreateTeamsTab-2.png)
   
   * Select **Personal tab**
   * Select **Finish**
   
   ![Microsoft Teams Toolkit Extension for Visual Studio Code](/OneProductivityHub/Images/CreateTeamsTab-3.PNG)
   
   * Open Terminal and run:
   
      ```Bash
      npm install

      npm start
      ```
## Set up ngrok and create a tunnel
In order to test your application later, you will need to host your application over a public-facing URL using HTTPS. Install [ngrok](https://ngrok.com/download) and create a tunnel from the Internet to `http://localhost:3000` with the following command:

```Bash
ngrok http 3000
```

> **Important:** In your project directory, locate the `.publish\Development.env` file and replace the value for `baseUrl0` with your ngrok URL. 

## References
- Microsoft Docs - [Build apps with the Microsoft Teams Toolkit and Visual Studio Code](https://cda.ms/1Jj)
- Visual Studio Marketplace - [Microsoft Teams Toolkit Extension for Visual Studio Code](https://cda.ms/1Jj)
- [Ngrok](https://ngrok.com/download)