## Part 5 - Test your tab in Microsoft Teams App Studio

Build and run your application using the following commands:

```Bash
npm install
npm start
```

> **Note:** `npm install` will only be needed once for the entire lab regardless of how many times you start your app.

Make sure `ngrok` is running in the background for tunneling.

To test your application, you need to upload your application to Teams. Open the Microsoft Teams client, select the **...** button on the left-hand menu and go to **App Studio**. Click the **Manifest Editor** tab and select **Import an existing app**.

![Testing your tab on Microsoft Teams](/Labs/Images/TestingTabOnTeams-01.png)

Locate your project directory and upload the **Development.zip** file inside of the **.publish** folder.

![Testing your tab on Microsoft Teams](/Labs/Images/TestingTabOnTeams-02.png)

After your app has loaded, scroll down on the left menu and select **Test and Distribute**. Click the **Install** button and then click **Add**. You will be redirected to the tab you created.

![Testing your tab on Microsoft Teams](/Labs/Images/TestingTabOnTeams-03.png)

There you have your tab working on Microsoft Teams. Click on **Sign in** button to authenticate in your *One Productivity Hub*.

![Testing your tab on Microsoft Teams](/Labs/Images/TestingTabOnTeams-04.png)

You should see the list of scopes we added in our provider earlier. Select **Consent on behalf of your organization** and click **Accept** button.

![Testing your tab on Microsoft Teams](/Labs/Images/TestingTabOnTeams-05.png)

Finally, our *One Productivity Hub* tab is running successfully on Microsoft Teams. 

![Testing your tab on Microsoft Teams](/Labs/Images/TestingTabOnTeams-06.png)

## References
- Microsoft Docs - [Build a Microsoft Teams tab with the Microsoft Graph Toolkit](https://cda.ms/1Jh)

## Completed Solution
Completed solution can be found under the `Solution` folder.