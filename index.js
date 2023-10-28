const emojis = ["❌","❌","✅","✅","⭕","⭕","🛑","🛑","🍭","🍭","🍗","🍗","🎂","🎂","🍟","🍟"];

let shuffleArray = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
const openBox = document.querySelectorAll(".openBox");
const matchBox = document.querySelectorAll(".matchBox");
console.log(openBox);
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.classList.add("item");
    box.innerHTML = shuffleArray[i];

    box.onclick = function () {
        let openBox = document.querySelectorAll(".openBox");
        let matchBox = document.querySelectorAll(".matchBox");
      box.classList.add("openBox")
      setTimeout(function() {
        if(openBox.length > 1) {
               if(openBox[0].innerHTML === openBox[1].innerHTML) {
                openBox[0].classList.add("matchBox");
                openBox[1].classList.add("matchBox");

                openBox[1].classList.remove("openBox");
                openBox[0].classList.remove("openBox");

                if(matchBox.length == emojis.length) {
                    alert("win");
                }
               } else {
                openBox[1].classList.remove("openBox");
                openBox[0].classList.remove("openBox");
          }
        }
      },500)
    }

    // function openCloseBox () {
        
    // };
    
    // box.addEventListener("click", () => {
    //   openCloseBox();
    // });

    

    document.querySelector(".game").append(box);
};

const restartBtn = document.querySelector(".reset");

function restartGame (btn) {
    btn.addEventListener("click", () => {
        window.location.reload();
    });
};

restartGame(restartBtn);



