
let FUNC_EXPRESSION = 'Function Expressions'
let FUNC_DECLARATION = 'Function Declarations'
let ARROW_FUNC = 'Arrow Functions'

let questions = [
  {
    id: 1,
    question: `Rewrite the following function declaration as a function expression.`,
    func: `
      function multipleByTwo(num){
        return num * 2
      }
    `,
    beforeText: `let multipleByTwo =`,
    placeholder: ``,
    answers: [`
      function (num){
        return num * 2
      }
    `],
    answerType: FUNC_EXPRESSION,
    note: `A function expression is basically the same as a function declaration except you don't need to specify the function name.`
  },
  {
    id: 2,
    question: `Rewrite the following function declaration as an arrow function.`,
    func: `
      function addSeven(x){
        return x + 7
      }
    `,
    beforeText: `let addSeven =`,
    placeholder: ``,
    answers: [
      'x => x + 7',
      '(x) => x + 7',
      'x => {return x + 7}',
      '(x) => {return x + 7}'
    ],
    answerType: ARROW_FUNC,
    note:
`x => x + 7
(x) => x + 7
x => {return x + 7}
(x) => {return x + 7}

All of the above are valid ways to write arrow functions. If this is a hard one, first try converting a function declaration to a function expression, then convert that to an arrow function.`
  },
  {
    id: 3,
    question: `Rewrite the following function expression as a function declaration.`,
    func: `
      let greet = function(name){
        alert("Hello, " + name)
      }
    `,
    placeholder: ``,
    answers: [
      `function greet(name){
            alert("Hello, " + name)
        }`
    ],
    answerType: FUNC_DECLARATION
  },
  {
    id: 4,
    question: `Rewrite the following arrow function as a function declaration.`,
    func: `
      let changeSign = x => -x
    `,
    placeholder: ``,
    answers: [
      `function changeSign(x){
            return -x
        }`
    ],
    answerType: FUNC_DECLARATION,
    note: `In both cases: The function's name is changeSign. The argument is a variable called x. The function returns the negative value of x. If this was difficult, try first translating the arrow function to a function expression, then a function declaration.`
  },
  {
    id: 5,
    question: `Rewrite the following arrow function as a function declaration.`,
    func: `
      let add = (y, z) => {return y + z}
    `,
    placeholder: ``,
    answers: [
      `function add(y, z){
            return y + z
        }`,
      `function add(y, z){
            return z + y
        }`
    ],
    answerType: FUNC_DECLARATION,
    note: `In both cases: The function's name is add. The arguments list is variables y and z. The function returns the sum of its variable arguments. If this was difficult, try first translating the arrow function to a function expression, then a function declaration.`
  },
  {
    id: 6,
    question: `Rewrite the following function declaration as a function expression.`,
    func: `
      function sayHi(){
        console.log("Hi")
      }
    `,
    beforeText: `let sayHi =`,
    placeholder: ``,
    answers: [`
      function (){
        console.log("Hi")
      }
    `],
    answerType: FUNC_EXPRESSION,
    note: `A function expression is basically the same as a function declaration except you don't need to specify the function name.`
  },
  {
    id: 7,
    question: `Rewrite the following function expression as an arrow function.`,
    func: `
      let roundDown = function(a){
        return Math.floor(a)
      }
    `,
    beforeText: `let roundDown =`,
    placeholder: ``,
    answers: [
      'a => Math.floor(a)',
      '(a) => Math.floor(a)',
      'a => {return Math.floor(a)}',
      '(a) => {return Math.floor(a)}'
    ],
    answerType: ARROW_FUNC,
    note:
`a => Math.floor(a)
(a) => Math.floor(a)
a => {return Math.floor(a)
(a) => {return Math.floor(a)}

All of the above are valid ways to write arrow functions. The main thing to remember is arrow functions don't use the function key word but instead have a => in between the argument list and the function body.`
  },
  {
    id: 8,
    question: `Rewrite the following function declaration as an arrow function.`,
    func: `
      function nameTagMaker(firstName, lastName){
        return firstName + " " + lastName
      }
    `,
    beforeText: `let nameTagMaker = `,
    placeholder: ``,
    answers: [
      '(firstName, lastName) => firstName + " " + lastName',
      '(firstName, lastName) => (firstName + " " + lastName)',
      '(firstName, lastName) => {return firstName + " " + lastName}',
      '(firstName, lastName) => `${firstName} ${lastName}`',
      '(firstName, lastName) => (`${firstName} ${lastName}`)',
      '(firstName, lastName) => {return `${firstName} ${lastName}`}',
      "(firstName, lastName) => firstName + ' ' + lastName",
      "(firstName, lastName) => (firstName + ' ' + lastName)",
      "(firstName, lastName) => {return firstName + ' ' + lastName}"
    ],
    answerType: ARROW_FUNC,
    note: `The parentheses around the argument list are only optional if you have a single argument. If you have more than one argument then the parentheses are mandatory.`
    },
  {
    id: 9,
    question: `Rewrite the following function expression as an arrow function.`,
    func: `
      let helloWorld = function(){
        return "hello world"
      }
    `,
    beforeText: `let helloWorld = `,
    placeholder: ``,
    answers: [
      '() => "hello world"',
      '() => {return "hello world"}'
    ],
    answerType: ARROW_FUNC,
    note: `The parentheses around the argument list are only optional if you have a single argument. If you have zero arguments then the parentheses are mandatory.`
  },
  {
    id: 10,
    question: `Rewrite the following function declaration as a function expression.`,
    func: `
      function handleButtonClick(event){
        console.log(event.target.innerText)
      }
    `,
    beforeText: `let handleButtonClick =`,
    placeholder: ``,
    answers: [`
      function(event){
        console.log(event.target.innerText)
      }
    `],
    answerType: FUNC_EXPRESSION,
    note: `A function expression is basically the same as a function declaration except you don't need to specify the function name.`
  },
  {
    id: 11,
    question: `Rewrite the following function declaration as an arrow function.`,
    func: `
      function handleSubmitForm(event){
        console.log(event.target.value)
      }
    `,
    beforeText: `let handleSubmitForm =`,
    placeholder: ``,
    answers: [
      'event => console.log(event.target.value)',
      '(event) => console.log(event.target.value)',
      'event => {console.log(event.target.value)}',
      '(event) => {console.log(event.target.value)}'
    ],
    answerType: ARROW_FUNC,
    note:
`event => console.log(event.target.value)
event => {console.log(event.target.value)}

The two arrow functions above are actually identical in use. This is because they both return undefined. A console.log() prints to the console but also returns undefined. So the first function is implicitly returning undefined because that is what invoking console.log() evaluates to. The second function does not return anything, which means it returns undefined.`
  },
  {
    id: 12,
    question: `Rewrite the following function declaration as an arrow function`,
    func: `
      function squareAndPrint(z){
        let sq = z*z
        console.log(sq)
        return sq
      }
    `,
    beforeText: `let squareAndPrint =`,
    placeholder: ``,
    answers: [`
      z => {
        let sq = z*z
        console.log(sq)
        return sq
      }
    `,`
      (z) => {
        let sq = z*z
        console.log(sq)
        return sq
      }
    `],
    answerType: ARROW_FUNC,
    note: `Multi-line arrow functions must have the curly braces { } to denote the start and end of the function body. If you include the { }, then you must also explicitly state the return value.`
  }
]
