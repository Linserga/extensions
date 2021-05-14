chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    if (request.msg === "showPage") {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
            chrome.action.setBadgeText({
                tabId: tabs[0].id,
                text: "Wiki"
            });
        })
    }
});