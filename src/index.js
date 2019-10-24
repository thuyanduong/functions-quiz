document.addEventListener('DOMContentLoaded', function(){
  showQuestion(shuffledQuestions[currentIndex])
})

function showQuestion(questionObj){
  renderQuestionHeader(questionObj)
  renderFunction(questionObj)
  renderBeforeText(questionObj)
  renderTextArea(questionObj)
  renderButtons(questionObj)
}

function renderTextArea(questionObj){
  document.querySelector("#answer-input").value = questionObj.placeholder
}

function renderBeforeText(questionObj){
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
  document.querySelector("#answer-explanation").classList.remove("hide")
  total = total + 1
  stats[questionObj.answerType].total = stats[questionObj.answerType].total + 1
  let theirPrettyAnswer = prettify(document.querySelector("#answer-input").value)
  let correct = false
  questionObj.answers.forEach((answer, index) => {
    let prettyAnswer = prettify(answer)
    if(prettyAnswer === theirPrettyAnswer){
      correct = true
      theyGotItRight(questionObj, theirPrettyAnswer, prettyAnswer, index)
    }
  })
  if(!correct){
    theyGotItWrong(questionObj, theirPrettyAnswer)
  }
  document.querySelector("#score").innerText = `${score}/${total}`
}

function theyGotItRight(questionObj, theirPrettyAnswer, prettyAnswer, index){
  score = score + 1
  stats[questionObj.answerType].score = stats[questionObj.answerType].score + 1
  document.querySelector("#results").innerText = "You got it right!"
  if(index === 0){
    let box1 = document.querySelector("#box1")
    box1.querySelector("p").innerText = "You wrote:"
    box1.querySelector("textarea").value = theirPrettyAnswer
    box1.querySelector("textarea").classList.add("right")
    box1.classList.remove("hide")

    if(questionObj.note){
      let box2 = document.querySelector("#box2")
      box2.querySelector("p").innerText = "Note:"
      box2.querySelector("textarea").value = questionObj.note
      box2.querySelector("textarea").classList.add("note")
      box2.classList.remove("hide")
    }
  }else{
    let box1 = document.querySelector("#box1")
    box1.querySelector("p").innerText = "You wrote:"
    box1.querySelector("textarea").value = theirPrettyAnswer
    box1.querySelector("textarea").classList.add("good-enough")
    box1.classList.remove("hide")

    let box2 = document.querySelector("#box2")
    box2.querySelector("p").innerText = "But an even better answer is:"
    box2.querySelector("textarea").value = prettify(questionObj.answers[0])
    box2.querySelector("textarea").classList.add("right")
    box2.classList.remove("hide")

    if(questionObj.note){
      let box3 = document.querySelector("#box3")
      box3.querySelector("p").innerText = "Note:"
      box3.querySelector("textarea").value = questionObj.note
      box3.querySelector("textarea").classList.add("note")
      box3.classList.remove("hide")
    }
  }
}

function theyGotItWrong(questionObj, theirPrettyAnswer){
  document.querySelector("#results").innerText = "You got it wrong."

  let box1 = document.querySelector("#box1")
  box1.querySelector("p").innerText = "You wrote:"
  box1.querySelector("textarea").value = theirPrettyAnswer
  box1.querySelector("textarea").classList.add("wrong")
  box1.classList.remove("hide")

  let box2 = document.querySelector("#box2")
  box2.querySelector("p").innerText = "The correct answer is:"
  box2.querySelector("textarea").value = prettify(questionObj.answers[0])
  box2.querySelector("textarea").classList.add("right")
  box2.classList.remove("hide")

  if(questionObj.note){
    let box3 = document.querySelector("#box3")
    box3.querySelector("p").innerText = "Note:"
    box3.querySelector("textarea").value = questionObj.note
    box3.querySelector("textarea").classList.add("note")
    box3.classList.remove("hide")
  }
}

function askNextQuesion(){
  currentIndex += 1
  if(currentIndex < shuffledQuestions.length){
    document.querySelector("#answer-explanation").classList.add("hide")
    document.querySelector("#box1").classList.add("hide")
    document.querySelector("#box1").querySelector("textarea").classList.remove("right")
    document.querySelector("#box1").querySelector("textarea").classList.remove("wrong")
    document.querySelector("#box1").querySelector("textarea").classList.remove("good-enough")
    document.querySelector("#box1").querySelector("textarea").classList.remove("note")
    document.querySelector("#box2").classList.add("hide")
    document.querySelector("#box2").querySelector("textarea").classList.remove("right")
    document.querySelector("#box2").querySelector("textarea").classList.remove("wrong")
    document.querySelector("#box2").querySelector("textarea").classList.remove("good-enough")
    document.querySelector("#box2").querySelector("textarea").classList.remove("note")
    document.querySelector("#box3").classList.add("hide")
    document.querySelector("#box3").querySelector("textarea").classList.remove("right")
    document.querySelector("#box3").querySelector("textarea").classList.remove("wrong")
    document.querySelector("#box3").querySelector("textarea").classList.remove("good-enough")
    document.querySelector("#box3").querySelector("textarea").classList.remove("note")
    showQuestion(shuffledQuestions[currentIndex])
  }else{
    alert(`All done. You can refresh the page to get the same questions in a random order again.

      ${FUNC_DECLARATION} Score: ${stats[FUNC_DECLARATION].score}/${stats[FUNC_DECLARATION].total}
      ${FUNC_EXPRESSION} Score: ${stats[FUNC_EXPRESSION].score}/${stats[FUNC_EXPRESSION].total}
      ${ARROW_FUNC} Score: ${stats[ARROW_FUNC].score}/${stats[ARROW_FUNC].total}
      `)
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
