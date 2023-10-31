const quizData = [
  {
    question: "Who is the father of C language?",
    a: "Steve Jobs",
    b: "James Gosling",
    c: "Dennis Ritchie",
    d: "Rasmus Lerdorf",
    correct: "c",
  },
  {
    question: "Which of the following is not a valid C variable name?",
    a: "int number;",
    b: "float rate;",
    c: "int variable_count;",
    d: "int $main;",
    correct: "d",
  },
  {
    question: "All keywords in C are in ____________",
    a: "LowerCase letters",
    b: "UpperCase letters",
    c: "CamelCase letters",
    d: "None of the mentioned",
    correct: "a",
  },
  {
    question: "The C-preprocessors are specified with _________ symbol.",
    a: "#",
    b: "$",
    c: "*",
    d: "&",
    correct: "a",
  },
  {
    question: "What is the sizeof(char) in a 32-bit C compiler?",
    a: "1 bit",
    b: "2 bits",
    c: "1 byte",
    d: "2 bytes",
    correct: "c",
  },
  {
    question: "C Language is a successor to which language.?",
    a: "FORTRAN",
    b: "D Language",
    c: "BASIC",
    d: "B Language",
    correct: "d",
  },
  {
    question: "An Identifier can start with.?",
    a: "Alphabet",
    b: "Underscore ( _ ) sign",
    c: "Any character that can be typed on a keyboard",
    d: "Option A & Option B",
    correct: "d",
  },
  {
    question: "Find an integer constant.",
    a: "3.145",
    b: "34",
    c: "'125'",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "Each statement in a C program should end with.?",
    a: "Semicolon ;",
    b: "Colon :",
    c: "Period . (dot symbol)",
    d: "None of the above.",
    correct: "a",
  },
  {
    question: "A function which calls itself is called a ___ function.",
    a: "Self Function",
    b: "Auto Function",
    c: "Recursive Function",
    d: "Static Function",
    correct: "c",
  },
  {
    question: "What is C language?",
    a: "A high-level programming language",
    b: "A low-level programming language",
    c: "A scripting language",
    d: "A markup language",
    correct: "b",
  },
  {
    question: "What is the purpose of #include <stdio.h>?",
    a: "To include the standard input/output library",
    b: "To include the string library",
    c: "To include the math library",
    d: "To include the graphics library",
    correct: "a",
  },
  {
    question: "What is the difference between i++ and ++i?",
    a: "There is no difference",
    b: "i++ increments i after the expression is evaluated",
    c: "++i increments i before the expression is evaluated",
    d: "The behavior depends on the context",
    correct: "c",
  },
  {
    question: "What is a variable in C?",
    a: "A function that returns a value",
    b: "A value that can be changed",
    c: "A named memory location that stores a value",
    d: "A keyword used for loops",
    correct: "c",
  },
  {
    question: "What is the format specifier for a float in printf()?",
    a: "%f",
    b: "%d",
    c: "%s",
    d: "%c",
    correct: "a",
  },
  {
    question:
      "What is the maximum value that can be stored in an int data type?",
    a: "2^31 - 1",
    b: "2^32 - 1",
    c: "2^63 - 1",
    d: "2^64 - 1",
    correct: "a",
  },
  {
    question: "What is the keyword used for declaring a constant variable?",
    a: "const",
    b: "var",
    c: "let",
    d: "final",
    correct: "a",
  },
  {
    question: "What is a pointer in C?",
    a: "A data type used for storing floating-point values",
    b: "A variable that stores the address of another variable",
    c: "A keyword used for loops",
    d: "A function that returns a memory address",
    correct: "b",
  },
  {
    question: "What is the symbol used for the modulus operator?",
    a: "/",
    b: "*",
    c: "%",
    d: "^",
    correct: "c",
  },
  {
    question: "What is the purpose of the break statement?",
    a: "To exit a loop",
    b: "To skip a loop iteration",
    c: "To continue to the next iteration of a loop",
    d: "To terminate a program",
    correct: "a",
  },
  {
    question: "What is the purpose of the continue statement?",
    a: "To exit a loop",
    b: "To skip a loop iteration",
    c: "To continue to the next iteration of a loop",
    d: "To terminate a program",
    correct: "c",
  },
  {
    question: "What is a function in C?",
    a: "A variable that stores a value",
    b: "A keyword used for loops",
    c: "A block of code that performs a specific task",
    d: "A pointer to a memory location",
    correct: "c",
  },
  {
    question: "What is a structure in C?",
    a: "A collection of variables of different data types that are stored together under a single name",
    b: "A collection of variables of the same data type that are stored together under a single name",
    c: "A function that returns a value",
    d: "A data type used for storing floating-point values",
    correct: "a",
  },
  {
    question: "What is a union in C?",
    a: "A collection of variables of different data types that are stored together under a single name",
    b: "A collection of variables of the same data type that are stored together under a single name",
    c: "A function that returns a value",
    d: "A data type used for storing floating-point values",
    correct: "a",
  },
  {
    question: "What is the difference between a structure and a union?",
    a: "There is no difference",
    b: "A structure stores variables of different data types, while a union stores variables of the same data type",
    c: "A union stores variables of different data types, while a structure stores variables of the same data type",
    d: "A union and a structure are the same thing",
    correct: "b",
  },
  {
    question: "What is the syntax for accessing a structure member?",
    a: "structure.member",
    b: "member.structure",
    c: "structure->member",
    d: "member->structure",
    correct: "a",
  },
  {
    question: "What is the syntax for accessing a union member?",
    a: "union.member",
    b: "member.union",
    c: "union->member",
    d: "member->union",
    correct: "a",
  },
  {
    question: "What is the purpose of the sizeOf() function?",
    a: "To return the size of a data type in bytes",
    b: "To return the number of elements in an array",
    c: "To return the memory address of a variable",
    d: "To return the ASCII value of a character",
    correct: "a",
  },
  {
    question: "What is a file in C?",
    a: "A collection of data",
    b: "A data type used for storing floating-point values",
    c: "A named location on disk or in memory used for storing data",
    d: "A function that returns a value",
    correct: "c",
  },
  {
    question: "What is the purpose of the fopen() function?",
    a: "To create a new file",
    b: "To open an existing file",
    c: "To read data from a file",
    d: "To write data to a file",
    correct: "b",
  },
  {
    question: "What is the purpose of the fprintf() function?",
    a: "To read data from a file",
    b: "To write data to a file",
    c: "To close a file",
    d: "To create a new file",
    correct: "b",
  },
  {
    question: "What is the purpose of the fscanf() function?",
    a: "To write data to a file",
    b: "To read data from a file",
    c: "To close a file",
    d: "To create a new file",
    correct: "b",
  },
  {
    question: "What is the purpose of the fseek() function?",
    a: "To move the file pointer to a specific location in the file",
    b: "To create a new file",
    c: "To open an existing file",
    d: "To read data from a file",
    correct: "a",
  },
  {
    question: "What is the purpose of the ftell() function?",
    a: "To return the size of a file in bytes",
    b: "To return the current position of the file pointer",
    c: "To return the number of elements in an array",
    d: "To return the ASCII value of a character",
    correct: "b",
  },
  {
    question: "What is the purpose of the rewind() function?",
    a: "To move the file pointer to the beginning of the file",
    b: "To move the file pointer to the end of the file",
    c: "To close a file",
    d: "To create a new file",
    correct: "a",
  },
  {
    question: "What is the purpose of the feof() function?",
    a: "To check if the end-of-file has been reached",
    b: "To read data from a file",
    c: "To write data to a file",
    d: "To close a file",
    correct: "a",
  },
  {
    question: "What is the purpose of the getchar() function?",
    a: "To read a character from standard input (keyboard)",
    b: "To write a character to standard output (console)",
    c: "To read a character from a file",
    d: "To write a character to a file",
    correct: "a",
  },
  {
    question: "What is the purpose of the putchar() function?",
    a: "To write a character to standard output (console)",
    b: "To read a character from standard input (keyboard)",
    c: "To write a character to a file",
    d: "To read a character from a file",
    correct: "a",
  },
  {
    question: "What is a pointer in C?",
    a: "A data type used for storing integers",
    b: "A data type used for storing characters",
    c: "A data type used for storing floating-point values",
    d: "A variable that stores the memory address of another variable",
    correct: "d",
  },
  {
    question: "What is the purpose of the & operator?",
    a: "To declare a variable",
    b: "To perform arithmetic operations",
    c: "To access the value of a variable",
    d: "To access the memory address of a variable",
    correct: "d",
  },
  {
    question: "What is the difference between ++i and i++ in C?",
    a: "There is no difference",
    b: "++i increments i before the expression is evaluated, while i++ increments i after the expression is evaluated",
    c: "i++ increments i before the expression is evaluated, while ++i increments i after the expression is evaluated",
    d: "++i and i++ are not valid expressions in C",
    correct: "b",
  },
  {
    question: "What is the purpose of the sizeof() operator?",
    a: "To return the size of a file in bytes",
    b: "To return the number of elements in an array",
    c: "To return the ASCII value of a character",
    d: "To return the size of a data type in bytes",
    correct: "d",
  },
  {
    question: "What is the purpose of the switch statement in C?",
    a: "To perform iterative loops",
    b: "To perform conditional branching",
    c: "To define a function",
    d: "To allocate memory dynamically",
    correct: "b",
  },
  {
    question:
      "What is the purpose of the break statement in a switch statement?",
    a: "To terminate the entire program",
    b: "To terminate the current iteration of a loop",
    c: "To jump to a specific label in the code",
    d: "To exit the switch statement and continue executing code after the statement",
    correct: "d",
  },
  {
    question: "What is the purpose of the continue statement in a loop?",
    a: "To terminate the loop",
    b: "To skip the current iteration of the loop and continue with the next iteration",
    c: "To jump to a specific label in the code",
    d: "To exit the loop and continue executing code after the loop",
    correct: "b",
  },
  {
    question: "What is the purpose of the do-while loop in C?",
    a: "To perform a loop a fixed number of times",
    b: "To perform a loop while a condition is true",
    c: "To perform a loop until a condition is true",
    d: "To perform a loop at least once, and then repeat the loop while a condition is true",
    correct: "d",
  },
  {
    question: "What is the purpose of the for loop in C?",
    a: "To perform a loop a fixed number of times",
    b: "To perform a loop while a condition is true",
    c: "To perform a loop until a condition is true",
    d: "All of the above",
    correct: "a",
  },
  {
    question: "What is the purpose of the while loop in C?",
    a: "To perform a loop a fixed number of times",
    b: "To perform a loop while a condition is true",
    c: "To perform a loop until a condition is true",
    d: "All of the above",
    correct: "b",
  },
  {
    question: "What is the purpose of the malloc() function in C?",
    a: "To allocate memory dynamically",
    b: "To deallocate memory",
    c: "To copy memory",
    d: "To move memory",
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
