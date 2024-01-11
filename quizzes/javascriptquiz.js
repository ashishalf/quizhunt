const quizData = [
  {
    question: "What is JavaScript?",
    a: "JavaScript is a scripting language used to make the website interactive",
    b: "JavaScript is an assembly language used to make the website interactive",
    c: "JavaScript is a compiled language used to make the website interactive",
    d: "None of the mentioned",
    correct: "a",
  },
  {
    question: "Which of the following is correct about JavaScript?",
    a: "JavaScript is Assembly-language JavaScript",
    b: "JavaScript is an Object-Based language",
    c: "JavaScript is an Object-Oriented language",
    d: "JavaScript is a High-level language",
    correct: "b",
  },
  {
    question:
      "Arrays in JavaScript are defined by which of the following statements?",
    a: "It is an ordered list of objects",
    b: "It is an ordered list of string",
    c: "It is an ordered list of functions",
    d: "It is an ordered list of values",
    correct: "d",
  },
  {
    question: "Which of the following is not javascript data types?",
    a: "Null type",
    b: "Undefined type",
    c: "Number type",
    d: "All of the mentioned",
    correct: "d",
  },
  {
    question: "What is the basic difference between JavaScript and Java?",
    a: "Functions are considered as fields",
    b: "Functions are values, and there is no hard distinction between methods and fields",
    c: "Variables are specific",
    d: "There is no difference",
    correct: "b",
  },
  {
    question: "Why JavaScript Engine is needed?",
    a: "Both Compiling & Interpreting the JavaScript",
    b: "Parsing the javascript",
    c: "Interpreting the JavaScript",
    d: "Compiling the JavaScript",
    correct: "c",
  },
  {
    question: "Why event handlers is needed in JS?",
    a: "Allows JavaScript code to alter the behaviour of windows",
    b: "Adds innerHTML page to the code",
    c: "Change the server location",
    d: "Performs handling of exceptions and occurrences",
    correct: "a",
  },
  {
    question: "Which of the following is not a framework?",
    a: "JavaScript .NET",
    b: "JavaScript",
    c: "Cocoa JS",
    d: "jQuery",
    correct: "b",
  },
  {
    question:
      "Which of the following is the property that is triggered in response to JS errors?",
    a: "onclick",
    b: "onerror",
    c: "onmessage",
    d: "onexception",
    correct: "b",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },

  {
    question: "What does the acronym 'DOM' stand for in JavaScript?",
    a: "Data Object Model",
    b: "Document Object Model",
    c: "Dynamic Operating Mechanism",
    d: "Digital Output Management",
    correct: "b",
  },
  {
    question: "What does the acronym 'JSON' stand for in JavaScript?",
    a: "JavaScript Output Notation",
    b: "JavaScript Object Notation",
    c: "JavaScript Online Networking",
    d: "JavaScript Operating Network",
    correct: "b",
  },
  {
    question: "What is the function keyword used for in JavaScript?",
    a: "Defining a function",
    b: "Calling a function",
    c: "Creating an object",
    d: "Defining a variable",
    correct: "a",
  },
  {
    question: "What does the 'typeof' operator do?",
    a: "Returns the type of a variable",
    b: "Converts a string to a number",
    c: "Creates a new variable",
    d: "Defines the scope of a variable",
    correct: "a",
  },
  {
    question:
      "Which of the following is NOT a primitive data type in JavaScript?",
    a: "String",
    b: "Number",
    c: "Boolean",
    d: "Object",
    correct: "d",
  },
  {
    question: "What is the output of the following code: console.log('2' + 2);",
    a: "22",
    b: "4",
    c: "Error",
    d: "Undefined",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: console.log(+'3' + 4);",
    a: "34",
    b: "7",
    c: "NaN",
    d: "Undefined",
    correct: "b",
  },
  {
    question: "What does the '===' operator do in JavaScript?",
    a: "Compares two values for equality, including type",
    b: "Assigns a value to a variable",
    c: "Compares two values for equality, ignoring type",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is the 'this' keyword used for in JavaScript?",
    a: "Referring to the current function",
    b: "Referring to the global object",
    c: "Referring to the parent object",
    d: "Referring to the current object",
    correct: "d",
  },
  {
    question:
      "What is the output of the following code: console.log(5 > 4 > 3);",
    a: "true",
    b: "false",
    c: "Error",
    d: "Undefined",
    correct: "b",
  },
  {
    question:
      "What is the output of the following code: console.log(typeof null);",
    a: "object",
    b: "null",
    c: "undefined",
    d: "string",
    correct: "a",
  },
  {
    question: "What does the 'Array.prototype.slice()' method do?",
    a: "Returns a new array with a subset of the elements of the original array",
    b: "Sorts the elements of an array in ascending order",
    c: "Joins all elements of an array into a string",
    d: "Adds one or more elements to the beginning of an array",
    correct: "a",
  },
  {
    question: "What does the 'Array.prototype.filter()' method do?",
    a: "Returns a new array with the same elements as the original array",
    b: "Returns a new array with a subset of the elements of the original array",
    c: "Applies a function to each element of an array and returns a new array with the results",
    d: "Returns a new array with elements that pass a given test",
    correct: "d",
  },
  {
    question:
      "What is the output of the following code: console.log(1 + '2' + 3);",
    a: "6",
    b: "123",
    c: "Error",
    d: "Undefined",
    correct: "b",
  },
  {
    question: "What is a closure in JavaScript?",
    a: "A function that can be called before it is declared",
    b: "An object that contains a set of key-value pairs",
    c: "A function that has access to variables in its outer scope, even after the outer function has returned",
    d: "A programming paradigm that emphasizes the use of objects",
    correct: "c",
  },
  {
    question:
      "What is the output of the following code: console.log(typeof NaN);",
    a: "number",
    b: "NaN",
    c: "undefined",
    d: "string",
    correct: "a",
  },
  {
    question: "What does the 'Array.prototype.reduce()' method do?",
    a: "Returns a new array with the same elements as the original array",
    b: "Returns a new array with a subset of the elements of the original array",
    c: "Applies a function to each element of an array and returns a new array with the results",
    d: "Reduces an array to a single value by applying a function to each element and accumulating the result",
    correct: "d",
  },
  {
    question: "What does the 'let' keyword do in JavaScript?",
    a: "Declares a block-scoped variable",
    b: "Declares a function",
    c: "Declares a global variable",
    d: "Declares a constant variable",
    correct: "a",
  },
  {
    question: "What does the 'typeof' operator return when called on an array?",
    a: "object",
    b: "array",
    c: "function",
    d: "undefined",
    correct: "a",
  },
  {
    question: "What does the 'Array.prototype.map()' method do?",
    a: "Returns a new array with the same elements as the original array",
    b: "Returns a new array with a subset of the elements of the original array",
    c: "Applies a function to each element of an array and returns a new array with the results",
    d: "Sorts the elements of an array in ascending order",
    correct: "c",
  },
  {
    question: "What does the 'Array.prototype.forEach()' method do?",
    a: "Returns a new array with the same elements as the original array",
    b: "Returns a new array with a subset of the elements of the original array",
    c: "Applies a function to each element of an array and returns a new array with the results",
    d: "Calls a function for each element of an array",
    correct: "d",
  },
  {
    question:
      "What is the output of the following code: console.log(0.1 + 0.2 == 0.3);",
    a: "true",
    b: "false",
    c: "Error",
    d: "Undefined",
    correct: "b",
  },
  {
    question: "What is the output of the following code: console.log('5' - 3);",
    a: "2",
    b: "8",
    c: "NaN",
    d: "Error",
    correct: "a",
  },
  {
    question: "What does the 'Array.prototype.slice()' method do?",
    a: "Removes the last element from an array and returns it",
    b: "Removes the first element from an array and returns it",
    c: "Returns a shallow copy of a portion of an array into a new array object",
    d: "Removes a range of elements from an array and returns them in a new array",
    correct: "c",
  },
  {
    question:
      "What is the output of the following code: console.log(typeof typeof 1);",
    a: "number",
    b: "string",
    c: "undefined",
    d: "Error",
    correct: "b",
  },
  {
    question: "What is a callback function in JavaScript?",
    a: "A function that is called when an event occurs",
    b: "A function that is called when a timer expires",
    c: "A function that is passed as an argument to another function and is called back later",
    d: "A function that is called when an error occurs",
    correct: "c",
  },
  {
    question: "What does the 'Array.prototype.push()' method do?",
    a: "Adds one or more elements to the end of an array and returns the new length of the array",
    b: "Adds one or more elements to the beginning of an array and returns the new length of the array",
    c: "Removes the last element from an array and returns it",
    d: "Removes the first element from an array and returns it",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: console.log([1, 2, 3] + [4, 5, 6]);",
    a: "[1, 2, 3, 4, 5, 6]",
    b: "10",
    c: "Error",
    d: "Undefined",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: console.log(typeof NaN);",
    a: "number",
    b: "string",
    c: "undefined",
    d: "Error",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: console.log(5 < 6 < 7);",
    a: "true",
    b: "false",
    c: "Error",
    d: "Undefined",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: console.log(typeof null);",
    a: "null",
    b: "undefined",
    c: "object",
    d: "number",
    correct: "c",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    a: "onmouseover",
    b: "onchange",
    c: "onclick",
    d: "onmouseclick",
    correct: "c",
  },
  {
    question: "How do you find the minimum of the numbers 2 and 3 in JavaScript?",
    a: "min(2,3)",
    b: "Math.min(2,3)",
    c: "Math.minimum(2,3)",
    d: "Math.lower(2,3)",
    correct: "b",
  },
  {
    question: "How do you create a new Promise in JavaScript?",
    a: "new Promise()",
    b: "Promise.new()",
    c: "Promise()",
    d: "new Promise.create()",
    correct: "a",
  },
  {
    question: "Which method is used to add an element at the beginning of an array in JavaScript?",
    a: "push()",
    b: "unshift()",
    c: "shift()",
    d: "pop()",
    correct: "b",
  },
  {
    question: "What does the 'map()' method in JavaScript do?",
    a: "Reduces an array to a single value",
    b: "Checks each element in an array to see if it meets a condition",
    c: "Creates a new array with the results of calling a function for every array element",
    d: "Reverses the order of the elements in an array",
    correct: "c",
  },
  {
    question: "Which HTML tag is used to include an external JavaScript file?",
    a: "<javascript>",
    b: "<script>",
    c: "<js>",
    d: "<link>",
    correct: "b",
  },
  {
    question: "What is the result of 'null == undefined' in JavaScript?",
    a: "true",
    b: "false",
    c: "TypeError",
    d: "ReferenceError",
    correct: "a",
  },
  {
    question: "What method would you use to convert a JSON string into a JavaScript object?",
    a: "JSON.parse()",
    b: "JSON.stringify()",
    c: "JSON.toObject()",
    d: "JSON.convert()",
    correct: "a",
  },
  {
    question: "Which of the following is a JavaScript framework?",
    a: "Django",
    b: "Flask",
    c: "React",
    d: "Laravel",
    correct: "c",
  },
  {
    question: "What is the main purpose of the 'async' keyword in JavaScript?",
    a: "To stop the execution of a function",
    b: "To make a function return a Promise",
    c: "To execute a function asynchronously",
    d: "To automatically handle errors",
    correct: "b",
  },
  {
    question: "In JavaScript, what will 'console.log(1 + '2')' output?",
    a: "3",
    b: "'12'",
    c: "'3'",
    d: "SyntaxError",
    correct: "b",
  },
  {
    question: "What does 'this' refer to in a JavaScript function?",
    a: "The global object",
    b: "The document object",
    c: "The function itself",
    d: "Depends on how the function is called",
    correct: "d",
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// Pick 5 random questions from the array
const selectedQuizData = quizData.sort(() => 0.5 - Math.random()).slice(0, 10);

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = selectedQuizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === selectedQuizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < selectedQuizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
           <h3>You answered ${score}/${selectedQuizData.length} questions correctly</h3>
           <button id="submit" onclick="location.reload()">Reload</button>
           `;
    }
  }
});
