(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{714:function(e,t,a){"use strict";a.r(t);var o=a(66),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥  Download the FREE Azure Developer Guide eBook "),a("a",{attrs:{href:"http://aka.ms/azuredevebook?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/iot-central/core/overview-iot-central?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure IoT Central overview"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://youtu.be/CNYH9ehiHH4?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to get started with Azure IoT Central"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"how-to-get-started-with-azure-iot-central"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-started-with-azure-iot-central"}},[e._v("#")]),e._v(" How to get started with Azure IoT Central")]),e._v(" "),a("h4",{attrs:{id:"an-easy-way-to-get-started-with-iot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-easy-way-to-get-started-with-iot"}},[e._v("#")]),e._v(" An easy way to get started with IoT")]),e._v(" "),a("p",[e._v("The Internet of Things (IoT) connects the physical to the digital world with sensors, devices, connectors, services, dashboards, and more. It can be complex to connect devices to your applications, and manage and monitor them securely. "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/iot-central/core/overview-iot-central?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure IoT Central"),a("OutboundLink")],1),e._v(" takes away that complexity. It enables you to easily connect devices to a central place in the cloud, and provides industry specific templates for security, monitoring and management. This gets you started quickly and allows you to do more advanced configuration and development if needed.")]),e._v(" "),a("p",[e._v("In this post, we'll connect a device to "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/iot-central/core/overview-iot-central?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure IoT Central"),a("OutboundLink")],1),e._v(" to see how easy it is to receive data from it.")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),a("ul",[a("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),a("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),a("li",[e._v("A smartphone or phone emulator (iOS or Android) on which you can install the IoT Plug and Play app")])]),e._v(" "),a("h4",{attrs:{id:"create-a-new-iot-application-and-connect-a-device-to-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-iot-application-and-connect-a-device-to-it"}},[e._v("#")]),e._v(" Create a new IoT application and connect a device to it")]),e._v(" "),a("p",[e._v("Azure IoT Central provides IoT-as-a-service. Let's try it out.")]),e._v(" "),a("ol",[a("li",[e._v("Go to "),a("a",{attrs:{href:"https://apps.azureiotcentral.com?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("apps.azureiotcentral.com"),a("OutboundLink")],1),e._v(" and sign in with the account that you use for Azure. This is the main portal for Azure IoT Central")]),e._v(" "),a("li",[e._v("In the menu on the left, click on "),a("strong",[e._v("Build")])]),e._v(" "),a("li",[e._v("Here, we can build our first IoT application. IoT Central provides many application templates to help you to get started. This includes templates for specific industries, like Retail, Healthcare and Energy. We will create a custom app. In the "),a("strong",[e._v("Custom app template")]),e._v(", click "),a("strong",[e._v("Create app")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/137iotcentral.png")}}),e._v(" "),a("p",[e._v("(Create a custom app in Azure IoT Central)")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("This opens the "),a("strong",[e._v('"About your app"')]),e._v(" blade\n"),a("ol",[a("li",[e._v("IoT Central suggests a name and URL prefix. You can leave them as they are")]),e._v(" "),a("li",[e._v("Choose "),a("strong",[e._v("Free")]),e._v(" for the "),a("strong",[e._v("Pricing plan")])]),e._v(" "),a("li",[e._v("In Billing Info, select your "),a("strong",[e._v("Azure Active Directory")])]),e._v(" "),a("li",[e._v("Select the "),a("strong",[e._v("Azure Subscription")]),e._v(" that you want to use")]),e._v(" "),a("li",[e._v("Select a "),a("strong",[e._v("Location")]),e._v(" for the application")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Create")])])])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/137create.png")}}),e._v(" "),a("p",[e._v("(Configure the application details in Azure IoT Central)")]),e._v(" "),a("p",[e._v("Azure IoT Central applications can contain connections to devices, rules, jobs, analytics and much more. We will keep it simple and just add a device.")]),e._v(" "),a("ol",[a("li",[e._v("In the left menu, select "),a("strong",[e._v("Devices")])]),e._v(" "),a("li",[e._v("We haven't connected any devices yet, so click "),a("strong",[e._v("Create a device")]),e._v(". This does not create a physical device or emulator, but creates a digital representation of an existing device")]),e._v(" "),a("li",[e._v("You can leave the device details as they are")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Create")]),e._v(" to create the device in IoT Central")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/137createdevice.png")}}),e._v(" "),a("p",[e._v("(Create a device in Azure IoT Central)")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Next, click on the device that we've just created")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Connect")]),e._v(" in the top menu. This shows the connection blade")]),e._v(" "),a("li",[e._v("You can connect a device by using several types of authentication. We'll use the Shared Access Signature (SAS) method. Click on "),a("strong",[e._v("QR Code")]),e._v(" to show the QR code that we can use to connect our device")]),e._v(" "),a("li",[e._v("Install the "),a("strong",[e._v("IoT Plug and Play app")]),e._v(" on an "),a("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.iot_pnp&WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://apps.apple.com/app/iot-plug-and-play/id1563783687?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOS phone"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Open the app on your phone. It will ask to "),a("strong",[e._v("scan a QR code")])]),e._v(" "),a("li",[e._v("Grant the app access to your camera")]),e._v(" "),a("li",[a("strong",[e._v("Scan the QR code")]),e._v(" from Azure IoT Central. After a moment, it will say that it is connected")]),e._v(" "),a("li",[e._v("Go back to IoT Central and "),a("strong",[e._v("select the device")])]),e._v(" "),a("li",[e._v("You'll now see device properties and device data, including location, battery level, altitude and more. You can now monitor the device from IoT Central and create rules and jobs to manage its data and security")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/137result.png")}}),e._v(" "),a("p",[e._v("(The device is connected to Azure IoT Central)")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/iot-central/core/overview-iot-central?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure IoT Central"),a("OutboundLink")],1),e._v(" provides an easy way to get started with IoT, without having to invest in developing and managing a solution. Go and check it out!")])])}),[],!1,null,null,null);t.default=r.exports}}]);