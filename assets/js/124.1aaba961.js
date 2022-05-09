(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{553:function(e,t,a){"use strict";a.r(t);var r=a(66),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥 Checkout our new Azure Developer page at "),a("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://azure.microsoft.com/en-ca/services/security-center/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Security Center JIT"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("This post was brought to you by "),a("strong",[a("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kumar Allamraju"),a("OutboundLink")],1)]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"reduce-brute-force-attacks-to-azure-vms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reduce-brute-force-attacks-to-azure-vms"}},[e._v("#")]),e._v(" Reduce Brute Force attacks to Azure VMs")]),e._v(" "),a("h4",{attrs:{id:"enabling-just-in-time-access-to-azure-vms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-just-in-time-access-to-azure-vms"}},[e._v("#")]),e._v(" Enabling Just In Time access to Azure VMs")]),e._v(" "),a("p",[e._v("Brute force attacks commonly target management ports (22 for SSH, 3389 for RDP etc.)  as a means to gain access to Compute VMs. If successful, an attacker can take control over the VM and establish a foothold into your environment.")]),e._v(" "),a("p",[e._v("In this post, I will explain how JIT access to Azure virtual machines enables us to further secure Azure VMs and enable on-demand access to the machines.")]),e._v(" "),a("h4",{attrs:{id:"what-is-jit-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-jit-access"}},[e._v("#")]),e._v(" What is JIT access?")]),e._v(" "),a("p",[e._v("Azure Security Center provides several threat prevention mechanisms to help you reduce surface areas susceptible to attack. One of those mechanisms is Just-in-Time (JIT) VM Access. Management ports do not need to be open at all times. They only need to be open while you are connected to the VM, for example to perform management or maintenance tasks. When you enable JIT for your VMs, you can create a policy that determines the ports to be protected, how long ports remain open, and approved IP addresses from where these ports can be accessed. The policy helps you stay in control of what users can do when they request access. Requests are logged in the Azure Activity Log, so you can easily monitor and audit access. The policy will also help you quickly identify existing virtual machines that have JIT enabled and virtual machines where JIT is recommended.")]),e._v(" "),a("h4",{attrs:{id:"how-does-it-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work"}},[e._v("#")]),e._v(" How does it work?")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Launch an Azure VM.")])]),e._v(" "),a("li",[a("p",[e._v("Go to your running VM. Under Settings >> Configuration section")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/jit-step1.jpg")}}),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[e._v("Click on “Enable just-in-time” button.")])]),e._v(" "),a("li",[a("p",[e._v("Go back to Security Center blade in Azure Portal. select “Just in time VM access” under ADVANCED CLOUD DEFENSE section")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/jit-step2.jpg")}}),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Click on “Request Access”")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/jit-step3.jpg")}}),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[e._v("Toggle the "),a("strong",[e._v("On/Off")]),e._v(" option and choose the My IP or IP Range. Make sure to save the changes.")])]),e._v(" "),a("li",[a("p",[e._v("After this change you can only SSH to this VM from the source IP. Any other source IPs will get denied access. When the agreed time has expired, JIT VM Access will automatically remove the allowed rule and re-lock down the environment.")])])]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Microsoft uses a wide variety of physical, infrastructure, and operational controls to help secure Azure—but there are additional actions you need to take to help safeguard your workloads. Just-in-Time VM Access reduces your surface area exposed to RDP/SSH brute-force attack. This feature is available in the standard pricing tier of Azure Security Center, and you can try "),a("a",{attrs:{href:"https://azure.microsoft.com/en-us/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security Center"),a("OutboundLink")],1),e._v(" for free for the first 60 days. Go and try it out!")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=UOQb2FcdQnU?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("JIT Access"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);