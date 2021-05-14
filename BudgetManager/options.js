chrome.storage.local.get(['limit'], (budget) => {
   let limit = document.getElementById('limit');
   limit.value = budget.limit;
});

document.getElementById("saveLimit").addEventListener('click', ()=>{
    let limit = document.getElementById("limit").value;
    if(limit){
        chrome.storage.local.set({limit: limit}, ()=>{
            close();
        });
    }
});

document.getElementById("resetTotal").addEventListener('click', () => {
    chrome.storage.local.set({total: 0});
    chrome.notifications.create(
        {
            type: "basic",
            iconUrl: "icons/commute18.png",
            title: "Reset Total",
            message: "Total was set to 0"
        }
    );
    //close();
});