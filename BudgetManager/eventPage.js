chrome.contextMenus.create({
    id: "spendMoney",
    title: "SpendMoney",
    contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener((data)=>{
    console.log(data);
    if(data.menuItemId === "spendMoney" && Number.isInteger(parseInt(data.selectionText))){
        chrome.storage.local.get(['total', 'limit'], (budget)=>{
           let total = budget.total ? budget.total : 0;
           let selectedAmount = parseInt(data.selectionText);
           let newTotal = total + selectedAmount;

           chrome.storage.local.set({total: newTotal}, ()=>{
               if(newTotal >= budget.limit){
                   chrome.notifications.create({
                       type: 'basic',
                       iconUrl: 'icons/commute18.png',
                       title: 'Limit Reached',
                       message: "You've reached you limit"
                   });
               }
           });

        });
    }else{
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/commute18.png',
            title: "Not a number",
            message: "You've selected not a number"
        })
    }
});

chrome.storage.onChanged.addListener((changes, areaName)=>{
    console.log(changes);
    chrome.browserAction.setBadgeText({text: changes.total.newValue.toString()});
});