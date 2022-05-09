(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{473:function(s,t,e){"use strict";e.r(t);var a=e(66),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("💡 Learn more : "),e("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[s._v("Azure Cognitive Services"),e("OutboundLink")],1),s._v(".")]),s._v(" "),e("p",[s._v("💡 Checkout "),e("a",{attrs:{href:"https://azure.microsoft.com/en-us/overview/ai-platform/dev-resources/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[s._v("Azure AI resources for developers"),e("OutboundLink")],1),s._v(".")])]),s._v(" "),e("h3",{attrs:{id:"using-ocr-to-extract-text-from-images-from-the-azure-portal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-ocr-to-extract-text-from-images-from-the-azure-portal"}},[s._v("#")]),s._v(" Using OCR to extract text from images from the Azure Portal")]),s._v(" "),e("p",[s._v("I recently needed the ability to extract text from an image. I was very cautious as several free alternatives that exist on the web said they may keep the image (and or text). So I did what any developer would do and just rolled my own. But instead of creating an application, I took it upon myself to use the power of the Azure Portal to accomplish this.")]),s._v(" "),e("p",[s._v("1.) Open the "),e("a",{attrs:{href:"www.portal.azure.com"}},[s._v("Azure Portal")]),s._v(" and select Cloud Shell from the top menu. Now change the scripting language from BASH to PowerShell.")]),s._v(" "),e("img",{attrs:{src:s.$withBase("/files/powershell1.png")}}),s._v(" "),e("p",[s._v("2.) We now need to install the PowerShell Cognitive Services module. You can do so by typing "),e("code",[s._v("Install-Module PSCognitiveservice -Verbose -Force")]),s._v(". Sample output is below:")]),s._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" Azure:\\> "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Install-Module")]),s._v(" PSCognitiveservice "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Verbose "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Force\nVERBOSE: "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Using")]),s._v(" the provider "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PowerShellGet'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" searching packages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: The "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Repository parameter was not specified"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("  PowerShellGet will use all of the registered repositories"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Getting the provider object "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the PackageManagement Provider "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NuGet'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: The specified Location is "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://www.powershellgallery.com/api/v2/'")]),s._v(" and PackageManagementProvider is "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NuGet'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Searching repository "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://www.powershellgallery.com/api/v2/FindPackagesById()?id='")]),s._v("PSCognitiveservice"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Module "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pscognitiveservice'")]),s._v(" was installed successfully to path "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\Users\\ContainerAdministrator\\Documents\\WindowsPowerShell\\Modules\\pscognitiveservice\\0.3.5'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nAzure:\\\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" Azure:\\>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("3.) Import the module by typing "),e("code",[s._v("Import-Module PSCognitiveservice -V")]),s._v(" Sample output is below:")]),s._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" Azure:\\> "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Import-Module")]),s._v(" PSCognitiveservice "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Verbose\nVERBOSE: Loading module "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" path "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\Users\\ContainerAdministrator\\Documents\\WindowsPowerShell\\Modules\\PSCognitiveservice\\0.3.5\\PSCognitiveservice.psd1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Populating RepositorySourceLocation property "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" module PSCognitiveservice"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Loading module "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" path "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\Users\\ContainerAdministrator\\Documents\\WindowsPowerShell\\Modules\\PSCognitiveservice\\0.3.5\\PSCognitiveService.psm1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Importing "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ConvertTo-Thumbnail'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Importing "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Get-Face'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Importing "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Get-ImageAnalysis'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Importing alias "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'analyze'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Importing alias "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bing'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Importing alias "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ocr'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Importing alias "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sentiment'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Importing alias "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tag'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Importing alias "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'thumbnail'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nAzure:\\\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("4.) Now you'll need to create a cognitive services account. You can do either in the portal (you may already have one) or by typing "),e("code",[s._v("New-CognitiveServiceAccount AccountType ComputerVision -Verbose")])]),s._v(" "),e("p",[s._v("Just make sure you select "),e("strong",[s._v("Free")]),s._v(".")]),s._v(" "),e("img",{attrs:{src:s.$withBase("/files/powershell2.png")}}),s._v(" "),e("p",[s._v("5.) Load the configuration into your environment variables with "),e("code",[s._v("lcfg -fromAzure -Verbose")]),s._v(" Sample output is below:")]),s._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PS")]),s._v(" Azure:\\> lcfg "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("fromAzure "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Verbose\nVERBOSE: Testing Azure login\nVERBOSE: Logged in"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nVERBOSE: Fetching AzureRM Cognitive Service accounts\nVERBOSE: 1 Service found in AzureRM "),e("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[ComputerVision]")]),s._v("\nVERBOSE: Setting "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":API_SubscriptionKey_ComputerVision "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Cognitive Service: ComputerVision\nVERBOSE: Setting "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":API_Location_ComputerVision "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Cognitive Service: ComputerVision\n\n\nName                           Value\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("                           "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\nServiceName                    ComputerVision\nLocation                       westus\nSubscriptionKey                yourkey\nEndPoint                       https:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("westus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("api"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cognitive"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("microsoft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com/vision/v1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("6.) Type the following line and just replace the "),e("strong",[s._v("url")])]),s._v(" "),e("p",[e("code",[s._v("ocr -URL https://s3-us-west-2.amazonaws.com/i.cdpn.io/10994.zekgx.4df25d8a-eb50-4007-a0df-6ae0aaf87974.png -Verbose | ForEach-Object {$_.regions.lines} | ForEach-Object { $_.words.text -join ' '}")])]),s._v(" "),e("p",[s._v("And you now have your text!")])])}),[],!1,null,null,null);t.default=n.exports}}]);