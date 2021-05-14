chrome.storage.local.get(['limit'], budget => {
   if(budget.limit){
       document.getElementById('limit').innerHTML = budget.limit;
   }
});

document.getElementById('saveLimit').addEventListener("click", ()=>{
    let newLimit = parseInt(document.getElementById("newLimit").value);

    if(Number.isInteger(newLimit)){
        chrome.storage.local.set({limit: newLimit});
        chrome.notifications.create({
           type: "basic",
           iconUrl: "icons/commute18.png",
           title: "Limit",
           message: "New limit was set"
        });
        close();
    }else{
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/commute18.png",
            title: "Limit should be a number",
            message: "Please provide a correct number"
        });
    }
});

document.getElementById('resetSpent').addEventListener('click', () => {

    chrome.storage.local.set({spent: 0});
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/commute18.png',
        title: "Spent was reset",
        message: "Your spent was reset"
    });
});



document.getElementById('launchTimer').addEventListener('click',()=>{

    chrome.alarms.create('countdown15', {
        periodInMinutes: 1,
        when: Date.now()
    });
    chrome.alarms.onAlarm.addListener((alarm) => {
        chrome.action.setBadgeText({text: "text"});
    });
});