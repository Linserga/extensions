document.addEventListener('dblclick', ()=>{
   let selection = document.getSelection().toString().trim();
   console.log(selection);
   let message = {msg: selection};

   chrome.runtime.sendMessage(message);


});

