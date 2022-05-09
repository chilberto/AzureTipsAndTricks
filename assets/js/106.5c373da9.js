(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{539:function(e,t,o){"use strict";o.r(t);var s=o(66),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more:  "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Virtual Machines documentation"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("📺 Watch the video : "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=pQ9dQ13B2vM&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=45?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use the Azure Virtual Machines Serial Console"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"serial-console-with-azure-vms-troubleshooting-and-diagnosing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#serial-console-with-azure-vms-troubleshooting-and-diagnosing"}},[e._v("#")]),e._v(" Serial console with Azure VMs - Troubleshooting and diagnosing")]),e._v(" "),o("p",[e._v("Do you have Virtual Machines in Azure? If so, you probably need to resolve a problem with them from time to time. This is sometimes difficult with VMs running in Azure, as some things, like the boot menu, aren't visible to you. Luckily, there is a very handy tool that you can use to troubleshoot your VM in Azure. It's called the "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/troubleshooting/serial-console-windows?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Virtual Machine Serial Console"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Serial console lets you use a command line to operate your VM from the Azure Portal. The beauty of it is that it works independent from the state of the VM. So it works when you're booting up, shutting down and when you are running. And it even works if the VM doesn't have an internet connection as the serial console connects to the COM1 serial port. Let's explore how we can use the serial console with Azure VMs for troubleshooting and diagnostics.")]),e._v(" "),o("h5",{attrs:{id:"making-it-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#making-it-work"}},[e._v("#")]),e._v(" Making it work")]),e._v(" "),o("p",[e._v("The serial console feature is available for "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/troubleshooting/serial-console-windows?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/troubleshooting/serial-console-linux?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux"),o("OutboundLink")],1),e._v(" VM images. For most Windows images that are created in February 2018 or after that, it will work out-of-the-box. In case that it doesn't work, you need to make sure that you have all of the "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/troubleshooting/serial-console-windows#prerequisites?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("prerequisites"),o("OutboundLink")],1),e._v(" in place and you can follow "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/troubleshooting/serial-console-windows#enable-serial-console-in-custom-or-older-images?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("these steps"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/Serial_Console_in_the_VM_blade_in_the_Azure_portal.png")}}),e._v(" "),o("p",[e._v("(Serial console in the Azure portal)")]),e._v(" "),o("h5",{attrs:{id:"working-with-serial-console"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#working-with-serial-console"}},[e._v("#")]),e._v(" Working with serial console")]),e._v(" "),o("p",[e._v("In my case, the serial console works out-of-the-box. This is because I run a VM with an image of Windows 10 and Visual Studios latest preview that was created after February 2018.")]),e._v(" "),o("p",[e._v("When you open the serial console, it shows you the SAC command prompt. From there, you can perform very helpfull operations on your VM, like restarting it and kill processes.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/Serial_console_SAC_commands.png")}}),e._v(" "),o("p",[e._v("(Serial console SAC commands)")]),e._v(" "),o("p",[e._v("Serial console works with so-called 'channels'. From the SAC command prompt, you can start a channel for cmd.exe by typing "),o("strong",[e._v("CMD <enter>")]),e._v(". This start the CMD channel. And by typing "),o("strong",[e._v("ch -? <enter>")]),e._v(", you'll see all of the commands that you can use to manage the channel.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/Serial_console_creating_a_CDM_channel.png")}}),e._v(" "),o("p",[e._v("(Serial console channel management commands)")]),e._v(" "),o("p",[e._v("Now, you can use the shortcut "),o("strong",[e._v("<esc><tab>")]),e._v(" to switch to the CMD channel and back. Once you do, you switch to the CMD channel, which allows you to use the regular windows command prompt to do everything that you need to. You will need to log in with your VM administrator account to access the command prompt. Because of this, one of the prerequisites is that you have an administrative account with a password for the VM.")]),e._v(" "),o("p",[e._v("Once logged in, you can, for instance check the properties of the network card or manipulate the file system.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/Show_file_structure_in_CMD_channel.png")}}),e._v(" "),o("p",[e._v("(Manipulate the file system in the CMD channel)")]),e._v(" "),o("p",[e._v("If you prefer to use PowerShell, you can even start a PowerShell prompt from the CMD channel. Just type "),o("strong",[e._v("powershell <enter>")]),e._v(". Now, you can use PowerShell to do all sorts of thing. For instance, to check if RDP is enabled in your VM.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/Check_if_RDP_is_enabled_using_PowerShell.png")}}),e._v(" "),o("p",[e._v("(Check if RDP is enabled using PowerShell)")]),e._v(" "),o("h5",{attrs:{id:"using-serial-console-to-get-into-the-vm-boot-menu"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-serial-console-to-get-into-the-vm-boot-menu"}},[e._v("#")]),e._v(" Using serial console to get into the VM boot menu")]),e._v(" "),o("p",[e._v("One thing that I've always wanted to do with VMs in Azure that run some of my old images, is to access the boot menu. Sometimes, I just need the option to, for instance, start Windows in safe mode. Now, with serial console, I can. And it's pretty simple to set up.")]),e._v(" "),o("ol",[o("li",[e._v("Switch to a cmd channel in the serial console. You can do that by using "),o("strong",[e._v("<esc><tab>")]),e._v(". If you don't have a cmd channel yet, type "),o("strong",[e._v("CMD <enter>")]),e._v(" from the SAC command prompt")]),e._v(" "),o("li",[e._v("Enter the following commands:")])]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("bcdedit /set {bootmgr} displaybootmenu yes \\<enter>\n\nbcdedit /set {bootmgr} timeout 20 \\<enter>\n\nbcdedit /set {bootmgr} bootems yes \\<enter>\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br"),o("span",{staticClass:"line-number"},[e._v("3")]),o("br"),o("span",{staticClass:"line-number"},[e._v("4")]),o("br"),o("span",{staticClass:"line-number"},[e._v("5")]),o("br")])]),o("p",[e._v("The timeout in the commands determines how long you can see the boot manager menu. That's it! Now, when you reboot the VM, you can access the boot menu from the serial console. You can test that by going to the SAC command prompt and typing in "),o("strong",[e._v("restart <enter>")]),e._v(". This reboots the VM and shows you the standard windows boot menu. When you now press "),o("strong",[e._v("F8")]),e._v(", the advanced boot options menu appears.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/Windows_boot_menu_through_serial_console.png")}}),e._v(" "),o("p",[e._v("(Windows Advanced Boot Options menu in the serial console)")]),e._v(" "),o("h5",{attrs:{id:"conclusion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),o("p",[e._v("Serial console is a hidden gem that can help you a lot when you need to troubleshoot your Azure VM. Go and check it out.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Virtual Machines documentation"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/troubleshooting/serial-console-windows?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Virtual Machine Serial Console for Windows"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/troubleshooting/serial-console-linux?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Virtual Machine Serial Console for Linux"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);