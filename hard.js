
const emojisHard = ["❌", "❌", "✅", "✅", "⭕", "⭕", "🛑", "🛑", "🍭", "🍭", "🍗", "🍗", "🎂", "🎂", "🍟", "🍟", "🎱", "🎱", "⏰", "⏰", "🥇", "🥇", "🥑", "🥑", "🐤", "🐤", "🏀", "🏀", "🔔", "🔔", "🗑️", "🗑️", "🎮", "🎮", "🇦🇲", "🇦🇲", "🇦🇷", "🇦🇷", "🇫🇷", "🇫🇷"];
let shuffleArray = emojisHard.sort(() => (Math.random() > 0.5 ? 2 : -1));
const openBox = document.querySelectorAll(".openBox");
const timerElement = document.querySelector(".timer");


function openCloseBox(box) {
  if (box.classList.contains("openBox")) return; 
  const openBoxes = document.querySelectorAll(".openBox");
  const matchBox = document.querySelectorAll(".matchBox");
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
          
        //   matchBox.forEach((match) => {
        //       match.classList.add(".hide")
        //   });
        });


        const matchBoxes = document.querySelectorAll(".matchBox");
        if (matchBoxes.length === emojisHard.length) {
          openPopup();
          stopTimer();
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

for (let i = 0; i < emojisHard.length; i++) {
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

const click = document.querySelector(".click");

let clickCounter = 220;

function updateClickCounter() {
    clickCounter--;
    click.textContent = clickCounter;
    if(clickCounter === 0) {
        click.textContent = 0;
        stopTimer();
        setTimeout(() => {
            alert("Game over")
          }, 1000);
        };
     }; 

  //timer
        
  let timerInterval;
  let timerRunning = false;
  let minutes = 7;
  let seconds = 0;


  function startTimer() {
    if (!timerRunning) {
      timerRunning = true;
      timerInterval = setInterval(updateTimer, 1000);
    }
  }

  function stopTimer () {
    timerRunning === false;
    minutes = 0;
    seconds = 0;
  }

  function updateTimer() {
    if (minutes === 0 && seconds === 0) {
      clearInterval(timerInterval);
      timerRunning = false;
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

  window.addEventListener("click", startTimer);

//popup

const popup = document.querySelector(".popup");
const ok_btn = document.querySelector(".ok_btn");

function openPopup() {
    popup.classList.add("open-popup");
};

function closePopup() {
  ok_btn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("open-popup");
  });
}

closePopup();

