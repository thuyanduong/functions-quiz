
let FUNC_EXPRESSION = 'functionExpression'
let FUNC_DECLARATION = 'functionDeclaration'
let ARROW_FUNC = 'arrowFunction'

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
    placeholder: ``,
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
    placeholder: ``,
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
    placeholder: ``,
    answers: [
      `function greet(name){
            alert("Hello, " + name)
        }`
    ],
    answerType: ARROW_FUNC
  }
]

/*
{
  id: ,
  question: `

  `,
  func: `

  `,
  answerType:

  ,
  answers: [

  ]
}
*/
