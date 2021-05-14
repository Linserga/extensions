let body = document.getElementById("body");
let randImg = Math.floor(Math.random()*4 +1);
body.style.backgroundImage = `url("images/${randImg}.jpg")`;
