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

  //function to choose random question
  function displayRandomQuestion() {
    let randomQuestion = Math.floor(Math.random() * questions.length);
    let currentQuestion = questions[randomIndex];

    //function to hide <h1>, <p> and <button> and display the first random question.

    /*display answer buttons 
    funtion => const answerButton = document...grab button
    //if statement to check if the correct button/answer was clicked
    if (button === currentQuestion.correctAnswer) {
      do ++ to score && move to the next question
    } else {
      -- 5 seconds of time && move to the next question
    } */

    //displayRandomQuestion();
  }
  //start timer when quiz begins
  startTimer();

  //show random question when quiz begins
  displayRandomQuestion();
}

startButton.addEventListener("click", startQuiz);
//add event listener for questions button:
