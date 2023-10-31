const quizData = [
  {
    question: "Who developed Python Programming Language?",
    a: "Wick van Rossum",
    b: "Rasmus Lerdorf",
    c: "Guido van Rossum",
    d: "Niene Stom",
    correct: "c",
  },
  {
    question: "Which type of Programming does Python support?",
    a: "Object-oriented programming",
    b: "Structured programming",
    c: "Functional programming",
    d: "All of the mentioned",
    correct: "d",
  },
  {
    question: "Is Python case sensitive when dealing with identifiers?",
    a: "No",
    b: "Yes",
    c: "Machine dependent",
    d: "None of the mentioned",
    correct: "a",
  },
  {
    question:
      "Which of the following is the correct extension of the Python file?",
    a: " .python",
    b: " .pl",
    c: " .py",
    d: ".p",
    correct: "c",
  },
  {
    question: "All keywords in Python are in _________",
    a: "Capitalized",
    b: "lower case",
    c: "UPPER CASE",
    d: "None of the mentioned",
    correct: "b",
  },
  {
    question: `What will be the value of the following Python expression?
        4 + 3 % 5`,
    a: "7",
    b: "2",
    c: "4",
    d: "1",
    correct: "7",
  },
  {
    question: "Which keyword is used for function in Python language?",
    a: "Function",
    b: "Def",
    c: "Fun",
    d: "Define",
    correct: "b",
  },
  {
    question: "What does pip stand for python?",
    a: "Unlimited length",
    b: "All private members must have leading and trailing underscores",
    c: "Preferred Installer Program",
    d: "none of the mentioned",
    correct: "c",
  },
  {
    question:
      "Which of the following functions is a built-in function in python?",
    a: "factorial()",
    b: "print()",
    c: "seed()",
    d: "sqrt()",
    correct: "b",
  },
  {
    question: "Which of the following is the use of id() function in python?",
    a: "Every object doesn’t have a unique id",
    b: "Id returns the identity of the object",
    c: "All of the mentioned",
    d: "None of the mentioned",
    correct: "b",
  },
  {
    question: "What is Python?",
    a: "A compiled programming language",
    b: "An interpreted programming language",
    c: "A markup language",
    d: "A scripting language",
    correct: "b",
  },
  {
    question: "What is the syntax to print something to the console in Python?",
    a: "console.log()",
    b: "System.out.println()",
    c: "print()",
    d: "cout <<",
    correct: "c",
  },
  {
    question: "What is the keyword used to define a function in Python?",
    a: "function",
    b: "def",
    c: "define",
    d: "func",
    correct: "b",
  },
  {
    question: "What is the syntax to import a module in Python?",
    a: "import moduleName",
    b: "module moduleName",
    c: "from moduleName import *",
    d: "include moduleName",
    correct: "a",
  },
  {
    question: "What is the syntax to declare a variable in Python?",
    a: "var variableName = value",
    b: "let variableName = value",
    c: "variableName = value",
    d: "dim variableName as value",
    correct: "c",
  },
  {
    question: "What is the output of the following code: print(type(5))",
    a: "int",
    b: "float",
    c: "string",
    d: "boolean",
    correct: "a",
  },
  {
    question: "What is the output of the following code: print(len('Python'))",
    a: "5",
    b: "6",
    c: "7",
    d: "8",
    correct: "a",
  },
  {
    question: "What is the output of the following code: print('Python'[2:4])",
    a: "Py",
    b: "yt",
    c: "th",
    d: "on",
    correct: "b",
  },
  {
    question:
      "What is the output of the following code: print('Python'.upper())",
    a: "PYTHON",
    b: "Python",
    c: "python",
    d: "P y t h o n",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: print('Python'.replace('y', 'i'))",
    a: "Pythoi",
    b: "Pithon",
    c: "Python",
    d: "Pithoi",
    correct: "b",
  },
  {
    question: "Which of the following is not a data type in Python?",
    a: "int",
    b: "float",
    c: "double",
    d: "string",
    correct: "c",
  },
  {
    question: "What is the output of the following code: print(5 == '5')",
    a: "True",
    b: "False",
    c: "Error",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "What is the output of the following code: print(5 != 5.0)",
    a: "True",
    b: "False",
    c: "Error",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "What is the output of the following code: print(10 / 3)",
    a: "3.3333333333333335",
    b: "3",
    c: "3.0",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is the output of the following code: print(10 // 3)",
    a: "3.3333333333333335",
    b: "3",
    c: "3.0",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "Which of the following is not a valid Python identifier?",
    a: "my_var",
    b: "myVar",
    c: "my-var",
    d: "_my_var",
    correct: "c",
  },
  {
    question: "What is the output of the following code: print('a' in 'apple')",
    a: "True",
    b: "False",
    c: "Error",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: x = [1, 2, 3]\nprint(x[1])",
    a: "1",
    b: "2",
    c: "3",
    d: "Error",
    correct: "b",
  },
  {
    question:
      "What is the output of the following code: x = [1, 2, 3]\nprint(x[-1])",
    a: "1",
    b: "2",
    c: "3",
    d: "Error",
    correct: "c",
  },
  {
    question:
      "What is the output of the following code: x = [1, 2, 3]\nx.append(4)\nprint(x)",
    a: "[1, 2, 3, 4]",
    b: "[4, 3, 2, 1]",
    c: "[1, 2, 3]",
    d: "[1, 2, 3, [4]]",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: x = [1, 2, 3]\nx.extend([4, 5])\nprint(x)",
    a: "[1, 2, 3, 4, 5]",
    b: "[4, 5, 3, 2, 1]",
    c: "[1, 2, 3]",
    d: "[1, 2, 3, [4, 5]]",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: x = [1, 2, 3]\nx.pop()\nprint(x)",
    a: "[1, 2]",
    b: "[2, 3]",
    c: "[1, 2, 3]",
    d: "[3, 2, 1]",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: x = [1, 2, 3]\nx.remove(2)\nprint(x)",
    a: "[1, 2]",
    b: "[2, 3]",
    c: "[1, 3]",
    d: "[3, 2, 1]",
    correct: "c",
  },
  {
    question:
      "What is the output of the following code: x = {1: 'one', 2: 'two', 3: 'three'}\nprint(x[2])",
    a: "1",
    b: "2",
    c: "3",
    d: "'two'",
    correct: "d",
  },
  {
    question:
      "What is the output of the following code: x = {1: 'one', 2: 'two', 3: 'three'}\nprint(x.get(4, 'four'))",
    a: "'four'",
    b: "'three'",
    c: "'None'",
    d: "'one'",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: x = {1: 'one', 2: 'two', 3: 'three'}\nprint(x.keys())",
    a: "[1, 2, 3]",
    b: "['one', 'two', 'three']",
    c: "[1: 'one', 2: 'two', 3: 'three']",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: x = {1: 'one', 2: 'two', 3: 'three'}\nprint(x.values())",
    a: "[1, 2, 3]",
    b: "['one', 'two', 'three']",
    c: "[1: 'one', 2: 'two', 3: 'three']",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "What is the output of the following code: x = {1: 'one', 2: 'two', 3: 'three'}\nprint(x.items())",
    a: "[(1, 'one'), (2, 'two'), (3, 'three')]",
    b: "['one', 'two', 'three']",
    c: "[1: 'one', 2: 'two', 3: 'three']",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: x = {1: 'one', 2: 'two', 3: 'three'}\nprint(x.pop(2))",
    a: "1",
    b: "2",
    c: "'two'",
    d: "'one'",
    correct: "c",
  },
  {
    question:
      "What is the output of the following code: x = {1: 'one', 2: 'two', 3: 'three'}\ndel x[2]\nprint(x)",
    a: "{1: 'one', 3: 'three'}",
    b: "{1: 'one', 2: 'two', 3: 'three'}",
    c: "{2: 'two'}",
    d: "{1: 'one', 2: 'two'}",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: def f(x):\n return x**2\nprint(f(2))",
    a: "4",
    b: "2",
    c: "8",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: def f(x, y=2):\n return x*y\nprint(f(3))",
    a: "6",
    b: "3",
    c: "2",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "What is the output of the following code: def f(*args):\n return args\nprint(f(1, 2, 3))",
    a: "(1, 2, 3)",
    b: "[1, 2, 3]",
    c: "1\n2\n3",
    d: "None of the above",
    correct: "a",
  },
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
