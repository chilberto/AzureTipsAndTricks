(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{680:function(e,n,t){"use strict";t.r(n);var s=t(66),i=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("🔥  Checkout the Azure Developer page at "),t("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("💡 Checkout "),t("a",{attrs:{href:"https://azure.microsoft.com/en-us/overview/ai-platform/dev-resources/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure AI resources for developers"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/text-analytics/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Text Analytics API documentation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("📺 Watch the video : "),t("a",{attrs:{href:"https://youtu.be/fP2rrDhqCv4?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to perform opinion mining with Azure Cognitive Services"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"learn-how-to-perform-opinion-mining-with-azure-cognitive-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#learn-how-to-perform-opinion-mining-with-azure-cognitive-services"}},[e._v("#")]),e._v(" Learn how to perform opinion mining with Azure Cognitive Services")]),e._v(" "),t("h4",{attrs:{id:"dive-deeper-into-sentiment-analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dive-deeper-into-sentiment-analysis"}},[e._v("#")]),e._v(" Dive deeper into sentiment analysis")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/text-analytics/quickstarts/client-libraries-rest-api?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cognitive Services Text Analytics API"),t("OutboundLink")],1),e._v(" provides the sentiment analysis feature. You can use this to analyze if a sentence is positive, negative, or neutral. And to get a more advanced analysis, you can use the "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/Text-Analytics/how-tos/text-analytics-how-to-sentiment-analysis?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("opinion mining feature of sentiment analysis"),t("OutboundLink")],1),e._v(', which analyzes a sentence on a deeper level and can identify multiple different sentiments in a sentence. For instance, the sentence "I love spicy food, but I hate how it makes me feel", is both positive and negative. Opinion mining can detect those sentiments.')]),e._v(" "),t("p",[e._v("In this post, we'll use the "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/Text-Analytics/how-tos/text-analytics-how-to-sentiment-analysis?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("opinion mining feature"),t("OutboundLink")],1),e._v(" of the "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/text-analytics/quickstarts/client-libraries-rest-api?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cognitive Services Text Analytics API"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),t("ul",[t("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),t("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),t("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),t("li",[e._v("The latest version of "),t("a",{attrs:{href:"https://visualstudio.microsoft.com/downloads/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://code.visualstudio.com/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),t("OutboundLink")],1),e._v(". This post uses Visual Studio, and you can also use VS Code to accomplish the same result")])]),e._v(" "),t("h4",{attrs:{id:"use-the-sentiment-analysis-feature-of-the-text-analytics-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-the-sentiment-analysis-feature-of-the-text-analytics-api"}},[e._v("#")]),e._v(" Use the Sentiment Analysis feature of the Text Analytics API")]),e._v(" "),t("p",[e._v("To use the opinion mining feature, we need a Cognitive Services Text Analytics API, which we'll create in the Azure portal.")]),e._v(" "),t("ol",[t("li",[e._v("Click the "),t("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),t("li",[e._v("Search for "),t("strong",[e._v("Text Analytics")]),e._v(', select the "Text Analytics" result and click '),t("strong",[e._v("Create")]),e._v(" "),t("ol",[t("li",[e._v("This brings you to the "),t("strong",[e._v("Create Text Analytics")]),e._v(" blade")]),e._v(" "),t("li",[e._v("Select a "),t("strong",[e._v("Resource Group")])]),e._v(" "),t("li",[e._v("Fill in a "),t("strong",[e._v("Name")]),e._v(" for the service")]),e._v(" "),t("li",[e._v("Pick a "),t("strong",[e._v("Pricing tier")])]),e._v(" "),t("li",[e._v("Click "),t("strong",[e._v("Review + create")]),e._v(" and "),t("strong",[e._v("Create")]),e._v(" after that to create the service")])])])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/106create.png")}}),e._v(" "),t("p",[e._v("(Create Text Analytics in the Azure portal)")]),e._v(" "),t("p",[e._v("When the Text Analytics Cognitive Service is created, navigate to it in the Azure portal. In the "),t("strong",[e._v("Keys and Endpoint blade")]),e._v(", copy the "),t("strong",[e._v("Access key")]),e._v(" and the "),t("strong",[e._v("Endpoint")]),e._v(" for the service. We'll need those later.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/106keys.png")}}),e._v(" "),t("p",[e._v("(Keys and Endpoints blade in the Azure portal)")]),e._v(" "),t("p",[e._v("Let's use the Text Analytics service in an application that we'll create with Visual Studio.")]),e._v(" "),t("ol",[t("li",[e._v("Open Visual Studio")]),e._v(" "),t("li",[e._v("Create a new console application by navigating to "),t("strong",[e._v("File > New > Project")]),e._v(" and selecting "),t("strong",[e._v("Console Application")])]),e._v(" "),t("li",[e._v("The first thing that we need to do, is to reference a NuGet package to work with the Text Analytics service. Right-click the project file and select "),t("strong",[e._v("Manage NuGet Packages")])]),e._v(" "),t("li",[e._v("Find the package "),t("strong",[e._v("Azure.AI.TextAnalytics")]),e._v(" and install it")])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/106nuget.png")}}),e._v(" "),t("p",[e._v("(Azure.AI.TextAnalytics NuGet package in Visual Studio)")]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Next, create the code in the "),t("strong",[e._v("Program.cs")]),e._v(" file. The file should look like this:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('using System;\nusing System.Collections.Generic;\nusing Azure;\nusing Azure.AI.TextAnalytics;\n\nnamespace OpinionMining\n{\n    class Program\n    {\n        private static readonly AzureKeyCredential credentials = new AzureKeyCredential("Access Key");\n        private static readonly Uri endpoint = new Uri("Service Endpoint");\n        static void Main(string[] args)\n        {\n            var client = new TextAnalyticsClient(endpoint, credentials);\n   \n            SentimentAnalysisWithOpinionMiningExample(client);\n\n            Console.WriteLine("Press any key to exit the app");\n            Console.ReadLine();\n        }\n\n        static void SentimentAnalysisWithOpinionMiningExample(TextAnalyticsClient client)\n        {\n            var documents = new List<string>\n            {\n                "The food and service were unacceptable, but the concierge were nice."\n            };\n\n            AnalyzeSentimentResultCollection reviews = client.AnalyzeSentimentBatch(documents, options: new AnalyzeSentimentOptions()\n            {\n                IncludeOpinionMining = true\n            });\n\n            foreach (AnalyzeSentimentResult review in reviews)\n            {\n                Console.WriteLine($"Document sentiment: {review.DocumentSentiment.Sentiment}\\n");\n                Console.WriteLine($"\\tPositive score: {review.DocumentSentiment.ConfidenceScores.Positive:0.00}");\n                Console.WriteLine($"\\tNegative score: {review.DocumentSentiment.ConfidenceScores.Negative:0.00}");\n                Console.WriteLine($"\\tNeutral score: {review.DocumentSentiment.ConfidenceScores.Neutral:0.00}\\n");\n                foreach (SentenceSentiment sentence in review.DocumentSentiment.Sentences)\n                {\n                    Console.WriteLine($"\\tText: \\"{sentence.Text}\\"");\n                    Console.WriteLine($"\\tSentence sentiment: {sentence.Sentiment}");\n                    Console.WriteLine($"\\tSentence positive score: {sentence.ConfidenceScores.Positive:0.00}");\n                    Console.WriteLine($"\\tSentence negative score: {sentence.ConfidenceScores.Negative:0.00}");\n                    Console.WriteLine($"\\tSentence neutral score: {sentence.ConfidenceScores.Neutral:0.00}\\n");\n\n                    foreach (MinedOpinion minedOpinion in sentence.MinedOpinions)\n                    {\n                        Console.WriteLine($"\\tAspect: {minedOpinion.Aspect.Text}, Value: {minedOpinion.Aspect.Sentiment}");\n                        Console.WriteLine($"\\tAspect positive score: {minedOpinion.Aspect.ConfidenceScores.Positive:0.00}");\n                        Console.WriteLine($"\\tAspect negative score: {minedOpinion.Aspect.ConfidenceScores.Negative:0.00}");\n                        foreach (OpinionSentiment opinion in minedOpinion.Opinions)\n                        {\n                            Console.WriteLine($"\\t\\tRelated Opinion: {opinion.Text}, Value: {opinion.Sentiment}");\n                            Console.WriteLine($"\\t\\tRelated Opinion positive score: {opinion.ConfidenceScores.Positive:0.00}");\n                            Console.WriteLine($"\\t\\tRelated Opinion negative score: {opinion.ConfidenceScores.Negative:0.00}");\n                        }\n                    }\n                }\n                Console.WriteLine($"\\n");\n            }\n        }\n    }\n}\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br"),t("span",{staticClass:"line-number"},[e._v("35")]),t("br"),t("span",{staticClass:"line-number"},[e._v("36")]),t("br"),t("span",{staticClass:"line-number"},[e._v("37")]),t("br"),t("span",{staticClass:"line-number"},[e._v("38")]),t("br"),t("span",{staticClass:"line-number"},[e._v("39")]),t("br"),t("span",{staticClass:"line-number"},[e._v("40")]),t("br"),t("span",{staticClass:"line-number"},[e._v("41")]),t("br"),t("span",{staticClass:"line-number"},[e._v("42")]),t("br"),t("span",{staticClass:"line-number"},[e._v("43")]),t("br"),t("span",{staticClass:"line-number"},[e._v("44")]),t("br"),t("span",{staticClass:"line-number"},[e._v("45")]),t("br"),t("span",{staticClass:"line-number"},[e._v("46")]),t("br"),t("span",{staticClass:"line-number"},[e._v("47")]),t("br"),t("span",{staticClass:"line-number"},[e._v("48")]),t("br"),t("span",{staticClass:"line-number"},[e._v("49")]),t("br"),t("span",{staticClass:"line-number"},[e._v("50")]),t("br"),t("span",{staticClass:"line-number"},[e._v("51")]),t("br"),t("span",{staticClass:"line-number"},[e._v("52")]),t("br"),t("span",{staticClass:"line-number"},[e._v("53")]),t("br"),t("span",{staticClass:"line-number"},[e._v("54")]),t("br"),t("span",{staticClass:"line-number"},[e._v("55")]),t("br"),t("span",{staticClass:"line-number"},[e._v("56")]),t("br"),t("span",{staticClass:"line-number"},[e._v("57")]),t("br"),t("span",{staticClass:"line-number"},[e._v("58")]),t("br"),t("span",{staticClass:"line-number"},[e._v("59")]),t("br"),t("span",{staticClass:"line-number"},[e._v("60")]),t("br"),t("span",{staticClass:"line-number"},[e._v("61")]),t("br"),t("span",{staticClass:"line-number"},[e._v("62")]),t("br"),t("span",{staticClass:"line-number"},[e._v("63")]),t("br"),t("span",{staticClass:"line-number"},[e._v("64")]),t("br"),t("span",{staticClass:"line-number"},[e._v("65")]),t("br"),t("span",{staticClass:"line-number"},[e._v("66")]),t("br")])]),t("p",[e._v("This code connects to the Text Analytics API using the "),t("strong",[e._v("access key")]),e._v(" and the "),t("strong",[e._v("endpoint URL")]),e._v(". Once connected, it calls the "),t("strong",[e._v("AnalyzeSentimentBatch")]),e._v(" method with the "),t("strong",[e._v('"IncludeOpinionMining = true"')]),e._v(" parameter. This lets the Text Analytics service use the opinion mining feature to analyze the sentence")]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[e._v("When you run the program, the code loops through the results and writes the "),t("strong",[e._v("MinedOpinions")]),e._v(' on the screen for the sentence "The food and service were unacceptable, but the concierge were nice.". This results in the image below, which shows that the sentence contains both positive and negative sentiments. It even figured out the subject of the sentiments (which it categorizes as Aspects) as food, service and concierge.')])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/106result.png")}}),e._v(" "),t("p",[e._v("(Result of opinion mining with the Text Analytics API)")]),e._v(" "),t("h4",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services/Text-Analytics/how-tos/text-analytics-how-to-sentiment-analysis?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Opinion Mining feature of the Azure Cognitive Service Text Analytics API"),t("OutboundLink")],1),e._v(" can analyze multiple sentiments within a sentence. Go and check it out!")])])}),[],!1,null,null,null);n.default=i.exports}}]);