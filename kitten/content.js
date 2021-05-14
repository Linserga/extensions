//chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
//    console.log(message);
//});

let images = document.getElementsByTagName("img");
let url = chrome.extension.getURL("images/kitten1.jpg"); 

chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    if(message.turnOn === true){
        
        for(img of images){
              img.src = url;               
        }
    }
});


