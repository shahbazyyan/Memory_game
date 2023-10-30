
const emojisMedium = ["❌", "❌", "✅", "✅", "⭕", "⭕", "🛑", "🛑", "🍭", "🍭", "🍗", "🍗", "🎂", "🎂", "🍟", "🍟", "🎱", "🎱", "⏰", "⏰", "🥇", "🥇", "🥑", "🥑", "🐤", "🐤", "🏀", "🏀", "🔔", "🔔"];
let shuffleArray = emojisMedium.sort(() => (Math.random() > 0.5 ? 2 : -1));
const timerElement = document.querySelector(".timer");
const popup = document.querySelector(".popup");
const ok_btn = document.querySelector(".ok_btn");
const popup_over = document.querySelector(".popup_over");

function openCloseBox(box) {
  startTimer();
  if (box.classList.contains("openBox")) return; 
  const openBoxes = document.querySelectorAll(".openBox");
  if (openBoxes.length < 2) {
    box.classList.add("openBox");
    updateClickCounter();
    const openBoxes = document.querySelectorAll(".openBox");
    if (openBoxes.length === 2) {
      if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
        openBoxes.forEach((openBox) => {
          openBox.classList.add("matchBox");
          openBox.classList.remove("openBox");
          openBox.classList.add("hide");
          openBox.style.pointerEvents = "none";
        });
        const matchBoxes = document.querySelectorAll(".matchBox");
        if (matchBoxes.length === emojisMedium.length) {
          openPopup(popup);
          minutes = 0;
          seconds = 0;
        }
      } else {
        setTimeout(() => {
          openBoxes.forEach((openBox) => {
            openBox.classList.remove("openBox");
          });
        }, 500);
      }
    }
  }
}


for (let i = 0; i < emojisMedium.length; i++) {
  let box = document.createElement("div");
  box.classList.add("item");
  box.innerHTML = shuffleArray[i];
  box.addEventListener("click", () => openCloseBox(box));
  document.querySelector(".game").append(box);
}

const restartBtn = document.querySelector(".reset");

function restartGame(btn) {
  btn.addEventListener("click", () => {
    window.location.reload();
  });
};
restartGame(restartBtn);

// controls
//clicker
const click = document.querySelector(".click");

let clickCounter = 120;

function updateClickCounter() {
    clickCounter--;
    click.textContent = clickCounter;
    if(clickCounter === 0) {
        openPopup(popup_over);
        stopTimer();
         };
        };

  //timer
  let timerInterval;
  let timerRunning = false;
  let minutes = 4;
  let seconds = 0;


  function startTimer() {
    if (!timerRunning) {
      timerRunning = true;
      timerInterval = setInterval(updateTimer, 1000);
    }
  }

  function stopTimer() {
    timerRunning = false; 
    minutes = 0;
    seconds = 0;
    if (clickCounter === 0) {
      openPopup(popup_over);
    }
  }
  
  
  

  function updateTimer() {
    if (minutes === 0 && seconds === 0) {
      clearInterval(timerInterval);
      
      // setTimeout(() => {
      //   openPopup(popup_over);
      // }, 500);
    } else {
      if (seconds === 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      updateTimerDisplay();
    }
  }

  function updateTimerDisplay() {
    const displayMinutes = String(minutes).padStart(2, "0");
    const displaySeconds = String(seconds).padStart(2, "0");
    timerElement.innerText = `${displayMinutes}:${displaySeconds}`;
  }

//popup


function openPopup(popup) {
    popup.classList.add("open-popup");
};







  