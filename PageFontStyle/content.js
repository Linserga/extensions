console.log("content");

chrome.runtime.sendMessage({msg: "showPage"});

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    if(request.color){
        document.getElementById('mw-content-text').style.color = request.color;
    }
});

