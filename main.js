// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// console.log(myHearts)

// let color = document.querySelector("#bro")
// color.addEventListener("click", ()=> color.style.color="#c9302c")
// myHearts.addEventListener("click", () => myHearts.style.backgroundColor= "#c9302c")

let myHearts = document.getElementsByClassName("like-glyph")
function likeCallback(e) {
  const heart = e.target
  const isLiked = heart.innerText === FULL_HEART
  // console.log(isLiked)
  mimicServerCall()
 
  .then((data) =>  {
  // heart.className = "activated-heart"
  // heart.innerText = FULL_HEART

  if (isLiked) {
    heart.className = ""
    heart.innerText = EMPTY_HEART
  } else {
  heart.className = "activated-heart"
  heart.innerText = FULL_HEART
  }

  })

  .catch((error) => {
    console.error('Error:', error)
   document.getElementById("modal").className = "activated-heart"
  }); 
}



for (const glyph of myHearts) {
  glyph.addEventListener("click", likeCallback);
}

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
