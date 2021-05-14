document.getElementById('fontColor').addEventListener('change', ()=>{
   let color = document.getElementById('fontColor').value;

   chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
       chrome.tabs.sendMessage(tabs[0].id, {color: color});
   });
});