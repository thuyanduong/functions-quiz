
let FUNC_EXPRESSION = 'Function Expressions'
let FUNC_DECLARATION = 'Function Declarations'
let ARROW_FUNC = 'Arrow Functions'

let questions = [
  {
    id: 1,
    question: `Rewrite the following function declaration into a function expression.`,
    func: `
      function multipleByTwo(num){
        return num * 2
      }
    `,
    beforeText: `const multipleByTwo =`,
    answers: [`
      function (num){
        return num * 2
      }
    `],
    answerType: FUNC_EXPRESSION
  }
  ,
  {
    id: 2,
    question: `Rewrite the following function declaration into an arrow function.`,
    func: `
      function addSeven(x){
        return x + 7
      }
    `,
    beforeText: `const addSeven =`,
    answers: [
      'x => x + 7',
      '(x) => x + 7',
      'x => {return x + 7}',
      '(x) => {return x + 7}'
    ],
    answerType: ARROW_FUNC
  },
  {
    id: 3,
    question: `Rewrite the following function expression into a function declaration.`,
    func: `
      const greet = function(name){
        alert("Hello, " + name)
      }
    `,
    answers: [
      `function greet(name){
            alert("Hello, " + name)
        }`
    ],
    answerType: FUNC_DECLARATION
  }
]
