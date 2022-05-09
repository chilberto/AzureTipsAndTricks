(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{454:function(t,e,o){"use strict";o.r(e);var r=o(66),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Service Documentation"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("h3",{attrs:{id:"part-8-an-end-to-end-scenario-with-azure-app-service-api-apps-sql-vsts-and-ci-cd"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#part-8-an-end-to-end-scenario-with-azure-app-service-api-apps-sql-vsts-and-ci-cd"}},[t._v("#")]),t._v(" Part 8 - An end to end scenario with Azure App Service, API Apps, SQL, VSTS and CI/CD")]),t._v(" "),o("h4",{attrs:{id:"a-multi-part-series-showing-an-end-to-end-possibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-multi-part-series-showing-an-end-to-end-possibility"}},[t._v("#")]),t._v(" A multi-part series showing an end-to-end possibility")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.linkedin.com/in/crystal-tenn-6a0b9b67/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crystal Tenn"),o("OutboundLink")],1),t._v(" and I teamed up to bring an E2E blog series that features an Azure App Service website that communicates with an API project, which communicates to an Azure SQL back-end. The app is a traditional To-Do application based on an existing sample that used ADO.NET, but adapted for Azure deploy and to Visual Studio 2017. The technology/tooling stack is Visual Studio, VSTS, C#, Angular, and SQL.")]),t._v(" "),o("p",[t._v("The process for the app is described below. In Visual Studio, you will start out with a working To Do list application. You will push the code to VSTS (Visual Studio Team Services). Then you will create a CI/CD (Continuous Integration/Continuous Delivery) process in order to deploy to Azure. In Azure you will create 3 resources: Azure Web App, Azure API App, and an Azure SQL Server through this exercise.")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip101.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Local Setup - SQL Server"),o("OutboundLink")],1),t._v(" - Locally connect a front-end website to an API, and connect the API to a SQL Server.")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip102.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Local Setup - Visual Studio and Swagger"),o("OutboundLink")],1),t._v(" - Continue Part 1 and use a local instance of Visual Studio and Swagger to communicate to our db.")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip103.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swagger - Learn how to use Swagger for API management"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip104.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Deployment - Deploy the SQL database to Azure manually"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip105.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Deployment - Deploy the front-end Web App and API App to Azure manually"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip107.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adding the project to VSTS with Git"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip108.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSTS Continuous Integration - Setup a CI Process in VSTS"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip109.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSTS Continuous Deployment - Setup a CD Process in VSTS"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip110.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cleanup - Cleanup and delete the Azure resources created in this tutorial"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("Keep in mind : While we won't be going into the deep specifics of how to code, you should be able to use this guide to look at several parts of the Azure technology stack and how you can best implement them in your organization.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/todolist-diagram.png")}}),t._v(" "),o("h1",{attrs:{id:"vsts-continuous-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vsts-continuous-deployment"}},[t._v("#")]),t._v(" VSTS Continuous Deployment")]),t._v(" "),o("p",[t._v("1.) On the top menu of "),o("strong",[t._v("VSTS")]),t._v(", click on "),o("strong",[t._v("Build and Release")]),t._v(", then choose "),o("strong",[t._v("Releases")]),t._v(" from the drop-down:")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc9.jpg")}}),t._v(" "),o("p",[t._v("2.) On the left, click the "),o("strong",[t._v('"+" button')]),t._v(" and choose "),o("strong",[t._v("Create release definition")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc10.jpg")}}),t._v(" "),o("p",[t._v("3.) Choose the "),o("strong",[t._v("Azure App Service Deployment template")]),t._v(" and hit "),o("strong",[t._v("Apply")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc11a.jpg")}}),t._v(" "),o("p",[t._v("4.) On the right side, name the environment "),o("strong",[t._v("Production")]),t._v(", then click the "),o("strong",[t._v("X")]),t._v(" on the top left to close this.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc12a.jpg")}}),t._v(" "),o("p",[t._v("5.) On the left, click "),o("strong",[t._v("Add artifact")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc12b.jpg")}}),t._v(" "),o("p",[t._v("6.) For the "),o("strong",[t._v("artifact")]),t._v(", choose "),o("strong",[t._v("Build")]),t._v(", and choose the "),o("strong",[t._v("FE-Angular-CI")]),t._v(" (or whatever it is named) build, hit "),o("strong",[t._v("Add")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc12c.jpg")}}),t._v(" "),o("p",[t._v("7.) Click "),o("strong",[t._v("Tasks")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc13.jpg")}}),t._v(" "),o("p",[t._v("8.) Rename your "),o("strong",[t._v("Release definition")]),t._v(" by clicking by the "),o("strong",[t._v("name")]),t._v(":")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc14.jpg")}}),t._v(" "),o("p",[t._v("9.) Choose your "),o("strong",[t._v("Azure Subscription")]),t._v(". Choose the "),o("strong",[t._v("Web App")]),t._v(" type.  Choose the "),o("strong",[t._v("App Service name")]),t._v(" you used for the Angular web app.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc15.jpg")}}),t._v(" "),o("p",[t._v("10.) Scroll down more on the same page, click the 3 dots under "),o("strong",[t._v("Package or folder")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc16.jpg")}}),t._v(" "),o("p",[t._v("11.) On the modal, choose "),o("strong",[t._v("ToDoListAngular.zip")]),t._v(", then hit "),o("strong",[t._v("OK")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc17.jpg")}}),t._v(" "),o("p",[t._v("12.) Click the "),o("strong",[t._v('"+"')]),t._v(" button to add an "),o("strong",[t._v("additional task.")]),t._v(" Choose the "),o("strong",[t._v("Azure App Service Deploy task")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc17a.jpg")}}),t._v(" "),o("p",[t._v("13.) Select the "),o("strong",[t._v("new task")]),t._v(" on the left. Then, on the right add your "),o("strong",[t._v("Azure subscription")]),t._v(" again. Choose "),o("strong",[t._v("API App")]),t._v(". Select the "),o("strong",[t._v("API App Service")]),t._v(" that you created in the Azure Portal.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc18a.jpg")}}),t._v(" "),o("p",[t._v("14.) Scroll down on the same task, click the 3 dots under "),o("strong",[t._v("Package or folder")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc18b.jpg")}}),t._v(" "),o("p",[t._v("15.)  On the modal, choose "),o("strong",[t._v("ToDoListDataAPI.zip")]),t._v(", then hit "),o("strong",[t._v("OK")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc18c.jpg")}}),t._v(" "),o("p",[t._v("16.) Click "),o("strong",[t._v("Save")]),t._v(" at the top.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc19.jpg")}}),t._v(" "),o("p",[t._v("17.) Click "),o("strong",[t._v("Release")]),t._v(", then "),o("strong",[t._v("Create Release")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc20.jpg")}}),t._v(" "),o("p",[t._v("18.) A notification with the name of the release will show up, click on this:")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc21.jpg")}}),t._v(" "),o("p",[t._v("19.) Click "),o("strong",[t._v("Logs")]),t._v(", then it will bring you to the logs which will display live results.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc22.jpg")}}),t._v(" "),o("p",[t._v("20.) Wait until it finishes and shows "),o("strong",[t._v("Success")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc23.jpg")}}),t._v(" "),o("p",[t._v("21.) Go to your "),o("strong",[t._v("Azure Portal")]),t._v(". Choose your resource from "),o("strong",[t._v("All Resources")]),t._v(", click on the "),o("strong",[t._v("name")]),t._v(" of the resource.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc24.jpg")}}),t._v(" "),o("p",[t._v("22.) View the "),o("strong",[t._v("overview page")]),t._v(" to get the URL:")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc25.jpg")}}),t._v(" "),o("p",[t._v("23.) Your completed page should look like this (hit the link with the red arrow to go to the To Do list!):")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/blog7-mc26.jpg")}})])}),[],!1,null,null,null);e.default=s.exports}}]);