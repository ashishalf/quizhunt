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
        question: "Who invented C++?",
        a: "Dennis Ritchie",
        b: "Ken Thompson",
        c: "Brian Kernighan",
        d: "Bjarne Stroustrup",
        correct: "d",
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
        question: "The structure or format of data is called ___________",
        a: "Syntax",
        b: "Semantics",
        c: "Struct",
        d: "Formatting",
        correct: "a",
    },
    
    {
        question: "What is computer architecture?",
        a: "set of categories and methods that specify the functioning, organisation, and implementation of computer systems",
        b: "set of principles and methods that specify the functioning, organisation, and implementation of computer systems",
        c: "set of functions and methods that specify the functioning, organisation, and implementation of computer systems",
        d: "None of the mentioned",
        correct: "b",
    },
    {
        question: "Communication between a computer and a keyboard involves ______________ transmission.",
        a: "Automatic",
        b: "Half-duplex",
        c: "Full-duplex",
        d: "Simplex",
        correct: "d",
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
        question: "What is computer organization?",
        a: "structure and behaviour of a computer system as observed by the user.",
        b: "structure of a computer system as observed by the developer.",
        c: "structure and behaviour of a computer system as observed by the developer.",
        d: "All of the mentioned.",
        correct: "a",
    },

    {
        question: "What is C++?",
        a: "C++ is an object oriented programming language.",
        b: "C++ is a procedural programming language",
        c: "C++ supports both procedural and object oriented programming language",
        d: "C++ is a functional programming language",
        correct: "c",
    },
    {
        question: "What is the full form of DBMS?",
        a: "Data of Binary Management System",
        b: "Database Management System",
        c: "Database Management Service",
        d: "Data Backup Management System",
        correct: "b",
    },
    {
        question: "Which of these best describes an array?",
        a: "A data structure that shows a hierarchical behavior",
        b: "Container of objects of similar types",
        c: "Arrays are immutable once initialised",
        d: "Array is not a data structure",
        correct: "b",
    },
    {
        question: "Which of the following is a type of cyber attack?",
        a: "Phishing",
        b: "SQL Injections",
        c: "Password Attack",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which component is used to compile, debug and execute the java programs?",
        a: "JRE",
        b: "JIT",
        c: "JDK",
        d: "JVM",
        correct: "c",
    },
    {
        question: "Which of these cannot be used for a variable name in Java?",
        a: "identifier & keyword",
        b: "identifier",
        c: "keyword",
        d: "none of the mentioned",
        correct: "c",
    },
    {
        question: "Which of the following is not an email-related hacking tool?",
        a: "Mail Password",
        b: "Email Finder Pro",
        c: "Mail PassView",
        d: "Sendinc",
        correct: "b",
    },
    {
        question: "Process of inserting an element in stack is called ____________",
        a: "Create",
        b: "Push",
        c: "Evaluation",
        d: "Pop",
        correct: "b",
    },
    {
        question: "What is a database?",
        a: "Organized collection of information that cannot be accessed, updated, and managed",
        b: "Collection of data or information without organizing",
        c: "Organized collection of data or information that can be accessed, updated, and managed",
        d: "Organized collection of data that cannot be updated",
        correct: "c",
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
        question: "Which command creates an empty file if file does not exist?",
        a: "cat",
        b: "touch",
        c: "ed",
        d: "read",
        correct: "b",
    },
    {
        question: "What is a breadth-first search?",
        a: "A search algorithm that explores the search space as far as possible",
        b: "A search algorithm that explores the search space in a systematic way",
        c: "A search algorithm that explores the search space in a depth-first manner",
        d: "A search algorithm that explores the search space level by level",
        correct: "d",
      },
      {
        question: "What is a depth-first search?",
        a: "A search algorithm that explores the search space as far as possible",
        b: "A search algorithm that explores the search space in a systematic way",
        c: "A search algorithm that explores the search space in a depth-first manner",
        d: "A search algorithm that explores the search space level by level",
        correct: "c",
      },
      {
        question: "What is a vertex?",
        a: "A point or node in a graph",
        b: "A connection between two vertices in a graph",
        c: "A data structure used to represent a binary tree",
        d: "A type of sorting algorithm",
        correct: "a",
      },
      {
        question: "What is an edge?",
        a: "A point or node in a graph",
        b: "A connection between two vertices in a graph",
        c: "A data structure used to represent a binary tree",
        d: "A type of sorting algorithm",
        correct: "b",
      },
    {
        question: "How many things are concerned in the design of a learning element?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "c",
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
        question: "How many types are available in machine learning?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "c",
    },
    {
        question: "Who developed Python Programming Language?",
        a: "Wick van Rossum",
        b: "Rasmus Lerdorf",
        c: "Guido van Rossum",
        d: "Niene Stom",
        correct: "c",
    },
    {
        question: "pwd command displays",
        a: "user password",
        b: "password file content",
        c: "present working directory",
        d: "none of the mentioned",
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
      },{
        question: "What is the purpose of the 'echo' statement in PHP?",
        a: "To output text to the console",
        b: "To output text to the browser",
        c: "To store text in a variable",
        d: "To include a file",
        correct: "b",
      },
      {
        question: "What is the purpose of the 'include' statement in PHP?",
        a: "To output text to the console",
        b: "To output text to the browser",
        c: "To store text in a variable",
        d: "To include a file",
        correct: "d",
      },
      {
        question: "What is the difference between '==' and '===' in PHP?",
        a: "'==' compares values and types, while '===' compares values only",
        b: "'==' compares values only, while '===' compares values and types",
        c: "Both '==' and '===' compare values and types",
        d: "Both '==' and '===' compare values only",
        correct: "b",
      },
      {
        question: "What is the correct way to start a PHP block?",
        a: "<?php",
        b: "<php>",
        c: "<?php>",
        d: "<php",
        correct: "a",
      },
      {
        question: "What is the purpose of the 'if' statement in PHP?",
        a: "To loop through a block of code",
        b: "To execute a block of code if a condition is true",
        c: "To execute a block of code multiple times",
        d: "To include a file",
        correct: "b",
      },
      {
        question: "What is the purpose of the 'for' loop in PHP?",
        a: "To execute a block of code multiple times",
        b: "To loop through a block of code",
        c: "To execute a block of code if a condition is true",
        d: "To include a file",
        correct: "a",
      },
      {
        question: "What is the purpose of the 'strlen' function in PHP?",
        a: "To return the length of a string",
        b: "To convert a string to uppercase",
        c: "To replace characters in a string",
        d: "To search for a string within another string",
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
        question:
          "Which of the following is a valid way to declare a pointer to an integer in C++?",
        a: "int* ptr;",
        b: "int *ptr;",
        c: "int * ptr;",
        d: "All of the above",
        correct: "d",
      },
      {
        question: "Which of the following is not a type of inheritance in C++?",
        a: "Single Inheritance",
        b: "Multiple Inheritance",
        c: "Hierarchical Inheritance",
        d: "Private Inheritance",
        correct: "d",
      },
      {
        question: "What is a database schema?",
        a: "A collection of metadata that describes a database",
        b: "A collection of SQL statements that perform a specific task",
        c: "A collection of tables in a database",
        d: "A collection of triggers in a database",
        correct: "a",
      },
      {
        question: "What is a join in a database?",
        a: "A method of combining data from two or more tables into a single result set",
        b: "A method of separating data from two or more tables into multiple result sets",
        c: "A method of filtering data in a table based on a condition",
        d: "A method of sorting data in a table",
        correct: "a",
      },
      {
        question: "What is the purpose of the try-catch block in Java?",
        a: "To handle exceptions that may occur in a program.",
        b: "To define a block of code that can be executed asynchronously.",
        c: "To compare two objects to see if they are equal.",
        d: "To declare a variable that cannot be changed after initialization.",
        correct: "a",
        },
        {
        question: "What is an exception in Java?",
        a: "A runtime error that occurs during program execution.",
        b: "A syntax error that occurs during program compilation.",
        c: "A logical error that occurs during program execution.",
        d: "An error that occurs when a class is not found in the classpath.",
        correct: "a",
        },
        {
        question: "What is a checked exception in Java?",
        a: "An exception that must be caught or declared in a method signature.",
        b: "An exception that is not checked by the compiler.",
        c: "An exception that occurs during program execution.",
        d: "An exception that occurs during program compilation.",
        correct: "a",
        },
        {
        question: "What is an unchecked exception in Java?",
        a: "An exception that is not checked by the compiler.",
        b: "An exception that must be caught or declared in a method signature.",
        c: "An exception that occurs during program execution.",
        d: "An exception that occurs during program compilation.",
        correct: "a",
        },
        {
        question: "What is the purpose of the finally block in Java?",
        a: "To execute code that must be run regardless of whether an exception occurs or not.",
        b: "To handle exceptions that may occur in a program.",
        c: "To declare a variable that cannot be changed after initialization.",
        d: "To exit a loop or switch statement.",
        correct: "a",
        },
        {
        question: "What is a static method in Java?",
        a: "A method that can be called on an instance of a class.",
        b: "A method that cannot be called on an instance of a class.",
        c: "A method that is called automatically when an instance of a class is created.",
        d: "A method that is used to create a new instance of a class.",
        correct: "b",
        },
      {
        question: "What is a subquery in a database?",
        a: "A query that is embedded within another query",
        b: "A query that is used to join two tables together",
        c: "A query that is used to sort data in a table",
        d: "A query that is used to filter data in a table",
        correct: "a",
      },
      {
        question: "What is data redundancy?",
        a: "The presence of duplicate data in a database",
        b: "The absence of data in a database",
        c: "The presence of incomplete data in a database",
        d: "The presence of irrelevant data in a database",
        correct: "a",
      },
      {
        question: "What is the purpose of the 'virtual' keyword in C++?",
        a: "To make a member function of a base class virtual, allowing it to be overridden in a derived class",
        b: "To declare a function as pure virtual, requiring any derived class to implement it",
        c: "To allow for dynamic binding of functions at runtime",
        d: "All of the above",
        correct: "d",
      },
      {
        question:
          "Which of the following is the correct way to create an object of a class in C++?",
        a: "MyClass obj();",
        b: "MyClass obj = new MyClass();",
        c: "MyClass obj;",
        d: "MyClass obj = MyClass();",
        correct: "d",
      },

];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

// Pick 5 random questions from the array
const selectedQuizData = quizData.sort(() => 0.5 - Math.random()).slice(0, 20);

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

submitBtn.addEventListener('click', () => {
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

