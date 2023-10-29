  const emojis = ["❌", "❌", "✅", "✅", "⭕", "⭕", "🛑", "🛑", "🍭", "🍭", "🍗", "🍗", "🎂", "🎂", "🍟", "🍟"];
  let shuffleArray = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
  const timerElement = document.querySelector(".timer");
  
  
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
          });
          const matchBoxes = document.querySelectorAll(".matchBox");
          if (matchBoxes.length === emojis.length) {
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
  
  for (let i = 0; i < emojis.length; i++) {
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
  
  let clickCounter = 50;
  
  function updateClickCounter() {
      clickCounter--;
      click.textContent = clickCounter;
      if(clickCounter === 0) {
          click.textContent = 0;
          startTimer();
          setTimeout(() => {
              alert("Game over")
            }, 500);
           };
          };
  
    //timer
    let timerInterval;
    let timerRunning = false;
    let minutes = 2;
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
        setTimeout(() => {
          alert("Game over")
        }, 500);
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



