// Saving HTML elements as variables
// Buttons
var submitBtnEl = document.getElementById("submit-btn");
var resetBtnEl = document.getElementById("reset-btn");

// Question Inputs
var question1In = document.getElementById("question1-in");
var question2In = document.getElementById("question2-in");
var question3In = document.getElementById("question3-in");
var question4In = document.getElementById("question4-in");
var question5In = document.getElementById("question5-in");

// Spans
var scoreOut = document.getElementById("score");
var percentOut = document.getElementById("percent");
var messageOut = document.getElementById("message");

// Feedback - Correct or Incorrect
var respOut1 = document.getElementById("response-1");
var respOut2 = document.getElementById("response-2");
var respOut3 = document.getElementById("response-3");
var respOut4 = document.getElementById("response-4");
var respOut5 = document.getElementById("response-5");

// ------------------------------------------------------

// Button event listener
submitBtnEl.addEventListener("click", markQuiz);

// EVENT FUNCTION FOR MARKING QUIZ
function markQuiz() {
  // Count correct answers
  let numPoints = 0;

  // Check if all questions have been answered
  let questionsAnswered = true;

  // Question 1 - There are ________ bones in the average human body.
  let answer1 = question1In.value;

  if (answer1 == "") {
    questionsAnswered = false;
  } else if (answer1 == "206") {
    question1In.style.borderColor = "green";
    respOut1.innerHTML = "Correct";
    respOut1.style.color = "Green";
    numPoints++;
  } else if (answer1 != "206") {
    question1In.style.borderColor = "red";
    respOut1.innerHTML = "Incorrect";
    respOut1.style.color = "Red";
  }

  // Question 2 - What are one of the five senses?
  let answer2 = question2In.value;

  if (answer2 == "") {
    questionsAnswered = false;
  } else if (
    answer2.toLowerCase() == "sight" ||
    answer2.toLowerCase() == "touch" ||
    answer2.toLowerCase() == "smell" ||
    answer2.toLowerCase() == "hearing" ||
    answer2.toLowerCase() == "taste"
  ) {
    question2In.style.borderColor = "green";
    respOut2.innerHTML = "Correct";
    respOut2.style.color = "Green";
    numPoints++;
  } else {
    question2In.style.borderColor = "red";
    respOut2.innerHTML = "Incorrect";
    respOut2.style.color = "Red";
  }

  // Question 3 - What are one of the primary colors?
  let answer3 = question3In.value;

  if (answer3 == "") {
    questionsAnswered = false;
  } else if (
    answer3.toLowerCase() == "red" ||
    answer3.toLowerCase() == "blue" ||
    answer3.toLowerCase() == "yellow"
  ) {
    question3In.style.borderColor = "green";
    respOut3.innerHTML = "Correct";
    respOut3.style.color = "Green";
    numPoints++;
  } else {
    question3In.style.borderColor = "red";
    respOut3.innerHTML = "Incorrect";
    respOut3.style.color = "Red";
  }

  // Question 4 - Which planet in the solar system has the most moons?
  let answer4 = question4In.value;

  if (answer4 == "") {
    questionsAnswered = false;
  } else if (answer4.toLowerCase() == "jupiter") {
    question4In.style.borderColor = "green";
    respOut4.innerHTML = "Correct";
    respOut4.style.color = "Green";
    numPoints++;
  } else {
    question4In.style.borderColor = "red";
    respOut4.innerHTML = "Incorrect";
    respOut4.style.color = "Red";
  }

  // Question 5 - What country is represented on this flag?
  let answer5 = question5In.value;

  if (answer5 == "") {
    questionsAnswered = false;
  } else if (answer5.toLowerCase() == "canada") {
    question5In.style.borderColor = "green";
    respOut5.innerHTML = "Correct";
    respOut5.style.color = "Green";
    numPoints++;
  } else {
    question5In.style.borderColor = "red";
    respOut5.innerHTML = "Incorrect";
    respOut5.style.color = "Red";
  }

  // If there are missing answers...
  if (questionsAnswered == false) {
    messageOut.innerHTML = "Please answer all the questions.";
  }

  // If all questions are answered, calculate the number of points and percent.
  if (questionsAnswered == true) {
    scoreOut.innerHTML = numPoints;

    if (numPoints == 5) {
      messageOut.innerHTML = "Perfect score!";
      percentOut.innerHTML = (numPoints / 5) * 100;
    } else if (numPoints == 4) {
      messageOut.innerHTML = "Great job!";
      percentOut.innerHTML = (numPoints / 5) * 100;
    } else if (numPoints == 3) {
      messageOut.innerHTML = "Passable.";
      percentOut.innerHTML = (numPoints / 5) * 100;
    } else if (numPoints == 2) {
      messageOut.innerHTML = "Good try...";
      percentOut.innerHTML = (numPoints / 5) * 100;
    } else if (numPoints == 1) {
      messageOut.innerHTML = "Better than nothing...";
      percentOut.innerHTML = (numPoints / 5) * 100;
    } else {
      messageOut.innerHTML = "Sorry, all answers are incorrect.";
      percentOut.innerHTML = (numPoints / 5) * 100;
    }
  }
}

// ------------------------------------------------------

// Button event listener
resetBtnEl.addEventListener("click", resetPage);

// EVENT FUNCTION FOR RESETTING PAGE
function resetPage() {
  // Question Inputs
  var question1In = document.getElementById("question1-in");
  var question2In = document.getElementById("question2-in");
  var question3In = document.getElementById("question3-in");
  var question4In = document.getElementById("question4-in");
  var question5In = document.getElementById("question5-in");

  // Spans
  var scoreOut = document.getElementById("score");
  var percentOut = document.getElementById("percent");
  var messageOut = document.getElementById("message");

  // Feedback - Correct or Incorrect
  var respOut1 = document.getElementById("response-1");
  var respOut2 = document.getElementById("response-2");
  var respOut3 = document.getElementById("response-3");
  var respOut4 = document.getElementById("response-4");
  var respOut5 = document.getElementById("response-5");

  question1In.value = "";
  question1In.style.borderColor = "gray";

  question2In.value = "";
  question2In.style.borderColor = "gray";

  question3In.value = "";
  question3In.style.borderColor = "gray";

  question4In.value = "";
  question4In.style.borderColor = "gray";

  question5In.value = "";
  question5In.style.borderColor = "gray";

  scoreOut.innerHTML = "---";
  percentOut.innerHTML = "---";
  messageOut.innerHTML = "----------";

  respOut1.innerHTML = "";
  respOut2.innerHTML = "";
  respOut3.innerHTML = "";
  respOut4.innerHTML = "";
  respOut5.innerHTML = "";
}
