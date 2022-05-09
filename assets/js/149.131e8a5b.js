(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{578:function(e,t,r){"use strict";r.r(t);var o=r(66),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=TLGLBbv3HoA&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=19?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Test Web Applications in Production"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"traffic-percentage-for-web-apps-with-azure-app-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#traffic-percentage-for-web-apps-with-azure-app-service"}},[e._v("#")]),e._v(" Traffic Percentage for Web Apps with Azure App Service")]),e._v(" "),r("h4",{attrs:{id:"intro"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[e._v("#")]),e._v(" Intro")]),e._v(" "),r("p",[e._v("We've recently created a "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip19.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("web app"),r("OutboundLink")],1),e._v(" and uploaded it to Azure App Service. We also took a look at "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple ways"),r("OutboundLink")],1),e._v(" to examine those files through the Azure portal interface and how we'd add "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip21.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip22.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployment slots"),r("OutboundLink")],1),e._v(" for our web app. In this post, we'll look at a feature called "),r("code",[e._v("Routing Rules")]),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"traffic-percentage-feature-of-azure-app-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#traffic-percentage-feature-of-azure-app-service"}},[e._v("#")]),e._v(" Traffic Percentage Feature of Azure App Service")]),e._v(" "),r("p",[e._v("Go to the Azure Portal and select any App Service that uses at least 2 deployment slots. Click on "),r("strong",[e._v("Deployment Slots")]),e._v(" under "),r("strong",[e._v("Deployment")]),e._v(". Take a look at one of the slots and you'll see traffic percentage.")]),e._v(" "),r("p",[r("strong",[e._v("What is Traffic Percentage")]),e._v(" This section lets you control how traffic is distributed between your production and other slots. This is useful if you want to try out a new change with a small percentage of requests and then gradually increase the percentage of requests that get the new behavior.")]),e._v(" "),r("p",[e._v("A scenario could be - We'll want to split the traffic to our site into 2 groups to test our new site and see if customers like it.")]),e._v(" "),r("p",[e._v("Production - 75%\nStaging - 25%")]),e._v(" "),r("p",[e._v("Now keep in mind that we have two versions of our site. One that is "),r("code",[e._v("production")]),e._v(" and "),r("code",[e._v("staging")]),e._v(". They are identical except for the staging site has a large font that says "),r("code",[e._v("jsQuizEngine version 2")]),e._v(".")]),e._v(" "),r("p",[e._v("We don't want to "),r("strong",[e._v("swap")]),e._v(" sites, we just want to "),r("strong",[e._v("distribute")]),e._v(" traffic between the two sites.")]),e._v(" "),r("p",[e._v("I can test this by going to my production url and refreshing the site until the "),r("code",[e._v("staging")]),e._v(" site is shown with the production url.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/testinprodazure1.gif")}}),e._v(" "),r("p",[e._v("Success! it works, but what happens when they leave the site? We actually store a cookie that keeps track of it. You can find this cookie yourself by expecting the site and looking for the cookie shown below.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/testinprodazure2.png")}}),e._v(" "),r("p",[e._v("For further reading, then please see this "),r("a",{attrs:{href:"https://azure.github.io/AppService/update/2019/03/18/Changes-to-Testing-in-Production-UX.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog post"),r("OutboundLink")],1),e._v(" submitted by "),r("a",{attrs:{href:"https://github.com/WizX20",target:"_blank",rel:"noopener noreferrer"}},[e._v("WizX20"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);