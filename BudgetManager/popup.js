chrome.storage.local.get(['total', 'limit'], (budget) => {
    if(budget.limit){
        console.log(budget.limit);
        document.getElementById('limit').innerHTML = budget.limit;
    }

    if(budget.total){
        document.getElementById("total").innerHTML = budget.total;
    }
});

document.getElementById("spendAmount").addEventListener('click', ()=>{
    chrome.storage.local.get(['total', 'limit'], (budget)=>{
        console.log(budget);
        let newTotal = 0;
        if(budget.total){
            newTotal = budget.total;
            console.log(`Total is ${newTotal}`);
        }

        let amount = document.getElementById("amount").value;
        newTotal += parseInt(amount, 10);
        console.log(`New amount is ${newTotal}`);

        chrome.storage.local.set({total: newTotal}, ()=>{
            console.log(`New total is set to ${newTotal}`);
            if(amount && newTotal >= budget.limit){
                chrome.notifications.create({
                    type: "basic",
                    iconUrl: "icons/commute18.png",
                    title: "Limit reached",
                    message: "Looks like you've reached your limit"
                })
            }
        });

        document.getElementById("total").innerHTML = newTotal;
        document.getElementById("amount").value = "";
    } )
})

