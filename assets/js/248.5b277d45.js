(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{516:function(e,t,r){"use strict";r.r(t);var n=r(13),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥  Make sure you "),r("a",{attrs:{href:"https://github.com/microsoft/azuretipsandtricks",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),r("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cognitive Services documentation"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("💡 Checkout "),r("a",{attrs:{href:"https://azure.microsoft.com/en-us/overview/ai-platform/dev-resources/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure AI resources for developers"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("💡 Read a blog : "),r("a",{attrs:{href:"https://techcommunity.microsoft.com/t5/azure-ai/how-to-use-cognitive-services-and-containers/ba-p/2113684?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use Cognitive Services and containers"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://youtu.be/XLQLNazid4I?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to deploy Azure Cognitive Services in containers"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"how-to-deploy-azure-cognitive-services-in-containers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-deploy-azure-cognitive-services-in-containers"}},[e._v("#")]),e._v(" How to deploy Azure Cognitive Services in containers")]),e._v(" "),r("h4",{attrs:{id:"run-cognitive-services-anywhere"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-cognitive-services-anywhere"}},[e._v("#")]),e._v(" Run Cognitive Services anywhere")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/what-are-cognitive-services?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cognitive Services"),r("OutboundLink")],1),e._v(" provide a broad range of pre-configured Artificial Intelligence capabilities in the categories of "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/what-are-cognitive-services?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vision, Speech, Language, Decision and Search"),r("OutboundLink")],1),e._v(". You can use these capabilities by calling the Cognitive Services REST APIs, which are hosted in Azure. However, sometimes, you want to bring AI capabilities to your on-premises environment, to bring them closer to your data for compliance or security. You can do that by running "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/cognitive-services-container-support?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cognitive Services in Docker containers"),r("OutboundLink")],1),e._v(", which can run anywhere that containers can run.")]),e._v(" "),r("p",[e._v("In this post, we'll deploy an Azure Cognitive Services container and query its API.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Desktop"),r("OutboundLink")],1)])]),e._v(" "),r("h4",{attrs:{id:"download-and-run-an-cognitive-services-docker-image"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#download-and-run-an-cognitive-services-docker-image"}},[e._v("#")]),e._v(" Download and run an Cognitive Services Docker Image")]),e._v(" "),r("p",[e._v("Cognitive Services APIs can run in Docker containers. In a container, the APIs can run anywhere, but they will still need to connect to an Azure Cognitive Services resource to send billing information. First, we'll create an Azure Cognitive Services resource using the Azure portal.")]),e._v(" "),r("ol",[r("li",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),r("li",[e._v("In this example, we'll use the "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/text-analytics/how-tos/text-analytics-how-to-sentiment-analysis?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Text Analytics Sentiment Analysis API"),r("OutboundLink")],1),e._v(". Search for "),r("strong",[e._v("Text Analytics")]),e._v(', select the "Text Analytics" result and click '),r("strong",[e._v("Create")]),e._v(" "),r("ol",[r("li",[e._v("This brings you to the "),r("strong",[e._v("Create Text Analytics")]),e._v(" blade")]),e._v(" "),r("li",[e._v("Select a "),r("strong",[e._v("Resource Group")])]),e._v(" "),r("li",[e._v("Fill in a "),r("strong",[e._v("Name")]),e._v(" for the service")]),e._v(" "),r("li",[e._v("Pick a "),r("strong",[e._v("Pricing tier")])]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Review + create")]),e._v(" and "),r("strong",[e._v("Create")]),e._v(" after that to create the service")])])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/107create.png")}}),e._v(" "),r("p",[e._v("(Create Text Analytics in the Azure portal)")]),e._v(" "),r("p",[e._v("When the Text Analytics Cognitive Service is created, navigate to it in the Azure portal. In the "),r("strong",[e._v("Keys and Endpoint blade")]),e._v(", copy the "),r("strong",[e._v("Access key")]),e._v(" and the "),r("strong",[e._v("Endpoint")]),e._v(" for the service. We'll need those later.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/107keys.png")}}),e._v(" "),r("p",[e._v("(Keys and Endpoints blade in the Azure portal)")]),e._v(" "),r("p",[e._v("Now that we have a Cognitive Service in Azure, we can download and run a Cognitive Service in a Docker container locally.")]),e._v(" "),r("ol",[r("li",[e._v("On your local machine (or wherever you have installed Docker), open a "),r("strong",[e._v("Command Prompt")]),e._v(" and type the following command to pull the container image for the sentiment analysis API")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker pull mcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment:3.0-en\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("ol",{attrs:{start:"2"}},[r("li",[e._v("When the container is downloaded, you need to start it by running the following command, which includes the "),r("strong",[e._v("access key")]),e._v(" and "),r("strong",[e._v("endpoint")]),e._v(" that you've copied from the Azure portal")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker run --rm -it -p 5000:5000 --memory 8g --cpus 1 \nmcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment:3.0-en\nEula=accept \nBilling={ENDPOINT_URI} \nApiKey={API_KEY}\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br")])]),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Now that the container is running, you can access the API through https://localhost:5000. Open a browser and navigate to the URL")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/107runninglocal.png")}}),e._v(" "),r("p",[e._v("(Cognitive Service running locally in a Docker container)")]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Click the "),r("strong",[e._v("Service API Description")]),e._v(" link. This opens the swagger page for the API. In here, you can browse the API endpoints and try them out")]),e._v(" "),r("li",[e._v("Select the "),r("strong",[e._v("/text/analytics/v3.0/sentiment")]),e._v(" endpoint")]),e._v(" "),r("li",[e._v("Click the "),r("strong",[e._v("Try it out!")]),e._v(" button")]),e._v(" "),r("li",[e._v("In the body parameter, paste in the following JSON data:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('{\n    "documents": [\n        {\n            "language": "en",\n            "id": "1",\n            "text": "I love this"\n        }\n    ]\n}\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br")])]),r("ol",{attrs:{start:"8"}},[r("li",[e._v("Change the "),r("strong",[e._v("Parameter content type")]),e._v(" to "),r("strong",[e._v("application/json")])]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Execute")]),e._v(" to try it out")]),e._v(" "),r("li",[e._v('Scroll down to see the results. This will show that the sentence "I love this" is positive. You can play around with the service by changing the sentence to "I hate this" and check the result')])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/107response.png")}}),e._v(" "),r("p",[e._v("(Result of querying the Cognitive Service in a container)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/cognitive-services-container-support?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cognitive Services in Docker containers"),r("OutboundLink")],1),e._v(" enable you to run your cognitive applications anywhere. Go and check it out!")])])}),[],!1,null,null,null);t.default=i.exports}}]);