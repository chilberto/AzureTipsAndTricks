(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{621:function(e,t,r){"use strict";r.r(t);var n=r(43),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥 Help shape the future of Azure Tips and Tricks by telling what you'd like for us to write about "),r("a",{attrs:{href:"https://github.com/microsoft/AzureTipsAndTricks/issues/new?assignees=&labels=&template=survey.md&title=",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/remote-rendering/overview/about?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Remote Rendering Overview"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://youtu.be/DqgHnkg8vFI?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to render 3D content remotely with Azure Remote Rendering"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"how-to-render-3d-content-remotely-with-azure-remote-rendering"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-render-3d-content-remotely-with-azure-remote-rendering"}},[e._v("#")]),e._v(" How to render 3D content remotely with Azure Remote Rendering")]),e._v(" "),r("h4",{attrs:{id:"enabling-the-vr-and-ar-revolution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enabling-the-vr-and-ar-revolution"}},[e._v("#")]),e._v(" Enabling the VR and AR revolution")]),e._v(" "),r("p",[e._v("Virtual and Augmented Reality applications are the future of software technology. They provide experiences that feel real, and depend on 3D content. Usually, the VR or AR device would process and render the 3D content, which requires a lot of processing power. This is an obstacle for creating devices that have long battery life, and don't require a connection to a powerful computer.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/remote-rendering/overview/about?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Remote Rendering"),r("OutboundLink")],1),e._v(" can render 3D content in Azure and stream the graphics result to you. Azure does the heavy computational lifting of rendering complex 3D content, and your VR or AR device only has to display it.")]),e._v(" "),r("p",[e._v("In this post, we'll use a sample "),r("a",{attrs:{href:"https://unity.com/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unity"),r("OutboundLink")],1),e._v(" application that uses "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/remote-rendering/overview/about?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Remote Rendering"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://git-scm.com/downloads?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("GIT"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://unity3d.com/get-unity/download?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unity"),r("OutboundLink")],1),e._v(". We use a sample application that requires unity 2019.4.16f1 or higher")]),e._v(" "),r("li",[e._v("A "),r("a",{attrs:{href:"https://id.unity.com?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unity account"),r("OutboundLink")],1),e._v(" to activate a Unity license")]),e._v(" "),r("li",[e._v("Make sure that your Development PC has the "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/remote-rendering/overview/system-requirements?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("minimum system requirements"),r("OutboundLink")],1)])]),e._v(" "),r("h4",{attrs:{id:"render-3d-content-remotely-with-azure-remote-rendering"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#render-3d-content-remotely-with-azure-remote-rendering"}},[e._v("#")]),e._v(" Render 3D content remotely with Azure Remote Rendering")]),e._v(" "),r("p",[e._v("Let's see Azure Remote Rendering in action. We are going to use a sample Unity project that contains 3D assets, which will be rendered by Azure Remote Rendering. The first thing that we need to do, is create an Azure Remote Rendering account:")]),e._v(" "),r("ol",[r("li",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),r("li",[e._v("Search for "),r("strong",[e._v("remote rendering")]),e._v(', select the "Remote Rendering" result and click '),r("strong",[e._v("Create")]),e._v(" "),r("ol",[r("li",[e._v("Type in a "),r("strong",[e._v("Name")]),e._v(" for the rendering account")]),e._v(" "),r("li",[e._v("Select a "),r("strong",[e._v("Resource Group")])]),e._v(" "),r("li",[e._v("Pick a "),r("strong",[e._v("Location")])]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Create")]),e._v(" to create the Remote Rendering account")])])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/117create.png"),width:"75%"}}),e._v(" "),r("p",[e._v("(Create a Remote Rendering account in the Azure portal)")]),e._v(" "),r("p",[e._v("When the Remote Rendering account is created, navigate to it in the Azure portal. We need 3 pieces of information to use it from Unity:")]),e._v(" "),r("ol",[r("li",[r("strong",[e._v("Account Domain")]),e._v(", which you can find on the Overview blade")]),e._v(" "),r("li",[r("strong",[e._v("Account ID")]),e._v(", also found on the Overview blade")]),e._v(" "),r("li",[r("strong",[e._v("Access Key")]),e._v(", which you can find in the Access Keys menu")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/117accesskeys.png")}}),e._v(" "),r("p",[e._v("(Remote Rendering Access Keys in the Azure portal)")]),e._v(" "),r("p",[e._v("Next, we need to download the sample application. Open a command prompt and execute the following commands:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("mkdir ARR\ncd ARR\ngit clone https://github.com/Azure/azure-remote-rendering\npowershell azure-remote-rendering\\Scripts\\DownloadUnityPackages.ps1\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("p",[e._v("With the sample application on your computer, you can add it to Unity and open it.")]),e._v(" "),r("ol",[r("li",[e._v("Open the Unity Hub application")]),e._v(" "),r("li",[e._v("Navigate to "),r("strong",[e._v("Projects")])]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Add")]),e._v(" to add a project")]),e._v(" "),r("li",[e._v("Navigate to the sample folder "),r("strong",[e._v("ARR\\azure-remote-rendering\\Unity\\Quickstart")]),e._v(" and click "),r("strong",[e._v("Select folder")])]),e._v(" "),r("li",[r("strong",[e._v("Click on the project")]),e._v(" to open it in Unity. It might prompt you to download a version of Unity, or to upgrade the project. Both options are good and will open the project")]),e._v(" "),r("li",[e._v("Next, we will connect the Unity project to Azure Remote Rendering. First, in Unity, open the Quickstart scene by clicking in the "),r("strong",[e._v("project tab > Assets > Scenes > Quickstart")])]),e._v(" "),r("li",[e._v("In the "),r("strong",[e._v("hierarchy tab")]),e._v(", select "),r("strong",[e._v("RemoteRendering")]),e._v(". This uses the Azure Remote Rendering Unity package")]),e._v(" "),r("li",[e._v("In the "),r("strong",[e._v("Inspector tab")]),e._v(", fill in the values for the Azure Remote Rendering account\n"),r("ol",[r("li",[r("strong",[e._v("Account Domain")]),e._v(": The account domain from the Azure portal")]),e._v(" "),r("li",[r("strong",[e._v("Account Authentication Domain")]),e._v(": The account domain from the Azure portal")]),e._v(" "),r("li",[r("strong",[e._v("Account Id")]),e._v(": The account ID from the Azure portal")]),e._v(" "),r("li",[r("strong",[e._v("Account Key")]),e._v(": The Access Key from the Azure portal")])])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/117accountdetails.png")}}),e._v(" "),r("p",[e._v("(Remote Rendering account details in Unity)")]),e._v(" "),r("ol",{attrs:{start:"9"}},[r("li",[e._v("Press "),r("strong",[e._v("Play")]),e._v(" to start rendering. This can take a few minutes as Azure Remote Rendering receives and processes the files to render")])]),e._v(" "),r("p",[e._v("You'll see the 3D model rendered live in Unity. It is being rendered remotely in real-time. To test that, open the "),r("strong",[e._v("Scene")]),e._v(" tab and move the camera. You'll see that the rendering changes. Also, when you look at the "),r("strong",[e._v("Inspector tab")]),e._v(" of the "),r("strong",[e._v("RemoteRendering object")]),e._v(", you'll see "),r("strong",[e._v("Runtime Session Info")]),e._v(", which shows you information about the remote rendering session.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/117result.png")}}),e._v(" "),r("p",[e._v("(3D Model being remote rendered in Unity)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Rendering 3D content remotely with "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/remote-rendering/overview/about?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Remote Rendering"),r("OutboundLink")],1),e._v(" enables you to create renderings that your VR or AR device couldn't render by itself. Go and check it out!")])])}),[],!1,null,null,null);t.default=o.exports}}]);