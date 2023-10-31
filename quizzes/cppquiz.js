const quizData = [
  {
    question: "Who invented C++?",
    a: "Dennis Ritchie",
    b: "Ken Thompson",
    c: "Brian Kernighan",
    d: "Bjarne Stroustrup",
    correct: "d",
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
    question: "Which of the following is used for comments in C++?",
    a: "/* comment */",
    b: " // comment */",
    c: " // comment",
    d: "both // comment or /* comment */",
    correct: "d",
  },
  {
    question:
      "Which of the following user-defined header file extension used in c++?",
    a: "hg",
    b: "cpp",
    c: "h",
    d: "hf",
    correct: "b",
  },
  {
    question: "Which is more effective while calling the C++ functions?",
    a: "call by object",
    b: "call by pointer",
    c: "call by value",
    d: "call by reference",
    correct: "d",
  },
  {
    question: "Which concept allows you to reuse the written code in C++? ",
    a: "Inheritance",
    b: "Polymorphism",
    c: "Abstraction",
    d: "Encapsulation",
    correct: "d",
  },
  {
    question: "Which keyword is used to define the macros in c++?",
    a: "#macro",
    b: "#define",
    c: "macro",
    d: "define",
    correct: "b",
  },
  {
    question: "What is Inheritance in C++?",
    a: "Deriving new classes from existing classes",
    b: "Overloading of classes",
    c: "Classes with same names",
    d: "Wrapping of data into a single class",
    correct: "a",
  },
  {
    question: "What is meant by a polymorphism in C++?",
    a: "class having only single form",
    b: "class having four forms",
    c: "class having many forms",
    d: "class having two forms",
    correct: "c",
  },
  {
    question: "What is abstract class in C++?",
    a: "Any Class in C++ is an abstract class",
    b: "Class from which any class is derived",
    c: "Class specifically used as a base class with atleast one virtual functions",
    d: "Class specifically used as a base class with atleast one pure virtual functions",
    correct: "d",
  },
  {
    question: "What is C++?",
    a: "A programming language",
    b: "A database management system",
    c: "A web development framework",
    d: "A software development tool",
    correct: "a",
  },
  {
    question: "What is the origin of C++?",
    a: "It was developed by Bjarne Stroustrup at Bell Labs in 1979",
    b: "It was developed by Dennis Ritchie at Bell Labs in 1972",
    c: "It was developed by Steve Jobs at Apple in 1984",
    d: "It was developed by James Gosling at Sun Microsystems in 1995",
    correct: "a",
  },
  {
    question: "What is the difference between C and C++?",
    a: "C++ is an object-oriented programming language while C is not",
    b: "C is a high-level language while C++ is a low-level language",
    c: "C++ is a subset of C",
    d: "C++ has a larger standard library than C",
    correct: "a",
  },
  {
    question: "What are the basic data types in C++?",
    a: "int, float, double, char, bool",
    b: "string, array, vector, map, set",
    c: "long, short, unsigned, signed, pointer",
    d: "class, object, function, namespace, template",
    correct: "a",
  },
  {
    question: "What is the syntax to declare a variable in C++?",
    a: "var type variable_name = value;",
    b: "variable_name = value;",
    c: "type variable_name = value;",
    d: "type variable_name;",
    correct: "d",
  },
  {
    question: "What is a pointer in C++?",
    a: "A variable that stores the address of another variable",
    b: "A variable that stores the value of another variable",
    c: "A function that returns a value",
    d: "A statement that executes a block of code",
    correct: "a",
  },
  {
    question:
      "What is the difference between a reference and a pointer in C++?",
    a: "A reference is a pointer that cannot be changed",
    b: "A reference is an alias for a variable while a pointer is a variable that stores an address",
    c: "A pointer is an alias for a variable while a reference is a variable that stores an address",
    d: "A pointer is a reference to a function",
    correct: "b",
  },
  {
    question: "What is object-oriented programming (OOP)?",
    a: "A programming paradigm that emphasizes objects and their interactions",
    b: "A programming language that supports objects and classes",
    c: "A programming methodology that focuses on performance",
    d: "A programming technique for writing efficient code",
    correct: "a",
  },
  {
    question: "What are the four pillars of OOP?",
    a: "Abstraction, Encapsulation, Inheritance, Polymorphism",
    b: "Input, Output, Conditionals, Loops",
    c: "Functions, Pointers, Arrays, Structures",
    d: "Operators, Expressions, Statements, Blocks",
    correct: "a",
  },
  {
    question: "What is function overloading in C++?",
    a: "The ability to define multiple functions with the same name but different parameter lists",
    b: "The ability to define a function that calls itself",
    c: "The ability to define a function that takes a variable number of arguments",
    d: "The ability to define a function that returns a different type depending on the input",
    correct: "a",
  },
  {
    question: "What is operator overloading in C++?",
    a: "The ability to redefine how an operator works for a custom class",
    b: "The ability to use operators to manipulate pointers",
    c: "The ability to define a function that takes an operator as an argument",
    d: "The ability to define a function that returns an operator",
    correct: "a",
  },
  {
    question: "What is a constructor in C++?",
    a: "A special member function that is called when an object of a class is created",
    b: "A function that is used to destroy an object of a class",
    c: "A function that is used to copy an object of a class",
    d: "A function that is used to assign a value to an object of a class",
    correct: "a",
  },
  {
    question: "What is a destructor in C++?",
    a: "A special member function that is called when an object of a class is destroyed",
    b: "A function that is used to create an object of a class",
    c: "A function that is used to copy an object of a class",
    d: "A function that is used to assign a value to an object of a class",
    correct: "a",
  },
  {
    question: "What is dynamic memory allocation in C++?",
    a: "The ability to allocate memory at runtime using new and delete operators",
    b: "The ability to allocate memory on the stack using malloc and free functions",
    c: "The ability to allocate memory on the heap using malloc and free functions",
    d: "The ability to allocate memory at compile-time using global variables",
    correct: "a",
  },
  {
    question: "What is a template in C++?",
    a: "A generic programming feature that allows functions and classes to work with different data types",
    b: "A special function that is used to allocate memory for an object",
    c: "A function that is used to initialize an object",
    d: "A function that is used to compare two objects",
    correct: "a",
  },
  {
    question: "What is a virtual function in C++?",
    a: "A function that can be overridden by a derived class",
    b: "A function that is declared using the virtual keyword",
    c: "A function that is used to call another function",
    d: "A function that is used to create an object of a class",
    correct: "a",
  },
  {
    question: "What is a pure virtual function in C++?",
    a: "A virtual function that has no implementation in the base class",
    b: "A virtual function that has a default implementation in the base class",
    c: "A virtual function that cannot be overridden by a derived class",
    d: "A virtual function that is declared using the pure keyword",
    correct: "a",
  },
  {
    question: "What is a friend function in C++?",
    a: "A function that is not a member of a class but has access to its private members",
    b: "A function that is used to compare two objects",
    c: "A function that is used to create an object of a class",
    d: "A function that is used to initialize an object",
    correct: "a",
  },
  {
    question: "What is a friend class in C++?",
    a: "A class that is not a member of another class but has access to its private members",
    b: "A class that is used to create an object of another class",
    c: "A class that is used to compare two objects",
    d: "A class that is used to initialize an object",
    correct: "a",
  },
  {
    question: "What is a destructor in C++?",
    a: "A special function that is called when an object is destroyed",
    b: "A function that is used to create an object of a class",
    c: "A function that is used to compare two objects",
    d: "A function that is used to initialize an object",
    correct: "a",
  },
  {
    question: "What is a constructor in C++?",
    a: "A special function that is called when an object is created",
    b: "A function that is used to create an object of a class",
    c: "A function that is used to compare two objects",
    d: "A function that is used to initialize an object",
    correct: "a",
  },
  {
    question: "What is inheritance in C++?",
    a: "A mechanism that allows a class to inherit properties and behavior from another class",
    b: "A mechanism that allows a class to create multiple objects of itself",
    c: "A mechanism that allows a class to create objects of another class",
    d: "A mechanism that allows a class to hide its properties and behavior",
    correct: "a",
  },
  {
    question: "What is polymorphism in C++?",
    a: "A mechanism that allows objects of different classes to be treated as if they were of the same class",
    b: "A mechanism that allows a class to inherit properties and behavior from another class",
    c: "A mechanism that allows a class to create objects of another class",
    d: "A mechanism that allows a class to hide its properties and behavior",
    correct: "a",
  },
  {
    question: "What is encapsulation in C++?",
    a: "A mechanism that allows a class to hide its implementation details from outside code",
    b: "A mechanism that allows a class to create objects of another class",
    c: "A mechanism that allows a class to inherit properties and behavior from another class",
    d: "A mechanism that allows a class to hide its properties and behavior",
    correct: "a",
  },
  {
    question: "What is a namespace in C++?",
    a: "A way to group related code together and prevent naming conflicts",
    b: "A way to create objects of a class",
    c: "A way to inherit properties and behavior from another class",
    d: "A way to hide the implementation details of a class",
    correct: "a",
  },
  {
    question: "What is the scope resolution operator in C++?",
    a: "::",
    b: ":",
    c: ".",
    d: "->",
    correct: "a",
  },
  {
    question: "What is the ternary operator in C++?",
    a: "A shorthand way of writing an if-else statement",
    b: "A way to create objects of a class",
    c: "A way to inherit properties and behavior from another class",
    d: "A way to hide the implementation details of a class",
    correct: "a",
  },
  {
    question: "Who is the father of C++ language?",
    a: "Steve Jobs",
    b: "Bjarne Stroustrup",
    c: "Dennis Ritchie",
    d: "Rasmus Lerdorf",
    correct: "b",
  },
  {
    question: "Which of the following is not a C++ access specifier?",
    a: "public",
    b: "private",
    c: "hidden",
    d: "protected",
    correct: "c",
  },
  {
    question:
      "Which of the following operators is used for memory allocation in C++?",
    a: "new",
    b: "alloc",
    c: "malloc",
    d: "memory",
    correct: "a",
  },
  {
    question:
      "Which of the following operators is used for dereferencing a pointer?",
    a: "*",
    b: "&",
    c: ".",
    d: "->",
    correct: "a",
  },
  {
    question: "Which of the following is not a fundamental data type in C++?",
    a: "int",
    b: "float",
    c: "bool",
    d: "char*",
    correct: "d",
  },
  {
    question:
      "Which of the following is the correct way to declare a constant in C++?",
    a: "const int PI = 3.14;",
    b: "int const PI = 3.14;",
    c: "int PI = const 3.14;",
    d: "int PI = 3.14 const;",
    correct: "a",
  },
  {
    question: "Which of the following is an example of a post-test loop?",
    a: "while loop",
    b: "for loop",
    c: "do-while loop",
    d: "if-else statement",
    correct: "c",
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
