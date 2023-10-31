const quizData = [
  {
    question: "Which of these best describes an array?",
    a: "A data structure that shows a hierarchical behavior",
    b: "Container of objects of similar types",
    c: "Arrays are immutable once initialised",
    d: "Array is not a data structure",
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
    question: "A queue follows __________",
    a: "FIFO (First In First Out) principle",
    b: "LIFO (Last In First Out) principle",
    c: "Ordered array",
    d: "Linear tree",
    correct: "a",
  },
  {
    question:
      "A linear collection of data elements where the linear node is given by means of pointer is called?",
    a: "Linked list",
    b: "Node list",
    c: "Primitive list",
    d: "Unordered list",
    correct: "a",
  },
  {
    question: "How do you initialize an array in C?",
    a: "int arr[3] = (1,2,3);",
    b: "int arr(3) = {1,2,3};",
    c: "int arr[3] = {1,2,3};",
    d: "int arr(3) = (1,2,3);",
    correct: "c",
  },

  {
    question:
      "Which data structure is mainly used for implementing the recursive algorithm?",
    a: "Queue",
    b: "Stack",
    c: "Binary tree",
    d: "Linked list",
    correct: "b",
  },
  {
    question: "Which one of the following is not the type of the Queue?",
    a: "Linear Queue",
    b: "Circular Queue",
    c: "Double ended Queue",
    d: "Single ended Queue",
    correct: "d",
  },
  {
    question:
      "If the size of the stack is 10 and we try to add the 11th element in the stack then the condition is known as___",
    a: "Underflow",
    b: "Garbage collection",
    c: "Overflow",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which of the following is the time complexity to search an element in the linked list?",
    a: "O(1)",
    b: "O(n)",
    c: "O(logn)",
    d: "O(nlogn)",
    correct: "b",
  },
  {
    question:
      "Which one of the following techniques is not used in the Binary tree?",
    a: "Randomized traversal",
    b: "Preorder traversal",
    c: "Postorder traversal",
    d: "Inorder traversal",
    correct: "a",
  },
  {
    question: "What is a data structure?",
    a: "A way to organize data in a computer",
    b: "A way to store data in a database",
    c: "A way to display data on a webpage",
    d: "A way to secure data on a network",
    correct: "a",
  },
  {
    question: "What is the difference between an array and a linked list?",
    a: "Arrays are faster than linked lists",
    b: "Arrays can be resized while linked lists cannot",
    c: "Linked lists have a fixed size while arrays do not",
    d: "Linked lists use pointers while arrays do not",
    correct: "d",
  },
  {
    question:
      "What is the time complexity of accessing an element in an array?",
    a: "O(1)",
    b: "O(log n)",
    c: "O(n)",
    d: "O(n^2)",
    correct: "a",
  },
  {
    question:
      "What is the time complexity of inserting an element at the beginning of an array?",
    a: "O(1)",
    b: "O(log n)",
    c: "O(n)",
    d: "O(n^2)",
    correct: "c",
  },
  {
    question:
      "What is the time complexity of inserting an element at the end of an array?",
    a: "O(1)",
    b: "O(log n)",
    c: "O(n)",
    d: "O(n^2)",
    correct: "a",
  },
  {
    question: "What is a stack?",
    a: "A data structure that allows data to be added and removed from both ends",
    b: "A data structure that allows data to be added and removed from the top",
    c: "A data structure that allows data to be added and removed from the bottom",
    d: "A data structure that allows data to be accessed randomly",
    correct: "b",
  },
  {
    question: "What is a queue?",
    a: "A data structure that allows data to be added and removed from both ends",
    b: "A data structure that allows data to be added and removed from the top",
    c: "A data structure that allows data to be added at the end and removed from the front",
    d: "A data structure that allows data to be accessed randomly",
    correct: "c",
  },
  {
    question: "What is a binary search tree?",
    a: "A data structure that allows data to be accessed randomly",
    b: "A data structure that allows data to be added and removed from both ends",
    c: "A data structure that allows data to be added and removed from the top",
    d: "A data structure that organizes data in a hierarchical way",
    correct: "d",
  },
  {
    question:
      "What is the time complexity of searching for an element in a binary search tree?",
    a: "O(1)",
    b: "O(log n)",
    c: "O(n)",
    d: "O(n^2)",
    correct: "b",
  },
  {
    question: "What is a hash table?",
    a: "A data structure that allows data to be accessed randomly",
    b: "A data structure that allows data to be added and removed from both ends",
    c: "A data structure that organizes data in a hierarchical way",
    d: "A data structure that maps keys to values for efficient retrieval",
    correct: "d",
  },
  {
    question:
      "What is the time complexity of searching for an element in a hash table?",
    a: "O(1)",
    b: "O(log n)",
    c: "O(n)",
    d: "O(n^2)",
    correct: "a",
  },
  {
    question: "What is a collision in a hash table?",
    a: "When two keys map to the same index",
    b: "When a key is not found in the hash table",
    c: "When a hash table is resized",
    d: "When a hash table is sorted",
    correct: "a",
  },
  {
    question: "What is a linked list?",
    a: "A data structure that allows data to be accessed randomly",
    b: "A data structure that allows data to be added and removed from both ends",
    c: "A data structure that organizes data in a hierarchical way",
    d: "A data structure that consists of a sequence of nodes, each pointing to the next",
    correct: "d",
  },
  {
    question:
      "What is the time complexity of searching for an element in a linked list?",
    a: "O(1)",
    b: "O(log n)",
    c: "O(n)",
    d: "O(n^2)",
    correct: "c",
  },
  {
    question: "What is a doubly linked list?",
    a: "A linked list where each node points to the previous and next nodes",
    b: "A linked list where each node points to the next node only",
    c: "A linked list where each node points to the previous node only",
    d: "A linked list where each node points to a random node",
    correct: "a",
  },
  {
    question: "What is a circular linked list?",
    a: "A linked list where each node points to the previous and next nodes",
    b: "A linked list where the last node points to the first node",
    c: "A linked list where each node points to the previous node only",
    d: "A linked list where each node points to a random node",
    correct: "b",
  },
  {
    question: "What is a tree?",
    a: "A data structure that allows data to be accessed randomly",
    b: "A data structure that allows data to be added and removed from both ends",
    c: "A data structure that organizes data in a hierarchical way",
    d: "A data structure that consists of a sequence of nodes, each pointing to the next",
    correct: "c",
  },
  {
    question: "What is a binary tree?",
    a: "A tree where each node has up to two children",
    b: "A tree where each node has up to three children",
    c: "A tree where each node has an unlimited number of children",
    d: "A tree where each node points to the previous and next nodes",
    correct: "a",
  },
  {
    question: "What is a heap?",
    a: "A data structure that allows data to be accessed randomly",
    b: "A data structure that allows data to be added and removed from both ends",
    c: "A data structure that organizes data in a hierarchical way",
    d: "A data structure that consists of a sequence of nodes, each pointing to the next",
    correct: "c",
  },
  {
    question: "What is a min heap?",
    a: "A heap where the root node has the minimum value",
    b: "A heap where the root node has the maximum value",
    c: "A heap where each node has up to two children",
    d: "A heap where each node has an unlimited number of children",
    correct: "a",
  },
  {
    question: "What is a max heap?",
    a: "A heap where the root node has the maximum value",
    b: "A heap where the root node has the minimum value",
    c: "A heap where each node has up to two children",
    d: "A heap where each node has an unlimited number of children",
    correct: "a",
  },
  {
    question: "What is a stack?",
    a: "A data structure that allows data to be accessed randomly",
    b: "A data structure that allows data to be added and removed from both ends",
    c: "A data structure that organizes data in a hierarchical way",
    d: "A data structure that follows the Last In First Out (LIFO) principle",
    correct: "d",
  },
  {
    question: "What is the time complexity of adding an element to a stack?",
    a: "O(1)",
    b: "O(log n)",
    c: "O(n)",
    d: "O(n^2)",
    correct: "a",
  },
  {
    question: "What is a queue?",
    a: "A data structure that allows data to be accessed randomly",
    b: "A data structure that allows data to be added and removed from both ends",
    c: "A data structure that organizes data in a hierarchical way",
    d: "A data structure that follows the First In First Out (FIFO) principle",
    correct: "d",
  },
  {
    question: "What is the time complexity of adding an element to a queue?",
    a: "O(1)",
    b: "O(log n)",
    c: "O(n)",
    d: "O(n^2)",
    correct: "a",
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
    question: "What is a weighted graph?",
    a: "A graph where each edge has a weight or cost",
    b: "A graph where all edges have the same weight",
    c: "A graph with no edges",
    d: "A graph with no vertices",
    correct: "a",
  },
  {
    question: "What is a directed graph?",
    a: "A graph where each edge has a direction associated with it",
    b: "A graph where each edge has no direction associated with it",
    c: "A graph where all nodes have the same value",
    d: "A graph where each node has a reference to both its previous and next nodes",
    correct: "a",
  },
  {
    question: "What is a weighted graph?",
    a: "A graph where each edge has no direction associated with it",
    b: "A graph where each edge has a weight associated with it",
    c: "A graph where all nodes have the same value",
    d: "A graph where each node has a reference to both its previous and next nodes",
    correct: "b",
  },
  {
    question: "What is a minimum spanning tree?",
    a: "A tree where the distance between any two nodes is minimized",
    b: "A tree where the total weight of all edges is minimized",
    c: "A tree where all nodes have the same value",
    d: "A tree where each node has a reference to both its previous and next nodes",
    correct: "b",
  },
  {
    question: "What is a depth-first search?",
    a: "A search algorithm that explores the breadth of a graph before its depth",
    b: "A search algorithm that explores the depth of a graph before its breadth",
    c: "A search algorithm that maintains a sorted order",
    d: "A type of sorting algorithm",
    correct: "b",
  },
  {
    question: "What is a breadth-first search?",
    a: "A search algorithm that explores the breadth of a graph before its depth",
    b: "A search algorithm that explores the depth of a graph before its breadth",
    c: "A search algorithm that maintains a sorted order",
    d: "A type of sorting algorithm",
    correct: "a",
  },
  {
    question: "What is a cycle in a graph?",
    a: "A path that begins and ends at the same node",
    b: "A path that visits every node in the graph exactly once",
    c: "A path that visits every node in the graph at least once",
    d: "A path that visits the same node twice or more",
    correct: "d",
  },
  {
    question: "What is a spanning tree?",
    a: "A tree that includes all nodes in the graph",
    b: "A tree that includes a subset of nodes in the graph",
    c: "A tree that includes only the root node",
    d: "A tree that includes no nodes",
    correct: "a",
  },
  {
    question: "What is an adjacency matrix?",
    a: "A data structure that represents a graph using a two-dimensional array",
    b: "A data structure that represents a graph using a linked list",
    c: "A data structure used to represent a binary tree",
    d: "A data structure used to represent a trie",
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
