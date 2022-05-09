(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{481:function(e,s,n){"use strict";n.r(s);var t=n(66),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Documentation"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"quickly-restore-your-local-settings-file-for-azure-functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#quickly-restore-your-local-settings-file-for-azure-functions"}},[e._v("#")]),e._v(" Quickly Restore your Local Settings File for Azure Functions")]),e._v(" "),n("p",[e._v("If you've ever worked with Azure Functions then no doubt you've seen the "),n("code",[e._v("local.settings.json")]),e._v(" file before. This file stores app settings, connection strings, etc. for local development.")]),e._v(" "),n("p",[e._v("It looks like the following to refresh your memory:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "IsEncrypted": true,\n  "Values": {\n    "FUNCTIONS_EXTENSION_VERSION": "VALUE",\n    "WEBSITE_CONTENTAZUREFILECONNECTIONSTRING": "VALUE",\n    "WEBSITE_CONTENTSHARE": "VALUE",\n    "AzureWebJobsDashboard": "VALUE",\n    "AzureWebJobsStorage": "VALUE",\n    "ConsumerKey": "VALUE",\n    "ConsumerSecret": "VALUE",\n    "OAuthTokenSecret": "VALUE",\n    "WEBSITE_TIME_ZONE": "VALUE"\n  },\n  "ConnectionStrings": {}\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br")])]),n("p",[e._v("This file is also by default "),n("strong",[e._v("not")]),e._v(" checked into source control. If you open your "),n("code",[e._v(".gitignore")]),e._v(" file you'll see the following:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("#### Ignore Visual Studio temporary files, build results, and\n#### files generated by popular Visual Studio add-ons.\n\n# Azure Functions localsettings file\nlocal.settings.json\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[e._v("With this knowledge, you might have a need one day to restore this file (for example, working with the source code on another machine pulled down from source) and you can easily do so.")]),e._v(" "),n("p",[e._v("Simply install the "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local#install-the-azure-functions-core-tools?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Core Tools"),n("OutboundLink")],1),e._v(" with "),n("code",[e._v("npm install -g azure-functions-core-tools")]),e._v(".")]),e._v(" "),n("p",[e._v("Navigate to the source code where your Azure Function is and run "),n("code",[e._v("func azure account list")]),e._v(". This will ask you to login and you should ensure we are in the proper subscription where your Azure Function exist. You'll see something like the following:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("C:\\Users\\mbcrump\\src\\FunctionTest>func azure account list\nSubscription                                                                 Current\n------------                                                                 -------\nVisual Studio Enterprise (xxx)                                               True\nMichael's Internal Subscription (xxx)                                        False\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[e._v("If you're not in the right subscription then type "),n("code",[e._v("func azure account set <subid>")]),e._v(" where "),n("code",[e._v("subid")]),e._v(" is the correct subscription.")]),e._v(" "),n("p",[e._v("Now run "),n("code",[e._v("func azure functionapp fetch-app-settings <functionname>")]),e._v(" where "),n("code",[e._v("functionname")]),e._v(" is your Azure Function and it will restore your "),n("code",[e._v("local.settings.json")]),e._v(" file!")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/functioncliappsettings.png")}})])}),[],!1,null,null,null);s.default=r.exports}}]);