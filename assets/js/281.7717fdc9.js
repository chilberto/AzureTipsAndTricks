(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{638:function(e,t,s){"use strict";s.r(t);var r=s(43),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("🔥  🔥  Download the FREE Azure Developer Guide eBook "),s("a",{attrs:{href:"http://aka.ms/azuredevebook?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/translator/translator-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is Translator"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("📺 Watch the video : "),s("a",{attrs:{href:"https://youtu.be/-qhq1eu2d40?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to translate text with the Azure Cognitive Services Translator Service"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"how-to-translate-text-with-the-azure-cognitive-services-translator-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-translate-text-with-the-azure-cognitive-services-translator-service"}},[e._v("#")]),e._v(" How to translate text with the Azure Cognitive Services Translator Service")]),e._v(" "),s("h4",{attrs:{id:"translate-text-with-an-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#translate-text-with-an-api"}},[e._v("#")]),e._v(" Translate text with an API")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/what-are-cognitive-services?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cognitive Services"),s("OutboundLink")],1),e._v(" is a collection of powerful intelligent services. One of those services is the "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/translator/translator-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Translator service"),s("OutboundLink")],1),e._v(". Translator is an API that you can call to translate text from one language to another in real time. It does this by using a predefined machine learning model that you don't have to train. You can also use Translator to "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/translator/document-translation/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("translate documents"),s("OutboundLink")],1),e._v(", and to translate text based on "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/translator/custom-translator/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("customized models"),s("OutboundLink")],1),e._v(" that contain domain- and industry-specific language.")]),e._v(" "),s("p",[e._v("In this post, we'll create a Translator resource and use it to translate text.")]),e._v(" "),s("h4",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),s("ul",[s("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),s("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),s("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),s("li",[e._v("The latest version of "),s("a",{attrs:{href:"https://visualstudio.microsoft.com/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio"),s("OutboundLink")],1),e._v(" or "),s("a",{attrs:{href:"https://code.visualstudio.com/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code"),s("OutboundLink")],1)])]),e._v(" "),s("h4",{attrs:{id:"create-and-use-an-azure-cognitive-services-translator-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-and-use-an-azure-cognitive-services-translator-service"}},[e._v("#")]),e._v(" Create and use an Azure Cognitive Services Translator Service")]),e._v(" "),s("p",[e._v("We'll start by creating a Translator resource from the Azure portal.")]),e._v(" "),s("ol",[s("li",[e._v("Go to the "),s("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Click the "),s("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),s("li",[e._v("Search for "),s("strong",[e._v("Translator")]),e._v(', select the "Translator" result and click '),s("strong",[e._v("Create")]),e._v(" "),s("ol",[s("li",[e._v("Select a "),s("strong",[e._v("Resource Group")])]),e._v(" "),s("li",[e._v("Pick a "),s("strong",[e._v("Region")]),e._v(" for the service")]),e._v(" "),s("li",[e._v("Fill in a "),s("strong",[e._v("Name")])]),e._v(" "),s("li",[e._v("Select a "),s("strong",[e._v("Pricing tier")]),e._v(". The "),s("strong",[e._v('"Free F0"')]),e._v(" tier is fine for now")]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("Review + create")]),e._v(" and then "),s("strong",[e._v("Create")])])])])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/133create.png")}}),e._v(" "),s("p",[e._v("(Create a Translator resource)")]),e._v(" "),s("p",[e._v("When the Translator resource is created, we need to copy its connection details.")]),e._v(" "),s("ol",[s("li",[e._v("Navigate to the Translator resource in the Azure portal")]),e._v(" "),s("li",[e._v("Click on the "),s("strong",[e._v("Keys and Endpoint")]),e._v(" menu")]),e._v(" "),s("li",[e._v("Copy the "),s("strong",[e._v("Key")]),e._v(" and "),s("strong",[e._v("Location/Region")]),e._v(". We'll need those later")])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/133keys.png")}}),e._v(" "),s("p",[e._v("(Translator Keys and Endpoint in the Azure portal)")]),e._v(" "),s("p",[e._v("Next, we'll create a console application that connects to the Translator resource, and translates text. We'll use Visual Studio for that, and you can also use VS Code if you prefer.")]),e._v(" "),s("ol",[s("li",[e._v("In Visual Studio, create a "),s("strong",[e._v("new project")]),e._v(" (New > Project)")]),e._v(" "),s("li",[e._v("Choose "),s("strong",[e._v("Console Application")])]),e._v(" "),s("li",[e._v("Give the project a "),s("strong",[e._v("Name")])]),e._v(" "),s("li",[e._v("Choose a "),s("strong",[e._v("Location")]),e._v(" for the project")]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("Next")])]),e._v(" "),s("li",[e._v("Select the latest version of "),s("strong",[e._v(".NET")])]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("Create")]),e._v(" to create the Console Application project")])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/133consoleproject.png")}}),e._v(" "),s("p",[e._v("(Create a Console Application with Visual Studio)")]),e._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[e._v("Right-click the project file and click "),s("strong",[e._v("Manage NuGet Packages")])]),e._v(" "),s("li",[e._v("Click "),s("strong",[e._v("Browse")])]),e._v(" "),s("li",[e._v("Search for and install the NuGet package "),s("strong",[e._v("Newtonsoft.Json")]),e._v(". We'll need this in our code")]),e._v(" "),s("li",[e._v("Open "),s("strong",[e._v("Program.cs")]),e._v(" and replace the code with the code below:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('using System;\nusing System.Net.Http;\nusing System.Text;\nusing System.Threading.Tasks;\nusing Newtonsoft.Json; // Install Newtonsoft.Json with NuGet\n\nclass Program\n{\n    private static readonly string subscriptionKey = "YOUR-SUBSCRIPTION-KEY";\n    private static readonly string endpoint = "https://api.cognitive.microsofttranslator.com/";\n\n    // Add your location, also known as region. The default is global.\n    // This is required if using a Cognitive Services resource.\n    private static readonly string location = "YOUR_RESOURCE_LOCATION";\n\n    static async Task Main(string[] args)\n    {\n        // Input and output languages are defined as parameters.\n        string route = "/translate?api-version=3.0&from=en&to=de&to=it";\n        string textToTranslate = "Hello, world! This is an Azure tip.";\n        object[] body = new object[] { new { Text = textToTranslate } };\n        var requestBody = JsonConvert.SerializeObject(body);\n\n        using (var client = new HttpClient())\n        using (var request = new HttpRequestMessage())\n        {\n            // Build the request.\n            request.Method = HttpMethod.Post;\n            request.RequestUri = new Uri(endpoint + route);\n            request.Content = new StringContent(requestBody, Encoding.UTF8, "application/json");\n            request.Headers.Add("Ocp-Apim-Subscription-Key", subscriptionKey);\n            request.Headers.Add("Ocp-Apim-Subscription-Region", location);\n\n            // Send the request and get response.\n            HttpResponseMessage response = await client.SendAsync(request).ConfigureAwait(false);\n            // Read response as a string.\n            string result = await response.Content.ReadAsStringAsync();\n            Console.WriteLine(result);\n        }\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br")])]),s("p",[e._v("This code uses HttpClient to connect to the Translator API. It sends the string textToTranslate to the service and shows the API response in the console output. In the route string, it sends the "),s("strong",[e._v("from=en")]),e._v(" and "),s("strong",[e._v("to=de&to=it")]),e._v(" parameters. These indicate that the API should translate from English (en) to German (de) and Italian (it).")]),e._v(" "),s("ol",{attrs:{start:"12"}},[s("li",[e._v("To make the code work, replace "),s("strong",[e._v('"YOUR-SUBSCRIPTION-KEY"')]),e._v(" with the Translator "),s("strong",[e._v("Key")]),e._v(", and "),s("strong",[e._v('"YOUR_RESOURCE_LOCATION"')]),e._v(" with the "),s("strong",[e._v("Location\\Region")])]),e._v(" "),s("li",[e._v("Run the application")])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/133result.png")}}),e._v(" "),s("p",[e._v("(Response from the Translator service)")]),e._v(" "),s("p",[e._v("As you can see, the text is translated in German and Italian with just one simple API request.")]),e._v(" "),s("h4",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/translator/translator-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cognitive Services Translator Service"),s("OutboundLink")],1),e._v(" enables you to translate text to different languages in real time. You can use it from any programming language that can communicate with an API, which makes it really easy to use. Go and check it out!")])])}),[],!1,null,null,null);t.default=a.exports}}]);