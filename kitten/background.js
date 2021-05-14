chrome.browserAction.onClicked.addListener((tab)=>{
    let message = {turnOn: true};
    chrome.tabs.sendMessage(tab.id, message);
});
