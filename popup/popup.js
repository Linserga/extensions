document.getElementById("text").addEventListener('input', ()=>{
    let x = document.getElementById("text").value;

    let message = {msg:x};

    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
});





