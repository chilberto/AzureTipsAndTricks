(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{552:function(e,t,r){"use strict";r.r(t);var s=r(13),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥 Make sure you "),r("a",{attrs:{href:"https://github.com/microsoft/azuretipsandtricks",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),r("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-desktop/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Virtual Desktop overview"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://youtu.be/wJ3UFsr6z-w?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to get started with Azure Virtual Desktop"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"how-to-get-started-with-azure-virtual-desktop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-started-with-azure-virtual-desktop"}},[e._v("#")]),e._v(" How to get started with Azure Virtual Desktop")]),e._v(" "),r("h4",{attrs:{id:"multi-session-virtual-machines"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multi-session-virtual-machines"}},[e._v("#")]),e._v(" Multi-session Virtual Machines")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-desktop/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Virtual Desktop"),r("OutboundLink")],1),e._v(" enables you to create resources, like a Windows 11 VM, or a VM from a custom image, that can be used by many users at the same time. It also enables you to virtualize "),r("a",{attrs:{href:"https://www.microsoft.com/microsoft-365/enterprise/microsoft-365-apps-for-enterprise-product?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft 365 Apps"),r("OutboundLink")],1),e._v(", and Windows apps that users can access from their own device. This enables users to use the apps and environments they need, from whatever device they are using, which can be a computer, or tablet, or even a phone.")]),e._v(" "),r("p",[e._v("In this post, we'll get started with Azure Virtual Desktop and show you how to create VMs that users can access.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")])]),e._v(" "),r("h4",{attrs:{id:"creating-a-host-pool-app-group-and-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-host-pool-app-group-and-user"}},[e._v("#")]),e._v(" Creating a host pool, app group and user")]),e._v(" "),r("p",[e._v("We will follow the getting started experience for Azure Virtual Desktop in the Azure portal.")]),e._v(" "),r("ol",[r("li",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Search for "),r("strong",[e._v("Virtual Desktop")]),e._v(" in the search bar and select the result")]),e._v(" "),r("li",[e._v("You'll now see the "),r("strong",[e._v("Azure Virtual Desktop")]),e._v(" management blade")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/139getstarted.png")}}),e._v(" "),r("p",[e._v("(Azure Virtual Desktop management blade in the Azure portal)")]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Navigate to the "),r("strong",[e._v("Getting started")]),e._v(" menu")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Start")]),e._v(". This opens the "),r("strong",[e._v("Getting started wizard")]),e._v(" "),r("ol",[r("li",[e._v("If you have "),r("strong",[e._v("Azure AD Domain Services")]),e._v(", you can select that for the "),r("strong",[e._v("Identity provider")]),e._v(" setting. Otherwise, select "),r("strong",[e._v("No identity provider")]),e._v(", which we'll do for now")]),e._v(" "),r("li",[e._v("Select "),r("strong",[e._v("Azure AD Domain Services")]),e._v(" for the "),r("strong",[e._v("Identity service type")])]),e._v(" "),r("li",[e._v("Enter a "),r("strong",[e._v("Name")]),e._v(" for the "),r("strong",[e._v("Resource group")])]),e._v(" "),r("li",[e._v("Pick a "),r("strong",[e._v("Location")])]),e._v(" "),r("li",[e._v("Enter a "),r("strong",[e._v("user name")]),e._v(" and "),r("strong",[e._v("Password")]),e._v(" for the Azure user credentials. This is the Azure Active Directory administrator that has access to deploy resources")]),e._v(" "),r("li",[e._v("Also fill in a "),r("strong",[e._v("user name")]),e._v(" and "),r("strong",[e._v("Password")]),e._v(" for the Domain administrator credentials. This is for a new Azure AD user that will be created and granted permissions to join machines to the domain. This can seem a bit complicated, but it's because the Virtual Desktop host pool will now be created in a new domain, as we selected earlier that we didn’t have an Identity provider yet.")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Next: Virtual Machines")])])])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/139create1.png")}}),e._v(" "),r("p",[e._v("(Getting started wizard basics)")]),e._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[e._v("Leave the "),r("strong",[e._v('"Users per virtual machine"')]),e._v(" setting to "),r("strong",[e._v("Multiple users")]),e._v(". This allows multiple users to use a VM at the same time")]),e._v(" "),r("li",[e._v("Pick a VM "),r("strong",[e._v("image")]),e._v(" from the gallery. Something like "),r("strong",[e._v("Windows 11 multi-session")]),e._v(" is fine")]),e._v(" "),r("li",[e._v("Leave the Virtual machine size")]),e._v(" "),r("li",[e._v("Enter a "),r("strong",[e._v("Name prefix")]),e._v(" for the VMs")]),e._v(" "),r("li",[e._v("Uncheck the "),r("strong",[e._v("Link Azure template")]),e._v(" checkbox. You can use this to provide an Azure Resource Manager template for the VMs")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Next: Assignments")])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/139create2.png")}}),e._v(" "),r("p",[e._v("(Getting started wizard Virtual Machines)")]),e._v(" "),r("ol",{attrs:{start:"14"}},[r("li",[e._v("Fill in a "),r("strong",[e._v("user name")]),e._v(" for the account that will log into the VMs")]),e._v(" "),r("li",[e._v("Enter a "),r("strong",[e._v("password")]),e._v(" for the account, and confirm the password")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Review + create")]),e._v(" and then "),r("strong",[e._v("Create")]),e._v(". It can take a while to complete the deployment")])]),e._v(" "),r("p",[e._v("Let's take a look at the resources that we just created.")]),e._v(" "),r("ol",[r("li",[e._v("In the Azure portal, go to the "),r("strong",[e._v("Azure Virtual Desktop")]),e._v(" management blade")]),e._v(" "),r("li",[e._v("Click on the "),r("strong",[e._v("Host pools")]),e._v(" menu. You'll see the pool that contains an Application Group and Session hosts. You can use these to manage applications, like MSIX packages for Windows applications, and control the virtual machines that users can access")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/139result1.png")}}),e._v(" "),r("p",[e._v("(The Virtual Desktop Host pool)")]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("As we have only provisioned session hosts so far, and not virtualized any applications, users can only use the VMs in the host pool. They can access them through RDP, SSH, or "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/bastion/bastion-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Bastion"),r("OutboundLink")],1),e._v(", and it works just like a regular "),r("a",{attrs:{href:"https://azure.microsoft.com/services/virtual-machines/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Virtual Machine"),r("OutboundLink")],1),e._v(". However, you have a lot of control over the VMs' security, availability and scale. And multiple users can use the VM at the same time")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/139result2.png")}}),e._v(" "),r("p",[e._v("(User logged into a session host VM)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-desktop/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Virtual Desktop"),r("OutboundLink")],1),e._v(" enables you to virtualize your own applications and "),r("a",{attrs:{href:"https://www.microsoft.com/microsoft-365/enterprise/microsoft-365-apps-for-enterprise-product?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft 365 Apps"),r("OutboundLink")],1),e._v(", and provide users with virtual environments that you have control over. Go and check it out!")])])}),[],!1,null,null,null);t.default=a.exports}}]);