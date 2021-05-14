chrome.contextMenus.create({
    id: "spendMoney",
    title: "SpendMoney",
    contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener((data)=>{
    if(data.menuItemId === "spendMoney" && Number.isInteger(parseInt(data.selectionText))){
        chrome.storage.local.get(['spent', 'limit'], (budget)=>{
            let total = budget.spent ? budget.spent : 0;
            let selectedAmount = parseInt(data.selectionText);
            let newTotal = total + selectedAmount;

            chrome.storage.local.set({spent: newTotal}, ()=>{
                if(newTotal >= budget.limit){
                    chrome.notifications.create({
                        type: 'basic',
                        iconUrl: "icons/commute18.png",
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
    //chrome.action.setBadgeText({text: changes.spent.newValue.toString()});
});



