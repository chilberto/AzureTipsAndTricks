(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{638:function(e,t,r){"use strict";r.r(t);var a=r(66),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥  The FREE Azure Developer Guide eBook is available "),r("a",{attrs:{href:"https://aka.ms/azuredevebook?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://jitsi.org/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Free video conferencing with Jitsi"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://youtu.be/d0EnH6-Z4Ns?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating a private chat room with Jitsi on Microsoft Azure VM"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"creating-a-private-video-conferencing-service-with-jitsi-on-a-microsoft-azure-vm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-private-video-conferencing-service-with-jitsi-on-a-microsoft-azure-vm"}},[e._v("#")]),e._v(" Creating a private video conferencing service with Jitsi on a Microsoft Azure VM")]),e._v(" "),r("h4",{attrs:{id:"private-video-conferencing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#private-video-conferencing"}},[e._v("#")]),e._v(" Private video conferencing")]),e._v(" "),r("p",[e._v("There are many video conferencing applications out there, like "),r("a",{attrs:{href:"https://zoom.us/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zoom"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://www.microsoft.com/microsoft-365/microsoft-teams/download-app?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Teams"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://www.skype.com/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Skype"),r("OutboundLink")],1),e._v(". Sometimes, you need your own service, that you can secure yourself and and use within your own company. You can do with with the open source "),r("a",{attrs:{href:"https://jitsi.org/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jitsi"),r("OutboundLink")],1),e._v(" video conferencing solution.")]),e._v(" "),r("p",[e._v("In this post, we'll create a "),r("a",{attrs:{href:"https://azure.microsoft.com/services/virtual-machines?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Virtual Machine"),r("OutboundLink")],1),e._v(" in Azure and install Jitsi on it.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")])]),e._v(" "),r("h4",{attrs:{id:"creating-a-jitsi-service-in-azure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-jitsi-service-in-azure"}},[e._v("#")]),e._v(" Creating a Jitsi service in Azure")]),e._v(" "),r("p",[e._v("Let's create an "),r("a",{attrs:{href:"https://azure.microsoft.com/services/virtual-machines?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Virtual Machine"),r("OutboundLink")],1),e._v(" and install Jitsi on it.")]),e._v(" "),r("ol",[r("li",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/70vmcreate1.png")}}),e._v(" "),r("p",[e._v("(Create an Ubuntu Server VM in the Azure portal)")]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Select the "),r("strong",[e._v("Compute")]),e._v(" menu and "),r("strong",[e._v("Virtual Machine")]),e._v(" after that\n"),r("ol",[r("li",[e._v("This brings you to the create wizard of Azure VM")]),e._v(" "),r("li",[e._v("Select a "),r("strong",[e._v("Resource Group")])]),e._v(" "),r("li",[e._v("Fill in a "),r("strong",[e._v("name")]),e._v(" for the VM")]),e._v(" "),r("li",[e._v("Select a "),r("strong",[e._v("Region")])]),e._v(" "),r("li",[e._v("Set the "),r("strong",[e._v("Image")]),e._v(" to "),r("strong",[e._v("Ubuntu Server")])]),e._v(" "),r("li",[e._v("Leave the Authentication type to "),r("strong",[e._v("SSH public key")])]),e._v(" "),r("li",[e._v("Fill in a "),r("strong",[e._v("username")])]),e._v(" "),r("li",[e._v("Provide a "),r("strong",[e._v("SSH public key")]),e._v(" for the VM. You can generate a public and private key pair by following "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/linux/mac-create-ssh-keys?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Under "),r("strong",[e._v("Public inbound ports")]),e._v(", select "),r("strong",[e._v("Allow selected ports")])]),e._v(" "),r("li",[e._v("And for Select inbound ports, select "),r("strong",[e._v("HTTP (80)")]),e._v(", "),r("strong",[e._v("HTTPS (443)")]),e._v(" and "),r("strong",[e._v("SSH (22)")])])])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/70vmcreate2.png")}}),e._v(" "),r("p",[e._v("(Allow inbound traffic in the Azure portal)")]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("That's it. Click "),r("strong",[e._v("Review + create")]),e._v(" and "),r("strong",[e._v("Create")]),e._v(" after that to create the VM")])]),e._v(" "),r("p",[e._v("When the VM is created, we need to configure a couple of settings in it, before we can install and use Jitsi.")]),e._v(" "),r("ol",[r("li",[e._v("In the Azure portal, go to the Virtual Machine that we've just created")]),e._v(" "),r("li",[e._v("Select the "),r("strong",[e._v("Networking")]),e._v(" menu")]),e._v(" "),r("li",[e._v("In here, we need to add an inbound port to allow Jitsu to work on the VM. Select "),r("strong",[e._v("Add inbound port rule")]),e._v(" "),r("ol",[r("li",[e._v("In the "),r("strong",[e._v("Add inbound security rule blade")]),e._v(" that appears, put in "),r("strong",[e._v("10000")]),e._v(" for the "),r("strong",[e._v("Destination port ranges")])]),e._v(" "),r("li",[e._v("Give the rule a "),r("strong",[e._v("Name")]),e._v(" and leave the rest of the settings as they are")]),e._v(" "),r("li",[e._v("Select "),r("strong",[e._v("Add")]),e._v(" to add the rule")])])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/70jitsiport.png")}}),e._v(" "),r("p",[e._v("(Add inbound security rule in the Azure portal)")]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Now go to the "),r("strong",[e._v("Overview")]),e._v(" menu of the VM")]),e._v(" "),r("li",[e._v("Select the "),r("strong",[e._v("Public IP address")]),e._v(" to drill into it")]),e._v(" "),r("li",[e._v("In the Public IP address overview, select the "),r("strong",[e._v("Configuration")]),e._v(" menu")]),e._v(" "),r("li",[e._v("Fill in a "),r("strong",[e._v("DNS name label")]),e._v(" and select "),r("strong",[e._v("Save")]),e._v(". This will generate a label like "),r("strong",[e._v("tipsvm.northeurope.cloudapp.azure.com")])]),e._v(" "),r("li",[e._v("If you want to use a "),r("strong",[e._v("Let’s Encrypt SSL certificate")]),e._v(" for the Jitsi server and a custom domain name, you should map the DNS label that we've just created to your own custom domain name. You do this at the portal of your hosting provider by creating a "),r("strong",[e._v("CNAME")]),e._v(" for your custom domain to the domain label of the VM. So something like "),r("strong",[e._v("jitsi.tipsandtricks.com")]),e._v(" which maps to "),r("strong",[e._v("tipsvm.northeurope.cloudapp.azure.com")])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/70adddnslabel.png")}}),e._v(" "),r("p",[e._v("(Add DNS label to VM in the Azure portal)")]),e._v(" "),r("p",[e._v("Now that the VM is configured, we can install Jitsi on it.")]),e._v(" "),r("ol",[r("li",[e._v("Open a command prompt to connect to he VM with SSH. You can do this from your local machine, with "),r("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Shell"),r("OutboundLink")],1),e._v(" or even with the "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/troubleshooting/serial-console-windows?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serial Console of the VM"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("SSH into the VM with a command like the following, where you input your path to the private key (which you get when you generate the SSH key pair) and your username and DNS label:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ssh -i <private key path> tipsandtricks@tipsjitsi.northeurope.cloudapp.azure.com\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("ol",{attrs:{start:"3"}},[r("li",[e._v("When you are connected to the VM, open an administrative prompt to install Jitsi from. Use the following command:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo -s\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("img",{attrs:{src:e.$withBase("/files/70sudo.png")}}),e._v(" "),r("p",[e._v("(Open administrative prompt in the VM)")]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Now execute the following script to install Jitsi. Make sure to replace the "),r("strong",[e._v("HOSTNAME")]),e._v(" and "),r("strong",[e._v("EMAIL")]),e._v(" with your values. For HOSTNAME, you use your custom domain (if you have configured it, so jitsi.tipsandtricks.com or tipsvm.northeurope.cloudapp.azure.com) and for EMAIL you enter your email address that belongs to the custom domain name. This is used for the Let's Encrypt SSL certificate configuration. This only works when you use your custom domain")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('# config variables\n# BE SURE TO ENTER YOUR CUSTOM VALUES HERE\nHOSTNAME="custom-domain-name-here"\nEMAIL="your-email-address-here"\n \n# set hostname\nhostnamectl set-hostname $HOSTNAME\necho -e "127.0.0.1 localhost $HOSTNAME" >> /etc/hosts\n \n# add Jitsi to sources\nwget -qO - https://download.jitsi.org/jitsi-key.gpg.key | sudo apt-key add -\nsh -c "echo \'deb https://download.jitsi.org stable/\' > /etc/apt/sources.list.d/jitsi-stable.list"\napt update \necho -e "DefaultLimitNOFILE=65000\\nDefaultLimitNPROC=65000\\nDefaultTasksMax=65000" >> /etc/systemd/system.conf\nsystemctl daemon-reload\n \n# Configure Jits install\ndebconf-set-selections <<< $(echo \'jitsi-videobridge jitsi-videobridge/jvb-hostname string \'$HOSTNAME)\ndebconf-set-selections <<< \'jitsi-meet-web-config   jitsi-meet/cert-choice  select  "Generate a new self-signed certificate"\';\n \n# Install Jitsi \napt install -y jitsi-meet\n \n# letsencrypt\necho $EMAIL | /usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br"),r("span",{staticClass:"line-number"},[e._v("15")]),r("br"),r("span",{staticClass:"line-number"},[e._v("16")]),r("br"),r("span",{staticClass:"line-number"},[e._v("17")]),r("br"),r("span",{staticClass:"line-number"},[e._v("18")]),r("br"),r("span",{staticClass:"line-number"},[e._v("19")]),r("br"),r("span",{staticClass:"line-number"},[e._v("20")]),r("br"),r("span",{staticClass:"line-number"},[e._v("21")]),r("br"),r("span",{staticClass:"line-number"},[e._v("22")]),r("br"),r("span",{staticClass:"line-number"},[e._v("23")]),r("br"),r("span",{staticClass:"line-number"},[e._v("24")]),r("br"),r("span",{staticClass:"line-number"},[e._v("25")]),r("br")])]),r("p",[e._v('When the script is done installing, you can open a browser and navigate to the Jitsi server with your custom domain name or the DNS label (ipsvm.northeurope.cloudapp.azure.com).\nYou can now start a meeting and invite other people to have a video call and chat. When you\'ve started a meeting, you can secure it by selecting the "i" button in the bottom right and setting a password.')]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/70addpassword.png")}}),e._v(" "),r("p",[e._v("(Secure a meeting in Jitsi)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Setting up your own, private, video conferencing and chat server is easy with "),r("a",{attrs:{href:"https://jitsi.org/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jitsi"),r("OutboundLink")],1),e._v(". Just create an Ubuntu "),r("a",{attrs:{href:"https://azure.microsoft.com/services/virtual-machines?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Virtual Machine"),r("OutboundLink")],1),e._v(" in Azure and install Jitsi on it. Go and check it out!")])])}),[],!1,null,null,null);t.default=s.exports}}]);