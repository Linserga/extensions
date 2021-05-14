console.log("Background.js");

chrome.browserAction.onClicked.addListener((tab)=>{
    let message = {msg: "hello"};

    chrome.tabs.sendMessage(tab.id, message);
});