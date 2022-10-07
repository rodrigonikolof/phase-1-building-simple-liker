// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMessage = document.querySelector('#modal');
errorMessage.classList.add('hidden');

let hearts = document.querySelectorAll('.like-glyph');


function contactServer(e){
  const singleHeart = e.target;
  mimicServerCall()
  .then ( () => singleHeart.classList.add('activated-heart' ))
}



for (let heart of hearts){
  heart.addEventListener('click', contactServer)}













//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
