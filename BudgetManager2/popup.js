console.log("popup");
chrome.storage.local.get(['spent', 'limit'], budget =>{

    if(budget.spent){
        document.getElementById("amount").innerHTML = budget.spent;
    }
    if(budget.limit){
        document.getElementById('limit').innerHTML = budget.limit;
    }
});

document.getElementById("newAmount").addEventListener('keypress', e=>{
    if(e.key === "Enter"){
        let amount = parseInt(document.getElementById('newAmount').value);
        console.log(amount);

        if(Number.isInteger(amount)){
            let newAmount = parseInt(spent) + amount;
            chrome.storage.local.set({spent: newAmount});

            document.getElementById('amount').innerHTML = newAmount;
            document.getElementById('limit').innerHTML = limit;

            if(newAmount > limit){
                chrome.notifications.create({
                    type: 'basic',
                    iconUrl: "icons/commute18.png",
                    title: "Limit exceeded",
                    message: "You spent is higher than you limit"
                });
            }
        }else{
            chrome.notifications.create({
                type: 'basic',
                iconUrl: "icons/commute18.png",
                title: "Limit should be a number",
                message: "Type a number, please"
            })
        }
        document.getElementById('newAmount').value = "";
    }
});