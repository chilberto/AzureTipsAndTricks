(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{832:function(e,t,r){"use strict";r.r(t);var a=r(13),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥 Make sure you "),r("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),r("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/logic-apps/logic-apps-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Logic Apps overview"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://youtu.be/GHk7Arm247E?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to run Logic Apps in a Docker container"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"how-to-run-logic-apps-in-a-docker-container"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-run-logic-apps-in-a-docker-container"}},[e._v("#")]),e._v(" How to run Logic Apps in a Docker container")]),e._v(" "),r("h4",{attrs:{id:"azure-logic-apps-can-run-anywhere"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#azure-logic-apps-can-run-anywhere"}},[e._v("#")]),e._v(" Azure Logic Apps can run anywhere")]),e._v(" "),r("p",[e._v("You can run "),r("a",{attrs:{href:"https://azure.microsoft.com/services/logic-apps/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Logic Apps"),r("OutboundLink")],1),e._v(" anywhere, on the "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-versions?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Runtime"),r("OutboundLink")],1),e._v(". This enables you to deploy and run Logic Apps on your local machine, in your own datacenter, or in another cloud. And you can also run Azure Logic Apps in a "),r("a",{attrs:{href:"https://www.docker.com/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),r("OutboundLink")],1),e._v(" container.")]),e._v(" "),r("p",[e._v("In this post, we'll run an Azure Logic App in a Docker container.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),r("li",[e._v("Create an Azure Logic App in VS Code with the newest extension by following "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip304.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("this previous tip"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Desktop"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.postman.com/downloads/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Postman"),r("OutboundLink")],1),e._v(" for sending requests")])]),e._v(" "),r("h4",{attrs:{id:"deploy-a-logic-app-to-a-container"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-logic-app-to-a-container"}},[e._v("#")]),e._v(" Deploy a Logic App to a container")]),e._v(" "),r("p",[e._v("The Logic App is triggered by an HTTP trigger and creates a queue message in Azure Storage. Let's deploy the Logic App to a container.")]),e._v(" "),r("ol",[r("li",[e._v("In VS Code, create a "),r("strong",[e._v("Dockerfile")]),e._v(" in the project of the Logic App. The file has no file extension, and is just called Dockerfile. It should have the following contents:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("FROM mcr.microsoft.com/azure-functions/dotnet:3.0.14492-appservice\n\nENV AzureWebJobsStorage=<Your Azure Storage connection string>\nENV AZURE_FUNCTIONS_ENVIRONMENT Development\nENV AzureWebJobsScriptRoot=/home/site/wwwroot\nENV AzureFunctionsJobHost__Logging__Console__IsEnabled=true\nENV FUNCTIONS_V2_COMPATIBILITY_MODE=true\n\nCOPY ./bin/release/netcoreapp3.1/publish/ /home/site/wwwroot\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br")])]),r("p",[e._v("Fill in your "),r("strong",[e._v("Azure Storage connection string")]),e._v(" for the "),r("strong",[e._v("AzureWebJobsStorage")]),e._v(" environment variable so that the Logic App in the container can use it.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/95dockerfile.png")}}),e._v(" "),r("p",[e._v("(Dockerfile in VS Code)")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("Next, open the "),r("strong",[e._v("Terminal")]),e._v(" in VS Code and build and publish the project with these commands:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("dotnet build -c release\ndotnet publish -c release\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Now create the container image with this command:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker build --tag local/workflowcontainer .\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Run the container with the following command. This makes the Logic App accessible through localhost:8080")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker run -e WEBSITE_HOSTNAME=localhost -p 8080:80 local/workflowcontainer\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("ol",{attrs:{start:"5"}},[r("li",[e._v("Now for the most difficult part. We need to discover the URL for the HTTP trigger. To do that, we first need to get the masterKey to gain access to the Logic App. You can find this key in the Azure Storage Account that you've indicated in the Dockerfile. Go to the "),r("strong",[e._v("Azure Storage Account")]),e._v(" and navigate to "),r("strong",[e._v("Containers/azure-webjobs-secrets/{id}")]),e._v(" and open the "),r("strong",[e._v("host.json")]),e._v(" file.")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/95hostjson.png")}}),e._v(" "),r("p",[e._v("(Host.json file in Azure Storage)")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('  "masterKey": {\n    "name": "master",\n    "value": "l6vZj8J3aLEZzOfTV7SiiP2H2eru96ajlzZNpoXm5WScABAoP1tlEg==",\n    "encrypted": false\n  }\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br")])]),r("p",[e._v("Copy the "),r("strong",[e._v("value")]),e._v(" of the "),r("strong",[e._v("masterKey")]),e._v(". We'll need that in the next step.")]),e._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[e._v("Open "),r("strong",[e._v("Postman")])]),e._v(" "),r("li",[e._v("Create a new "),r("strong",[e._v("POST")]),e._v(" request for http://localhost:8080/runtime/webhooks/workflow/api/management/workflows/"),r("strong",[e._v("{your logic app workflow name}")]),e._v("/triggers/manual/listCallbackUrl?api-version=2020-05-01-preview&code="),r("strong",[e._v("{masterKey value}")]),e._v(" and send it")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/95postmanresults.png")}}),e._v(" "),r("p",[e._v("(Postman results)")]),e._v(" "),r("p",[e._v("The results from the post contain the URL of the HTTP trigger to call and the query parameters to add to the URL.")]),e._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[e._v("Open a browser and trigger the Logic App with a URL like this: http://localhost:8080/api/"),r("strong",[e._v("{your logic app workflow name}")]),e._v("/triggers/manual/invoke?api-version=2020-05-01-preview&sp="),r("strong",[e._v("{value for sp}")]),e._v("&sv="),r("strong",[e._v("{value for sv}")]),e._v("&sig="),r("strong",[e._v("{value for sig}")]),e._v("&myqueuetext")])]),e._v(" "),r("p",[e._v("The final querystring is a text, which the Logic App takes and puts in a new queue message in Azure Storage")]),e._v(" "),r("p",[e._v("That's it! The Logic App is now triggered and should run successfully and place a message on the Azure Storage queue, like in the image below:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/95result.png")}}),e._v(" "),r("p",[e._v("(The Logic App created a queue message in the Azure Storage queue)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://azure.microsoft.com/services/logic-apps/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Logic Apps"),r("OutboundLink")],1),e._v(" enable you to easily create complex workflows. Now, you can run Azure Logic Apps anywhere, including in a "),r("a",{attrs:{href:"https://www.docker.com/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),r("OutboundLink")],1),e._v(" container. Go and check it out!")])])}),[],!1,null,null,null);t.default=s.exports}}]);