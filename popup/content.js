console.log("content.js");

chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    let paragraphs = document.getElementsByTagName("p");
    for (paragraph of paragraphs){
        paragraph.innerHTML = message.msg;
    }
});