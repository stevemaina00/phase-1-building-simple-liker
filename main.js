// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let myModal = (document.querySelector("#modal").className = "hidden");
let likeButtons = document.querySelectorAll(".like-glyph");
likeButtons.forEach(function (likeButton) {
	likeButton.addEventListener("click", function (e) {
		mimicServerCall()
			.then(function () {
				if (likeButton.innerText === EMPTY_HEART) {
					likeButton.innerText = FULL_HEART;
					likeButton.className = "activated-heart";
				} else {
					likeButton.innerText = EMPTY_HEART;
					likeButton.className = "";
				}
			})
			.catch(function (error) {
				myModal.className = "";
				setTimeout(function () {
					myModal.className = "hidden";
				}, 3000);
			});
	});
});





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

