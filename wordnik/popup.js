chrome.runtime.onMessage.addListener((message, sender, senResponse)=>{
    console.log(message);
    let placeholder = document.getElementById("definition");
    placeholder.innerHTML = message;

})