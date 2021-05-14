chrome.storage.local.get(['word'], (result)=>{
    if(result.word){
        let word = result.word;

        let placeholder = document.getElementById("placeholder");
        placeholder.innerHTML = word;

        let url = `https://api.wordnik.com/v4/word.json/${word}/definitions?limit=2&includeRelated=false&useCanonical=false&includeTags=false&api_key=6pg3n1vy0d2lpw6rclajcjjybo0advrmvqbd9carj7ikr7a5v`
        ;

        fetch(url)
            .then(response => response.json())
            .then((data)=>{
               let definition = document.getElementById("definition");
               definition.innerHTML = data[1].text;
            });
    }
});