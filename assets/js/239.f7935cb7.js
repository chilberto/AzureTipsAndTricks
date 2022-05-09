(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{670:function(e,r,t){"use strict";t.r(r);var n=t(66),a=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("🔥 Checkout the Azure Developer page at "),t("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://azure.microsoft.com/services/container-registry/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Container Registry overview"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("📺 Watch the video : "),t("a",{attrs:{href:"https://youtu.be/waktLo7JJTw?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use Azure Container Registry for building and deploying .NET Core Apps"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"how-to-use-azure-container-registry-for-building-and-deploying-net-core-apps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-azure-container-registry-for-building-and-deploying-net-core-apps"}},[e._v("#")]),e._v(" How to use Azure Container Registry for building and deploying .NET Core apps")]),e._v(" "),t("h4",{attrs:{id:"store-container-images-in-azure-container-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#store-container-images-in-azure-container-registry"}},[e._v("#")]),e._v(" Store container images in Azure Container Registry")]),e._v(" "),t("p",[e._v("When you create a container image from an application, you can store it locally, or somewhere else, like in a container registry. There are many registries to pick from, including the "),t("a",{attrs:{href:"https://azure.microsoft.com/services/container-registry/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Container Registry"),t("OutboundLink")],1),e._v(". Storing your container images in Azure Container Registry comes with lots of advantages, including "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/container-registry/container-registry-tasks-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("geo-replication"),t("OutboundLink")],1),e._v(", to efficiently manage a single registry across multiple regions, integrated security and "),t("a",{attrs:{href:"https://aka.ms/acr/tasks?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("automated container building and patching"),t("OutboundLink")],1),e._v(" including base image updates and task scheduling.")]),e._v(" "),t("p",[e._v("In this post, we'll containerize a .NET Core console application, publish it to an "),t("a",{attrs:{href:"https://azure.microsoft.com/services/container-registry/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Container Registry"),t("OutboundLink")],1),e._v(" and run it in an "),t("a",{attrs:{href:"https://azure.microsoft.com/services/container-instances/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Container Instance"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),t("ul",[t("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),t("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),t("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),t("li",[e._v("The latest version of "),t("a",{attrs:{href:"https://visualstudio.microsoft.com/downloads/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Desktop"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"create-an-azure-container-instance-from-azure-container-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-container-instance-from-azure-container-registry"}},[e._v("#")]),e._v(" Create an Azure Container Instance from Azure Container Registry")]),e._v(" "),t("p",[e._v("We'll containerize a simple .NET Core console application, publish that to an existing Azure Container Registry and run it in an Azure Container Instance. Let's get started.")]),e._v(" "),t("ol",[t("li",[e._v("Create and open a "),t("strong",[e._v("new .NET Core console application")]),e._v(" in Visual Studio")]),e._v(" "),t("li",[e._v("Right-click the project file and select "),t("strong",[e._v("Add > Docker Support")])]),e._v(" "),t("li",[e._v("Choose "),t("strong",[e._v("Linux")]),e._v(" as the Target OS (and make sure that your Docker Desktop is set to run Linux images, instead of Windows images). This adds a Dockerfile to the project")])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/96consoledocker.png")}}),e._v(" "),t("p",[e._v("(Dockerized console application)")]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Now Right-click the project file again and select "),t("strong",[e._v("Publish")])]),e._v(" "),t("li",[e._v("Choose "),t("strong",[e._v("Azure")]),e._v(" for the publish target")]),e._v(" "),t("li",[e._v("And choose "),t("strong",[e._v("Azure Container Registry")]),e._v(" after that")]),e._v(" "),t("li",[e._v("Select an existing Azure Container Registry (or create a new one from the publish window) and select "),t("strong",[e._v("Finish")])]),e._v(" "),t("li",[e._v("Now click "),t("strong",[e._v("Publish")]),e._v(" to create the container image and publish it to the registry")])]),e._v(" "),t("p",[e._v("The container image of the console app is now published in the Azure Container Registry. From there, we'll run it in a new Azure Container Instance")]),e._v(" "),t("ol",[t("li",[e._v("Go to the "),t("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Navigate to the Azure Container Registry")]),e._v(" "),t("li",[e._v("Select the "),t("strong",[e._v("Repositories")]),e._v(" menu")]),e._v(" "),t("li",[e._v("Click on the "),t("strong",[e._v("repository")])]),e._v(" "),t("li",[e._v("You'll see the image "),t("strong",[e._v("Tag")]),e._v(' "latest". Click on the three dots to the right of it to bring up its context-menu and select '),t("strong",[e._v("Run instance")])])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/96runinstance.png")}}),e._v(" "),t("p",[e._v("(Container image context menu in the Azure portal)")]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[e._v("This brings up the "),t("strong",[e._v("Create container instance blade")]),e._v(" "),t("ol",[t("li",[e._v("Fill in a "),t("strong",[e._v("name")]),e._v(" for the instance")]),e._v(" "),t("li",[e._v("Leave the rest as it is and click "),t("strong",[e._v("OK")])])])])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/96createcontainerinstance.png"),width:"50%"}}),e._v(" "),t("p",[e._v("(Create container instance blade in the Azure portal)")]),e._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[e._v("When the "),t("strong",[e._v("Container instance")]),e._v(" is created, navigate to it")]),e._v(" "),t("li",[e._v("Click on the "),t("strong",[e._v("Containers")]),e._v(" menu")]),e._v(" "),t("li",[e._v("Here, you'll see the container, which is now running. Click on the "),t("strong",[e._v("Logs")]),e._v(' menu to see the container logs, which should say "Hello world", which is the output of the console app, now running in a container')])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/96result.png")}}),e._v(" "),t("p",[e._v("(Container log in the Azure portal)")]),e._v(" "),t("h4",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://azure.microsoft.com/services/container-registry/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Container Registry"),t("OutboundLink")],1),e._v(" is a managed and safe place to store your container images, that provides features like "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/container-registry/container-registry-tasks-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("geo-replication"),t("OutboundLink")],1),e._v(" and an easy way to run your containers in "),t("a",{attrs:{href:"https://azure.microsoft.com/services/container-instances/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Container Instances"),t("OutboundLink")],1),e._v(". Go and check it out!")])])}),[],!1,null,null,null);r.default=a.exports}}]);