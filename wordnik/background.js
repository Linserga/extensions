chrome.runtime.onMessage.addListener((message, sender, sendRequest)=>{

    //console.log(message.msg);

    //Using fetch
    let url = 'https://jsonplaceholder.typicode.com/todos/1';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            chrome.runtime.sendMessage(data);
        });


    //Using XMLHttpRequest

    // let xhr = new XMLHttpRequest();
    // xhr.open("GET", url, true);
    // xhr.onreadystatechange = ()=>{
    //     if(xhr.readyState === 4){
    //         let response = JSON.parse(xhr.responseText);
    //         console.log(response.title);
    //         placeholder.innerHTML = response.title;
    //     }
    // }
    // xhr.send();

});