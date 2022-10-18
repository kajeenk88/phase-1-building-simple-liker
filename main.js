const EMPTY_HEART = '♡'
 const FULL_HEART = '♥'

 // Your JavaScript code goes here!
 let glyphStates = {
   "♡": "♥",
   "♥": "♡"
 };

 let colorStates = {
   "red" : "",
   "": "red"
 };

 let articleHearts = document.querySelectorAll(".like");

 function likeCallback(e) {
   let heart = e.target;
   mimicServerCall("bogusUrl")
    //OR: mimicServerCall("bogusUrl", {forceFailure: true})
     .then(function(serverMessage){
        heart.innerText = glyphStates[heart.innerText];
        heart.style.color = colorStates[heart.style.color];
     })
     .catch(function(error) {
       alert("Something went wrong!");
     });
     // Basic
       // alert("Something went wrong!");
       // or....
       document.getElementById("modal").className = "";
 }

 for (let glyph of articleHearts) {
   glyph.addEventListener("click", likeCallback);
 }


 //------------------------------------------------------------------------------