(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{520:function(e,t,r){"use strict";r.r(t);var a=r(13),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥  Checkout the Azure Developer page at "),r("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/mysql/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("about Azure Database for MySQL"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://youtu.be/2YasHdel_VY?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use Flexible Server in Azure Database for MySQL"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"how-to-use-flexible-server-in-azure-database-for-mysql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-flexible-server-in-azure-database-for-mysql"}},[e._v("#")]),e._v(" How to use Flexible Server in Azure Database for MySQL")]),e._v(" "),r("h4",{attrs:{id:"highly-configurable-mysql-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#highly-configurable-mysql-server"}},[e._v("#")]),e._v(" Highly configurable MySQL server")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/mysql/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Database for MySQL"),r("OutboundLink")],1),e._v(" provides a managed MySQL server that allows you to focus on using MySQL, instead of focussing on managing your database server. You can choose to run Azure Database for MySQL as a "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/mysql/single-server-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Single server"),r("OutboundLink")],1),e._v(", which is designed to handle most of the database management functions such as patching, backups, high availability, and security with minimal user configuration and control. You can also create an Azure Database for MySQL with a "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/mysql/flexible-server/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flexible Server"),r("OutboundLink")],1),e._v(", which allows for more configuration and control of the database server.")]),e._v(" "),r("p",[e._v("In this post, we'll create an Azure Database for MySQL with the Flexible Server option.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")])]),e._v(" "),r("h4",{attrs:{id:"create-a-flexible-mysql-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-flexible-mysql-server"}},[e._v("#")]),e._v(" Create a Flexible MySQL server")]),e._v(" "),r("p",[e._v("We will use the Azure portal to create an Azure Database for MySQL and connect to it using the "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/cloud-shell/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")])]),e._v(" "),r("li",[r("p",[e._v("Search for "),r("strong",[e._v("database for mysql")]),e._v(', select the "Azure Database for MySQL" result and click '),r("strong",[e._v("Create")])]),e._v(" "),r("ol",[r("li",[e._v("This shows the Select "),r("strong",[e._v("Azure Database for MySQL deployment option")]),e._v(" screen")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/115start.png")}}),e._v(" "),r("p",[e._v("(Azure Database for MySQL server options)")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("Click the "),r("strong",[e._v("Create")]),e._v(" button under "),r("strong",[e._v("Flexible server")]),e._v(". This opens the Flexible server blade")]),e._v(" "),r("li",[e._v("Select a "),r("strong",[e._v("Resource Group")])]),e._v(" "),r("li",[e._v("Fill in a "),r("strong",[e._v("Name")]),e._v(" for the server")]),e._v(" "),r("li",[e._v("Select a "),r("strong",[e._v("Region")])]),e._v(" "),r("li",[e._v("Choose a "),r("strong",[e._v("Workload type")]),e._v(". This determines the compute and storage option that you use. Flexible server offers the option to use "),r("strong",[e._v("Burstable compute")]),e._v(", which ramps up the server CPU only when needed. This is great for non-production workloads")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/115create1.png")}}),e._v(" "),r("p",[e._v("(Flexible server creation options)")]),e._v(" "),r("ol",{attrs:{start:"7"}},[r("li",[e._v("You can configure compute and storage in more detail, by clicking on "),r("strong",[e._v("configure server")]),e._v(". This brings up the "),r("strong",[e._v("Compute + storage blade")]),e._v(". This allows you to set the size of the VM that the server runs on, and the storage size and performance that your data sits on. In this blade, you can also configure the server backups and make them geo-redundant (you can only choose this when you don't use a burstable compute tier)")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/115create2.png")}}),e._v(" "),r("p",[e._v("(Compute + storage options)")]),e._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[e._v("Next, choose the "),r("strong",[e._v("availability zone")]),e._v(" you want the VM(s) that runs the MySQL server to use")]),e._v(" "),r("li",[e._v("Leave the "),r("strong",[e._v("High Availability")]),e._v(" setting "),r("strong",[e._v("unchecked")]),e._v(". You should use this when you want additional availability precautions within availability zones, for production workloads. As we are using the burstable compute tier for development workloads, we don't need this")]),e._v(" "),r("li",[e._v("Leave the "),r("strong",[e._v("MySQL version")]),e._v(" to the selected version")]),e._v(" "),r("li",[e._v("Fill in an "),r("strong",[e._v("Admin username")]),e._v(" that you will use to connect to the server")]),e._v(" "),r("li",[e._v("Type a "),r("strong",[e._v("Password")]),e._v(" for the admin user and "),r("strong",[e._v("confirm the password")])]),e._v(" "),r("li",[e._v("Select "),r("strong",[e._v("Next:Networking")])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/115create3.png")}}),e._v(" "),r("p",[e._v("(Configure networking options)")]),e._v(" "),r("ol",{attrs:{start:"14"}},[r("li",[e._v("Flexible server can put the server in a virtual network, so that it is not exposed to the internet. You can also allow the server to be accessed through the internet and secure it with a firewall. This is what we will do. Select "),r("strong",[e._v("Public access (allowed IP addresses)")])]),e._v(" "),r("li",[e._v("Under "),r("strong",[e._v("Firewall rules")]),e._v(", select the "),r("strong",[e._v("Add 0.0.0.0 - 255.255.255.255")]),e._v(" link to add a firewall rule that allows all IP addresses to access the server. You should never use this firewall rule for a real-world application, but you can use it for development or demo purposes")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Review + create")]),e._v(" and "),r("strong",[e._v("Create")]),e._v(" after that to create the server")])])])]),e._v(" "),r("p",[e._v("When the Azure Database for MySQL server is created, navigate to it in the Azure portal. In the overview blade, you'll see that you can stop the server. This is a feature of Flexible server. Stopping the server can save you a lot of money when you don't use it.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/115stop.png")}}),e._v(" "),r("p",[e._v("(Stop the server from the Azure portal)")]),e._v(" "),r("p",[e._v("You can use the Azure Database for MySQL server with your tool of choice. We will use the Azure Cloud Shell to connect to it. Azure Cloud Shell comes with the mysql.exe tool preinstalled, through which we can use the MySQL server.")]),e._v(" "),r("ol",[r("li",[e._v("Go to "),r("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://shell.azure.com/"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Execute the following commands, and replace the "),r("strong",[e._v("servername")]),e._v(" and "),r("strong",[e._v("username")]),e._v(" with your own. Note that these commands will first get a certificate that is needed to secure the connection to the server, and use that certificate in the connection command.")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    mysql -h servername.mysql.database.azure.com -u username -p --ssl=true \n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("That's it. We are now connected to the Azure Database for MySQL flexible server.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/115result.png")}}),e._v(" "),r("p",[e._v("(Connected to the flexible server from the Azure Cloud Shell)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/mysql/flexible-server/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flexible server"),r("OutboundLink")],1),e._v(" option for "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/mysql/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Database for MySQL"),r("OutboundLink")],1),e._v(" allows you to customize high availability, maintenance windows, use burstable compute, and stop and start the server. Go and check it out!")])])}),[],!1,null,null,null);t.default=o.exports}}]);