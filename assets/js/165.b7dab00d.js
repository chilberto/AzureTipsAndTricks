(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{595:function(e,t,a){"use strict";a.r(t);var s=a(66),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🦄 Follow me on Twitter for daily software updates and a chance to get "),a("strong",[e._v("FREE Azure sticker")]),e._v(" set shipped anywhere!")]),e._v(" "),a("p",[e._v("🔥 Make sure you "),a("a",{attrs:{href:"https://github.com/Microsoft/AzureTipsAndTricks?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),a("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/sql/azure-data-studio/powershell-extension?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerShell in Azure Data Studio"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"how-to-use-powershell-in-azure-data-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-powershell-in-azure-data-studio"}},[e._v("#")]),e._v(" How to use PowerShell in Azure Data Studio")]),e._v(" "),a("h4",{attrs:{id:"azure-data-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-data-studio"}},[e._v("#")]),e._v(" Azure Data Studio")]),e._v(" "),a("p",[e._v("Managing data in Azure is a very frequent task for most Azure developers. "),a("a",{attrs:{href:"https://docs.microsoft.com/sql/azure-data-studio/what-is?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Data Studio"),a("OutboundLink")],1),e._v(" is a great, free, cross-platform tool to do just that. Azure Data Studio offers a modern editor experience for managing data across multiple sources with fast intellisense, code snippets, source control integration, and an integrated terminal.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/41azuredatastudio.png")}}),e._v(" "),a("p",[e._v("(Azure Data Studio)")]),e._v(" "),a("p",[e._v("And now, you can use "),a("a",{attrs:{href:"https://docs.microsoft.com/sql/azure-data-studio/powershell-extension?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerShell in Azure Data Studio"),a("OutboundLink")],1),e._v(". This means that you can reuse your PowerShell skills and that you can execute your favorite scripts.")]),e._v(" "),a("p",[e._v("In this post, we'll explore how to get started with using PowerShell in Azure Data Studio.")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),a("ul",[a("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),a("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),a("li",[e._v("Azure Data Studio. You can download a free copy "),a("a",{attrs:{href:"https://docs.microsoft.com/sql/azure-data-studio/download?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Make sure that you have the latest version of PowerShell Core installed on your machine. You can download it "),a("a",{attrs:{href:"https://github.com/PowerShell/PowerShell/releases/?WT.mc_id=code-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"use-powershell-with-azure-data-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-powershell-with-azure-data-studio"}},[e._v("#")]),e._v(" Use PowerShell with Azure Data Studio")]),e._v(" "),a("p",[e._v("To get started with PowerShell in Azure Data Studio, we need to install the PowerShell extension.")]),e._v(" "),a("ol",[a("li",[e._v("Open "),a("strong",[e._v("Azure Data Studio")]),e._v(" as an administrator and click on the "),a("strong",[e._v("extensions")]),e._v(" menu")]),e._v(" "),a("li",[e._v('In "'),a("strong",[e._v("extensions")]),e._v('", search for '),a("strong",[e._v("PowerShell")])]),e._v(" "),a("li",[e._v("Click on the PowerShell extension result")]),e._v(" "),a("li",[e._v("Click on "),a("strong",[e._v("install")]),e._v(" to install the extension")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/41psextension.png")}}),e._v(" "),a("p",[e._v("(Install the PowerShell extension in Azure Data Studio)")]),e._v(" "),a("p",[e._v("Now that we have the PowerShell extension installed, let's use it. We'll create a new file that will create an Azure SQL Server and Database.")]),e._v(" "),a("ol",[a("li",[e._v("In Azure Data Studio, open the terminal (View > Terminal)")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/41terminal.png")}}),e._v(" "),a("p",[e._v("(Terminal in Azure Data Studio)")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("We are going to run some PowerShell commands to interact with Azure. Before we can do that, we need to make sure that we have the Azure PowerShell modules installed. Run the following commands in the terminal:")])]),e._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Install-Module")]),e._v(" Az\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Import-Module")]),e._v(" Az\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Next, create a new PowerShell file and open it in the editor. You can do that by running the following command in the terminal:")])]),e._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("New-EditorFile")]),e._v(" CreateNewSQL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ps1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Paste the script below into the newly created .ps1 file. This script logs into Azure, creates a resource group and creates an Azure SQL Server and a database in it.")])]),e._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# login to Azure")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Connect-AzAccount")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set the resource group name and location for your server")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$resourceGroupName")]),e._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"myResourceGroup-'),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-Random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")])]),e._v('"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$location")]),e._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"westeurope"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set an admin login and password for your server")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$adminSqlLogin")]),e._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"SqlAdmin"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$password")]),e._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ChangeYourAdminPassword1"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set server name - the logical server name has to be unique in the system")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$serverName")]),e._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"server-'),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-Random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")])]),e._v('"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The sample database name")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$databaseName")]),e._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mySampleDatabase"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The ip address range that you want to allow to access your server")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$startIp")]),e._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.0.0.0"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$endIp")]),e._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"255.255.255.255"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a resource group")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$resourceGroup")]),e._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("New-AzResourceGroup")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Name "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$resourceGroupName")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Location "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$location")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a server with a system wide unique server name")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$server")]),e._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("New-AzSqlServer")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ResourceGroupName "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$resourceGroupName")]),e._v(" `\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ServerName "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$serverName")]),e._v(" `\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Location "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$location")]),e._v(" `\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("SqlAdministratorCredentials $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("New-Object")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("TypeName System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Management"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Automation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("PSCredential "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ArgumentList "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$adminSqlLogin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ConvertTo-SecureString")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("String "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$password")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("AsPlainText "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Force"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a server firewall rule that allows access from the specified IP range")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$serverFirewallRule")]),e._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("New-AzSqlServerFirewallRule")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ResourceGroupName "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$resourceGroupName")]),e._v(" `\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ServerName "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$serverName")]),e._v(" `\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("FirewallRuleName "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AllowedIPs"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("StartIpAddress "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$startIp")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("EndIpAddress "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$endIp")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a blank database with an S0 performance level")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$database")]),e._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("New-AzSqlDatabase")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ResourceGroupName "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$resourceGroupName")]),e._v(" `\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ServerName "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$serverName")]),e._v(" `\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("DatabaseName "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$databaseName")]),e._v(" `\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("RequestedServiceObjectiveName "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"S0"')]),e._v(" `\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("SampleName "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AdventureWorksLT"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Clean up deployment ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Remove-AzResourceGroup -ResourceGroupName $resourceGroupName")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("The PowerShell extension adds functionality to better work with PowerShell in Azure Data Studio. For instance, when you hover over a PowerShell commandlet, you can see its definition. Try it out by hovering over the first line of the script (Connect-AzAccount)")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/41definition.png")}}),e._v(" "),a("p",[e._v("(Define PowerShell functions in Azure Data Studio)")]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("The PowerShell extension also analyzes PowerShell in the editor and tells you if there are any problems with it. Take a look in the terminal window, under the "),a("strong",[e._v("PROBLEMS")]),e._v(" tab. In the image below, there are 4 problems in the "),a("strong",[e._v("PROBLEMS")]),e._v(" tab.")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/41warnings.png")}}),e._v(" "),a("p",[e._v("(PowerShell script problem detection in Azure Data Studio)")]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("p",[e._v("In Azure Data Studio, you can run a line of a script in the editor by pressing F8. Let's run the complete script. Select all the text of the script and press F8 to execute it")])]),e._v(" "),a("li",[a("p",[e._v("The first line of the script (Connect-AzAccount) will log into your Azure account. Click on the link in the output of the terminal and follow the instructions to log in. Once logged in, the script will continue to run")])]),e._v(" "),a("li",[a("p",[e._v("After a while, the script is done. To use the database from Azure Data Studio, you need to add your Azure account to it. The login that you just performed, was only for the PowerShell process, not for the Azure Data Studio itself.")]),e._v(" "),a("ol",[a("li",[e._v("Click on the "),a("strong",[e._v("connections")]),e._v(" menu")]),e._v(" "),a("li",[e._v("In the Azure tab, click on "),a("strong",[e._v("Sign into Azure...")])]),e._v(" "),a("li",[e._v("Click on the "),a("strong",[e._v("Add an Account")]),e._v(" button")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/41addazureaccount.png")}}),e._v(" "),a("p",[e._v("(Add Azure account to Azure Data Studio)")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Follow the instructions by opening the link and pasting in the user code and authenticating to the same Azure account that you used earlier")])])]),e._v(" "),a("li",[a("p",[e._v("After logging into Azure, you can drill into your subscription to find the newly created SQL Database. "),a("strong",[e._v("Click on it")]),e._v(" to connect with it")])]),e._v(" "),a("li",[a("p",[e._v("You are now asked to provide credentials to log in. By default, the script uses the username "),a("strong",[e._v("SqlAdmin")]),e._v(" with the password "),a("strong",[e._v("ChangeYourAdminPassword1")]),e._v(". Fill these in and connect to the database. You'll be able to connect to the database without adding your client IP address to the SQL Server firewall. This is because the script adds a firewall rule that allows all IP addresses to access the server. If you intend to use this script for production purposes, you need to remove this and change the server credentials")])]),e._v(" "),a("li",[a("p",[e._v("Now that you are connected to the database, you can drill down into its tables and perform typical SQL tasks, like querying data, like in the image below:")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/41querydatabase.png")}}),e._v(" "),a("p",[e._v("Query data in the newly created database in Azure Data Studio)")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/sql/azure-data-studio/what-is?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Data Studio"),a("OutboundLink")],1),e._v(" is a really powerful tool for working with data. The "),a("a",{attrs:{href:"https://docs.microsoft.com/sql/azure-data-studio/powershell-extension?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerShell extension for Azure Data Studio"),a("OutboundLink")],1),e._v(" gives you the power to use your PowerShell skills in the world of data. It helps you by adding debug support, auto-complete, script problem analytics, function definition and more. Go and check it out!")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🦄 Follow me on Twitter for daily software updates and a chance to get "),a("strong",[e._v("FREE Azure sticker")]),e._v(" set shipped anywhere!")]),e._v(" "),a("p",[e._v("🔥 Hit the Twitter button below to share this post and spread the Azure love.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);