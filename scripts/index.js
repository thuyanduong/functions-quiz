let shuffledQuestions = shuffle(questions)
let score = 0
let stats = {}
let total = 0
let currentIndex = 0

let options = {
  "indent_size": "4",
  "indent_char": " ",
  "max_preserve_newlines": "-1",
  "preserve_newlines": false,
  "keep_array_indentation": false,
  "break_chained_methods": false,
  "indent_scripts": "normal",
  "brace_style": "collapse",
  "space_before_conditional": true,
  "unescape_strings": false,
  "jslint_happy": false,
  "end_with_newline": false,
  "wrap_line_length": "0",
  "indent_inner_html": false,
  "comma_first": false,
  "e4x": false,
  "indent_empty_lines": false
}

function prettify(text){
  return js_beautify(text, options).replace(/;/g, "");
}

document.addEventListener('DOMContentLoaded', function(){
  showQuestion(shuffledQuestions[currentIndex])
})

function showQuestion(questionObj){
  renderQuestionHeader(questionObj)
  renderFunction(questionObj)
  beforeText(questionObj)
  renderButtons(questionObj)
}

function beforeText(questionObj){
  let beforeText = document.querySelector("#before-text")
  if(questionObj.beforeText){
    beforeText.innerText = questionObj.beforeText
    let width = questionObj.beforeText.length * 15
    beforeText.style.width = `${width}px`
  }else{
    beforeText.innerText = ''
    beforeText.style.width = "0px"
  }
}

function renderFunction(questionObj){
  let functionText = document.querySelector("#function-text")
  functionText.innerText = questionObj.func
}

function renderQuestionHeader(questionObj){
  let questionText = document.querySelector("#question-text")
  questionText.innerText = `${currentIndex+1}. ${questionObj.question}`
}

function renderButtons(questionObj){
  let buttonContainer = document.querySelector('#button-container')
  buttonContainer.innerHTML = ""

  let answerButton = document.createElement("button")
  answerButton.id = "answer-button"
  answerButton.disabled = false
  answerButton.innerText = "Answer"

  let nextButton = document.createElement("button")
  nextButton.id = "next-button"
  nextButton.disabled = true
  nextButton.innerText = "Next Question"
  buttonContainer.append(answerButton, nextButton)

  answerButton.addEventListener('click', ()=>answerQuestion(questionObj))
  nextButton.addEventListener('click', askNextQuesion)
}

function answerQuestion(questionObj){
  document.getElementById("answer-button").disabled = true
  document.getElementById("next-button").disabled = false
  evaluateAnswer(questionObj)
}

function evaluateAnswer(questionObj){
  let theirAnswer = document.querySelector("textarea").value
  let theirPrettyAnswer = prettify(theirAnswer)
  let correct = false
  questionObj.answers.forEach((answer, index) => {
    let prettyAnswer = prettify(answer)
    console.log(prettyAnswer)
    if(prettyAnswer === theirPrettyAnswer){
      correct = true
      theyGotItRight(questionObj, theirPrettyAnswer, prettyAnswer, index)
    }
  })
  if(!correct){
    console.warn(theirPrettyAnswer)
    theyGotItWrong(questionObj, theirPrettyAnswer)
  }
}

function theyGotItRight(questionObj, theirPrettyAnswer, prettyAnswer, index){
  console.log("Correct")
  score = score + 1
  total = total + 1
  document.querySelector("#score").innerText = `${score}/${total}`
  let explanation = document.querySelector("#answer-explanation")
  explanation.classList.add("right")
  explanation.innerHTML = `
    <h5>You got it right</h5>
    <p>You wrote:</p>
    <textarea id="their-answer" class="explanation"></textarea>
  `
  explanation.querySelector("#their-answer").value = theirPrettyAnswer
}

function theyGotItWrong(questionObj, theirPrettyAnswer){
  console.log("incorrect")
  total = total + 1
  document.querySelector("#score").innerText = `${score}/${total}`
  let explanation = document.querySelector("#answer-explanation")
  explanation.classList.add("wrong")
  explanation.innerHTML = `
    <h5>You got it wrong</h5>
    <p>You wrote:</p>
    <textarea id="their-answer" class="explanation"></textarea>
    <p>The correct answer is:</p>
    <textarea id="true-answer" class="explanation"></textarea>
  `
  explanation.querySelector("#their-answer").value = theirPrettyAnswer
  explanation.querySelector("#true-answer").value = prettify(questionObj.answers[0])
}

function askNextQuesion(){
  currentIndex += 1
  if(currentIndex < shuffledQuestions.length){
    showQuestion(shuffledQuestions[currentIndex])
    document.querySelector("textarea").value = ""
    let explanation = document.querySelector("#answer-explanation")
    explanation.innerHTML = ""
    explanation.classList.remove("right")
    explanation.classList.remove("wrong")
  }else{
    alert("All done. You can refresh the page to get the same questions again.")
    document.getElementById("next-button").disabled = false
  }
}

$(document).delegate('textarea', 'keydown', function(e) {
  var keyCode = e.keyCode || e.which;

  if (keyCode == 9) {
    e.preventDefault();
    var start = $(this).get(0).selectionStart;
    var end = $(this).get(0).selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    $(this).val($(this).val().substring(0, start)
                + "  "
                + $(this).val().substring(end));

    // put caret at right position again
    $(this).get(0).selectionStart =
    $(this).get(0).selectionEnd = start + 2;
  }
});
