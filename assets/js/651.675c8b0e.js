(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{919:function(t,e,o){"use strict";o.r(e);var a=o(13),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Cosmos DB"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("h3",{attrs:{id:"using-the-data-migration-tool-with-cosmos-db"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-data-migration-tool-with-cosmos-db"}},[t._v("#")]),t._v(" Using the Data Migration Tool with Cosmos DB")]),t._v(" "),o("p",[t._v("One tasks that seems to come up over and over is migrating data from one format into another. I was recently building out an API and needed to dump some data into Cosmos DB. The tool that made short work of this was the "),o("a",{attrs:{href:"https://www.microsoft.com/en-us/download/details.aspx?id=46436",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure DocumentDB Data Migration Tool"),o("OutboundLink")],1),t._v(". In my case, I needed to dump a large JSON file into Cosmos DB. Here is how I did it.")]),t._v(" "),o("h4",{attrs:{id:"the-tools-sample-data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-tools-sample-data"}},[t._v("#")]),t._v(" The Tools + Sample Data")]),t._v(" "),o("p",[t._v("Download and install the "),o("a",{attrs:{href:"https://www.microsoft.com/en-us/download/details.aspx?id=46436",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure DocumentDB Data Migration Tool"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("Grab whatever sample file that you'd like to experiment with. I'm using the "),o("code",[t._v("en_kjv.json")]),t._v(" JSON file from "),o("a",{attrs:{href:"https://github.com/thiagobodruk/bible/tree/master/json?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("Now we're ready to begin work!")]),t._v(" "),o("h4",{attrs:{id:"get-to-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-to-work"}},[t._v("#")]),t._v(" Get to Work")]),t._v(" "),o("p",[t._v("Open the Data Migration Tool and under "),o("strong",[t._v("Source Information")]),t._v(", point to the local JSON file as shown below.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/migrationcosmos1.png")}}),t._v(" "),o("p",[t._v("Ensure you have a Cosmos DB database id and collection. I'm using the following:")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/migrationcosmos7.png")}}),t._v(" "),o("p",[t._v("Go to "),o("strong",[t._v("Keys")]),t._v(" (inside your Cosmos DB blade in the portal) to copy the "),o("strong",[t._v("Primary Connection String")])]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/migrationcosmos2.png")}}),t._v(" "),o("p",[t._v("You'll need to append the Database name to the end of the string. For example "),o("code",[t._v("Database=bible")]),t._v(" will be appended to the string "),o("code",[t._v("AccountEndpoint=https://mbcrump.documents.azure.com:443/;AccountKey=VxDEcJblah==;Database=bible")]),t._v(" that I copied out of the portal. Now press "),o("strong",[t._v("Verify Connection")]),t._v(".")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/migrationcosmos3.png")}}),t._v(" "),o("p",[t._v("You'll need to add the "),o("strong",[t._v("Collection")]),t._v(" and in my case it is "),o("code",[t._v("verses")]),t._v(". We'll take the defaults on the next two screens and you'll finally see a "),o("strong",[t._v("Confirm inport settings")]),t._v(" page.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/migrationcosmos4.png")}}),t._v(" "),o("p",[t._v("You can even click on "),o("strong",[t._v("View Command")]),t._v(" to see the command that will be used to migrate your data. This is helpful to just learn the syntax.")]),t._v(" "),o("p",[t._v("You'll finally see the Import has completed with 66 transferred. (This is the total number of books in the Bible.)")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/migrationcosmos5.png")}}),t._v(" "),o("p",[t._v("If you go back to the Azure Portal and open Cosmos DB and look under "),o("strong",[t._v("Data Explorer")]),t._v(", you'll see the data has been imported successfully into our collection.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/migrationcosmos6.png")}})])}),[],!1,null,null,null);e.default=s.exports}}]);