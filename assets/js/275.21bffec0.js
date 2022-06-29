(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{543:function(e,t,r){"use strict";r.r(t);var a=r(13),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥 Make sure you "),r("a",{attrs:{href:"https://github.com/microsoft/azuretipsandtricks",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),r("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager/bicep/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is Bicep?"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://youtu.be/atWVFV7Y4vY?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use Azure Bicep for developing ARM templates"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"how-to-use-azure-bicep-for-developing-arm-templates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-azure-bicep-for-developing-arm-templates"}},[e._v("#")]),e._v(" How to use Azure Bicep for developing ARM templates")]),e._v(" "),r("h4",{attrs:{id:"a-domain-specific-language-for-azure-deployments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-domain-specific-language-for-azure-deployments"}},[e._v("#")]),e._v(" A Domain-specific Language for Azure deployments")]),e._v(" "),r("p",[e._v("You can use "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager/management/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Resource Manager (ARM)"),r("OutboundLink")],1),e._v(" templates to describe and deploy your Azure infrastructure. Natively, ARM templates are represented in JSON, which can become complex. "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager/bicep/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bicep"),r("OutboundLink")],1),e._v(" is an abstraction on top of the ARM JSON syntax, that makes the authoring experience of ARM templates easier. Bicep provides concise syntax, code reuse, and reliable type safety.")]),e._v(" "),r("p",[e._v("In this post, we'll create an ARM template with Bicep in VS Code.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),r("li",[e._v("The "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),r("OutboundLink")],1),e._v(". You can "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("download it for Windows, Linux or Mac"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("The "),r("a",{attrs:{href:"https://code.visualstudio.com/download?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest version of VS Code"),r("OutboundLink")],1)])]),e._v(" "),r("h4",{attrs:{id:"snippets-and-intellisense-for-infrastructure-as-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#snippets-and-intellisense-for-infrastructure-as-code"}},[e._v("#")]),e._v(" Snippets and IntelliSense for Infrastructure as Code")]),e._v(" "),r("p",[e._v("To work with the Bicep language, we need to install the "),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-bicep&WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code Bicep extension"),r("OutboundLink")],1),e._v(" and the Bicep module for the Azure CLI.")]),e._v(" "),r("ol",[r("li",[e._v("Open "),r("strong",[e._v("VS Code")])]),e._v(" "),r("li",[e._v("Go to the "),r("strong",[e._v("Extensions")]),e._v(" menu")]),e._v(" "),r("li",[e._v("Search for "),r("strong",[e._v("Bicep")])]),e._v(" "),r("li",[e._v("Click on the result and select "),r("strong",[e._v("Install")]),e._v(" to install the extension. You might need to reload VS Code to activate the extension")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/131extension.png")}}),e._v(" "),r("p",[e._v("(VS Code Bicep extension)")]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[e._v("Open the terminal in VS Code. We'll use this to install the "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/bicep?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI Bicep module"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Execute the following command")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("az bicep install\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("That's it. We are now ready to use Bicep.")]),e._v(" "),r("ol",[r("li",[e._v("In VS Code, create a new file and call it "),r("strong",[e._v("main.bicep")])]),e._v(" "),r("li",[e._v("We'll create an "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/overview-hosting-plans?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Plan"),r("OutboundLink")],1),e._v(" and an "),r("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Web App"),r("OutboundLink")],1),e._v(". Type "),r("strong",[e._v('"app"')]),e._v(". This triggers a dropdown of code snippets that you can use. Select the "),r("strong",[e._v("res-app-plan")]),e._v(" snippet. Code snippets create a template of standard code. You now have code that creates an App Service Plan resource")]),e._v(" "),r("li",[e._v("Type "),r("strong",[e._v('"web"')]),e._v(" and select the "),r("strong",[e._v("res-web-app")]),e._v(" snippet. This one creates an App Service Web App resource")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/131snippets.png"),width:"75%"}}),e._v(" "),r("p",[e._v("(Bicep code snippets)")]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Next, change the code into this:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("@minLength(1)\n@maxLength(59)\nparam name string\n\n\nresource appServicePlan 'Microsoft.Web/serverfarms@2020-12-01' = {\n  name: 'appServicePlanTips123'\n  location: resourceGroup().location\n  sku: {\n    name: 'F1'\n    capacity: 1\n  }\n}\n\nresource webApplication 'Microsoft.Web/sites@2018-11-01' = {\n  dependsOn:[\n    appServicePlan\n  ]\n  name: name\n  location: resourceGroup().location\n  properties: {\n    serverFarmId: resourceId('Microsoft.Web/serverfarms', 'appServicePlanTips123')\n  }\n}\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br"),r("span",{staticClass:"line-number"},[e._v("18")]),r("br"),r("span",{staticClass:"line-number"},[e._v("19")]),r("br"),r("span",{staticClass:"line-number"},[e._v("20")]),r("br"),r("span",{staticClass:"line-number"},[e._v("21")]),r("br"),r("span",{staticClass:"line-number"},[e._v("22")]),r("br"),r("span",{staticClass:"line-number"},[e._v("23")]),r("br"),r("span",{staticClass:"line-number"},[e._v("24")]),r("br")])]),r("p",[e._v("In the code, we changed the "),r("strong",[e._v("name")]),e._v(" of the App Service Plan and used it in the "),r("strong",[e._v("DependsOn property")]),e._v(" of the Web App. This makes the deployment of the Web App wait for the successful deployment of the App Service Plan. Also, the "),r("strong",[e._v("serverFarmId")]),e._v(" of the Web App refers to the name of the App Service Plan. And finally, we create a "),r("strong",[e._v("parameter")]),e._v(" called "),r("strong",[e._v("name")]),e._v(" and use that for the Web App name. The parameter has restrictions for its "),r("strong",[e._v("minimum")]),e._v(" and "),r("strong",[e._v("maximum length")]),e._v(". You'll find that when you type this out, you have full IntelliSense, which makes creating templates like this very easy.")]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[e._v("Now that we have two resources, we can look at them by clicking on the "),r("strong",[e._v("Visualize button")]),e._v(" in the top-right of the editor. This opens a visual representation of the Bicep file")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/131visual.png")}}),e._v(" "),r("p",[e._v("(Visual representation of the Bicep file)")]),e._v(" "),r("p",[e._v("Let's use this Bicep file to deploy Azure resources.")]),e._v(" "),r("ol",[r("li",[e._v("Open the terminal in VS Code")]),e._v(" "),r("li",[e._v("Make sure that the prompt is in the folder of the Bicep file")]),e._v(" "),r("li",[e._v("Execute the following command, and insert the name of an existing "),r("strong",[e._v("Resource Group")]),e._v(", and replace the "),r("strong",[e._v("name")]),e._v(" parameter with a unique value")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("az deployment group create --resource-group INSERTYOURRESOURCEGROUP --template-file main.bicep --parameters name='uniquewebappname'\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("After a while, your Azure App Service Plan and Azure Web App will be successfully deployed. The deployment itself was done using an ARM template, that the Bicep language was transpiled into, as Bicep is as an abstraction on top of ARM.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/131result.png"),width:"75%"}}),e._v(" "),r("p",[e._v("(Resources successfully deployed from a Bicep template)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager/bicep/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Bicep"),r("OutboundLink")],1),e._v(" is an Infrastructure-as-Code language that makes it easy to create "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager/management/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARM templates"),r("OutboundLink")],1),e._v(" using IntelliSense, Code Snippets and compiler error checking. Go and check it out!")])])}),[],!1,null,null,null);t.default=s.exports}}]);