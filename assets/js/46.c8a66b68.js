(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{479:function(t,e,o){"use strict";o.r(e);var s=o(66),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Functions Documentation"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("h3",{attrs:{id:"use-run-from-zip-to-deploy-a-site-to-azure-web-apps-or-functions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-run-from-zip-to-deploy-a-site-to-azure-web-apps-or-functions"}},[t._v("#")]),t._v(" Use Run-From-Zip to deploy a site to Azure Web Apps or Functions")]),t._v(" "),o("p",[t._v("Here is a neat feature that I just discovered dispite it being added about 6 months or so ago. It is the ability to deploy a site to Azure Web Apps or Azure Functions from a zip file.")]),t._v(" "),o("p",[t._v("With "),o("strong",[t._v("Run-From-Zip")]),t._v(" there is no longer a deployment step which copies the files to wwwroot such as git, ftp, etc. Instead, the zip file that you point to in your App Settings gets mounted on wwwroot as read-only.")]),t._v(" "),o("p",[t._v("To get started:")]),t._v(" "),o("p",[t._v("Using "),o("strong",[t._v("Azure Storage Explorer")]),t._v(", create a storage blob container and upload your zip file and select "),o("strong",[t._v("Generate SAS Signature")]),t._v(" as shown below:")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/azblobfunction1.png")}}),t._v(" "),o("p",[t._v("Hit "),o("strong",[t._v("Create")]),t._v(" and then "),o("strong",[t._v("Copy")])]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/azblobfunction2.png")}}),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/azblobfunction3.png")}}),t._v(" "),o("p",[t._v("Now head back over to the Azure Portal and add an Azure App Setting called "),o("code",[t._v("WEBSITE_RUN_FROM_ZIP")]),t._v(", and point it to your zip file.")]),t._v(" "),o("p",[t._v("Mine looks like : "),o("code",[t._v("WEBSITE_RUN_FROM_ZIP=https://REMOVED.blob.core.windows.net/michael-test/MichaelSampleApp.zip?st=2018-06-24T22%3A16%3A40Z&se=2018-06-25T22%3A16%3A40Z&sp=rl&sv=2017-07-29&sr=b&sig=01h%3D")])]),t._v(" "),o("p",[t._v("Now gives your site a couple of seconds and you should see your site that was deployed via a zip file.")])])}),[],!1,null,null,null);e.default=a.exports}}]);