const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Ile jest 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '2', correct: false },
      { text: '1', correct: false},
      { text: '3', correct: false}
    ]
  },
  {
    question: 'Ile jest 10 + 3 ?',
    answers: [
      { text: '11', correct: false },
      { text: '12', correct: false },
      { text: '13', correct: true },
      { text: '14', correct: false }
    ]
  },
  {
    question: 'Ile jest 2 - 2 ?',
    answers: [
      { text: '2', correct: false },
      { text: '0', correct: true },
      { text: '1', correct: false },
      { text: '3', correct: false }
    ]
  },
  { 
    question: 'Ile jest 7 + 5 ?',
    answers: [
      { text: '10', correct: false },
      { text: '7', correct: false },
      { text: '12', correct: true },
      { text: '14', correct: false }
    ]
  },
  {
    question: 'Ile jest 6 + 2 ?',
    answers: [
      { text: '2', correct: false },
      { text: '6', correct: false },
      { text: '7', correct: false },
      { text: '8', correct: true }
     ]
   },
   {
     question: 'Ile jest 8 + 2 ?',
    answers: [
      { text: '10', correct: true },
      { text: '12', correct: false },
      { text: '9', correct: false },
      { text: '8', correct: false}
    ]
  },
  {
    question: 'Ile jest 5 - 4 ?',
    answers: [
      { text: '2', correct: false },
      { text: '0', correct: false },
      { text: '1', correct: true },
      { text: '3', correct: false }
      ]
    },
  {
     question: 'Ile jest 7 - 3 ?',
    answers: [
      { text: '4', correct: true },
      { text: '3', correct: false },
      { text: '5', correct: false },
      { text: '1', correct: false }
    ]
  },
  {
    question: 'Ile jest 3 + 3 ?',
    answers: [
      { text: '2', correct: false },
      { text: '0', correct: false },
      { text: '1', correct: false },
      { text: '6', correct: true }
  ]
},
{
   question: 'Ile jest 7 + 4 ?',
    answers: [
      { text: '11', correct: true },
      { text: '8', correct: false },
      { text: '9', correct: false },
      { text: '7', correct: false }
    ]
  },
  {
    question: 'Ile jest Ida + i + Hela ?',
    answers: [
      { text: 'Ida', correct: false },
      { text: 'Hela', correct: false },
      { text: 'Zaki', correct: false },
      { text: 'Ida i Hela', correct: true }
      ]
    }
    ]
   
