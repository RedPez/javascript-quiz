//Initialise start of quiz:

let startButton = document.getElementById("start");

function startQuiz() {
  // Function to start the timer
  function startTimer() {
    let seconds = 60;

    document.getElementById("time").innerText = seconds;

    const timerInterval = setInterval(function () {
      seconds--;

      document.getElementById("time").innerText = seconds;

      // Check if the timer has reached 0
      if (seconds === 0) {
        clearInterval(timerInterval);
        //action - take to high score page to input details
      }
    }, 1000);
  }
  //show first question

  //start timer when quiz begins
  startTimer();
}

startButton.addEventListener("click", startQuiz);
