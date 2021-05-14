document.addEventListener('dblclick', ()=>{
    let selectedWord = document.getSelection().toString().trim();
    chrome.storage.local.set({word: selectedWord});
});