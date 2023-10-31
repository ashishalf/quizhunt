const quizData = [
  {
    question: "What is computer architecture?",
    a: "set of categories and methods that specify the functioning, organisation, and implementation of computer systems",
    b: "set of principles and methods that specify the functioning, organisation, and implementation of computer systems",
    c: "set of functions and methods that specify the functioning, organisation, and implementation of computer systems",
    d: "None of the mentioned",
    correct: "b",
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
    question: "Which of the following is a type of computer architecture?",
    a: "Microarchitecture",
    b: "Harvard Architecture",
    c: "Von-Neumann Architecture",
    d: "All of the mentioned",
    correct: "d",
  },
  {
    question:
      "Which of the following is a type of architecture used in the computers nowadays?",
    a: "Microarchitecture",
    b: "Harvard Architecture",
    c: "Von-Neumann Architecture",
    d: "System Design",
    correct: "c",
  },
  {
    question: "What does ISO stands for?",
    a: "International Software Organisation",
    b: "Industrial Software Organisation",
    c: "International Standards Organisation",
    d: "Industrial Standards Organisation",
    correct: "c",
  },
  {
    question: "A source program is usually in _______",
    a: "Assembly language",
    b: " Machine level language",
    c: "High-level language",
    d: "Natural language",
    correct: "c",
  },
  {
    question: "Which memory device is generally made of semiconductors?",
    a: "RAM",
    b: "Hard-disk",
    c: "Floppy disk",
    d: "Cd disk",
    correct: "a",
  },
  {
    question: "The small extremely fast, RAM’s are called as _______",
    a: "Cache",
    b: "Heaps",
    c: "Accumulators",
    d: "Stacks",
    correct: "a",
  },
  {
    question:
      "During the execution of the instructions, a copy of the instructions is placed in the ______",
    a: "Register",
    b: "RAM",
    c: "System heap",
    d: "Cache",
    correct: "d",
  },
  {
    question: "The ultimate goal of a compiler is to ________",
    a: "Reduce the clock cycles for a programming task",
    b: "Reduce the size of the object code",
    c: " Be versatile",
    d: "Be able to detect even the smallest of errors",
    correct: "a",
  },
  {
    question: "What is the purpose of the control unit in a CPU?",
    a: "To perform arithmetic and logical operations.",
    b: "To manage the flow of data within the CPU.",
    c: "To store data and instructions temporarily.",
    d: "To store data and instructions permanently.",
    correct: "b",
  },
  {
    question: "What is the purpose of the ALU in a CPU?",
    a: "To perform arithmetic and logical operations.",
    b: "To manage the flow of data within the CPU.",
    c: "To store data and instructions temporarily.",
    d: "To store data and instructions permanently.",
    correct: "a",
  },
  {
    question: "What is cache memory?",
    a: "A type of non-volatile memory.",
    b: "A type of volatile memory.",
    c: "A type of secondary storage.",
    d: "A type of memory that is faster than main memory and is used to temporarily store frequently accessed data.",
    correct: "d",
  },
  {
    question: "What is pipelining?",
    a: "A technique that allows multiple instructions to be executed simultaneously.",
    b: "A technique that allows a single instruction to be executed in multiple stages.",
    c: "A technique that allows multiple CPUs to work together to execute instructions.",
    d: "A technique that allows multiple programs to run on a single CPU.",
    correct: "b",
  },
  {
    question: "What is a bus in computer architecture?",
    a: "A type of processor.",
    b: "A type of storage device.",
    c: "A type of memory.",
    d: "A group of wires that are used to transfer data between different components of a computer.",
    correct: "d",
  },
  {
    question: "What is the purpose of an instruction set?",
    a: "To define the operations that a CPU can perform.",
    b: "To define the format of data that a CPU can process.",
    c: "To define the memory hierarchy of a computer system.",
    d: "To define the bus structure of a computer system.",
    correct: "a",
  },
  {
    question: "What is the purpose of a memory controller?",
    a: "To manage the flow of data between the CPU and main memory.",
    b: "To manage the flow of data between the CPU and secondary storage.",
    c: "To manage the flow of data between different components of the CPU.",
    d: "To manage the flow of data between different CPUs in a computer system.",
    correct: "a",
  },
  {
    question: "What is virtual memory?",
    a: "A type of memory that is physically present in a computer.",
    b: "A type of memory that is only accessible through a network connection.",
    c: "A type of memory that allows a computer to use secondary storage as if it were main memory.",
    d: "A type of memory that is shared between multiple computers in a cluster.",
    correct: "c",
  },
  {
    question: "What is the purpose of the system clock in a computer system?",
    a: "To synchronize the operations of different components of the system.",
    b: "To measure the performance of the system.",
    c: "To store data and instructions temporarily.",
    d: "To store data and instructions permanently.",
    correct: "a",
  },
  {
    question: "What is the difference between cache memory and main memory?",
    a: "Cache memory is faster but smaller than main memory.",
    b: "Cache memory is slower but larger than main memory.",
    c: "Cache memory and main memory are the same thing.",
    d: "None of the above.",
    correct: "a",
  },
  {
    question: "What is a superscalar processor?",
    a: "A processor that can execute multiple instructions simultaneously.",
    b: "A processor that can execute only one instruction at a time.",
    c: "A processor that can execute instructions out of order.",
    d: "A processor that can execute instructions in order only.",
    correct: "a",
  },
  {
    question: "What is the purpose of an interrupt?",
    a: "To allow a device to signal the CPU that it requires attention.",
    b: "To allow the CPU to signal a device that it requires attention.",
    c: "To allow a device to directly access memory without going through the CPU.",
    d: "To allow the CPU to directly access memory without going through the system bus.",
    correct: "a",
  },
  {
    question:
      "What is the difference between a register and a memory location?",
    a: "A register is faster but smaller than a memory location.",
    b: "A register is slower but larger than a memory location.",
    c: "A register and a memory location are the same thing.",
    d: "None of the above.",
    correct: "a",
  },
  {
    question: "What is the purpose of the control unit in a CPU?",
    a: "To fetch instructions from memory and execute them.",
    b: "To perform arithmetic and logic operations on data.",
    c: "To manage the flow of data between the CPU and other components of the system.",
    d: "To manage the flow of instructions within the CPU.",
    correct: "d",
  },
  {
    question:
      "What is the difference between virtual memory and physical memory?",
    a: "Virtual memory is larger but slower than physical memory.",
    b: "Virtual memory is smaller but faster than physical memory.",
    c: "Virtual memory and physical memory are the same thing.",
    d: "None of the above.",
    correct: "a",
  },
  {
    question: "What is the purpose of an assembler?",
    a: "To convert assembly language code into machine code.",
    b: "To convert high-level language code into machine code.",
    c: "To convert machine code into assembly language code.",
    d: "To convert machine code into high-level language code.",
    correct: "a",
  },
  {
    question: "What is the purpose of a linker?",
    a: "To combine object files into a single executable file.",
    b: "To convert source code into object code.",
    c: "To convert object code into machine code.",
    d: "To optimize the code generated by the compiler.",
    correct: "a",
  },
  {
    question: "What is the purpose of a stack?",
    a: "To store temporary data and function call information.",
    b: "To store global variables.",
    c: "To store heap-allocated memory.",
    d: "To store code instructions.",
    correct: "a",
  },
  {
    question: "What is the purpose of the system bus?",
    a: "To transfer data between the CPU, memory, and I/O devices.",
    b: "To perform arithmetic and logic operations on data.",
    c: "To manage the flow of data within the CPU.",
    d: "To manage the flow of instructions within the CPU.",
    correct: "a",
  },
  {
    question: "What is the purpose of a memory controller?",
    a: "To manage the flow of data between the CPU and memory.",
    b: "To manage the flow of instructions within the CPU.",
    c: "To perform arithmetic and logic operations on data.",
    d: "To manage the flow of data between the CPU and I/O devices.",
    correct: "a",
  },
  {
    question: "What is the purpose of a cache?",
    a: "To improve memory access times by storing frequently accessed data closer to the CPU.",
    b: "To improve CPU performance by executing multiple instructions simultaneously.",
    c: "To store program instructions and data.",
    d: "To manage the flow of data within the CPU.",
    correct: "a",
  },
  {
    question: "What is the purpose of a TLB?",
    a: "To improve memory access times by caching page table entries.",
    b: "To manage the flow of data within the CPU.",
    c: "To store program instructions and data.",
    d: "To manage the flow of instructions within the CPU.",
    correct: "a",
  },
  {
    question: "What is the purpose of a memory controller?",
    a: "To manage the flow of data between the CPU and memory.",
    b: "To execute multiple instructions simultaneously.",
    c: "To store program instructions and data.",
    d: "To manage the flow of instructions within the CPU.",
    correct: "a",
  },
  {
    question: "What is the difference between a static and dynamic RAM?",
    a: "Static RAM uses latches to store data, while dynamic RAM uses capacitors.",
    b: "Dynamic RAM uses latches to store data, while static RAM uses capacitors.",
    c: "Static and dynamic RAM are the same thing.",
    d: "None of the above.",
    correct: "a",
  },
  {
    question: "What is the purpose of a control signal?",
    a: "To control the flow of data within the CPU.",
    b: "To execute multiple instructions simultaneously.",
    c: "To store program instructions and data.",
    d: "To manage the flow of instructions within the CPU.",
    correct: "a",
  },
  {
    question: "What is the purpose of a clock signal?",
    a: "To synchronize the operations of the CPU and other components in the computer.",
    b: "To execute multiple instructions simultaneously.",
    c: "To store program instructions and data.",
    d: "To manage the flow of instructions within the CPU.",
    correct: "a",
  },
  {
    question: "What is the purpose of the Arithmetic and Logic Unit (ALU)?",
    a: "To perform arithmetic and logical operations on data.",
    b: "To store program instructions and data.",
    c: "To manage the flow of instructions within the CPU.",
    d: "To synchronize the operations of the CPU and other components in the computer.",
    correct: "a",
  },
  {
    question: "What is the purpose of the Control Unit (CU)?",
    a: "To fetch instructions from memory, decode them, and execute them.",
    b: "To perform arithmetic and logical operations on data.",
    c: "To store program instructions and data.",
    d: "To manage the flow of instructions within the CPU.",
    correct: "a",
  },
  {
    question: "What is the clock speed of a CPU?",
    a: "The number of instructions the CPU can execute per second.",
    b: "The amount of memory the CPU can access at once.",
    c: "The temperature at which the CPU operates.",
    d: "The size of the CPU's cache.",
    correct: "a",
  },
  {
    question:
      "What is the difference between a hard disk drive (HDD) and a solid-state drive (SSD)?",
    a: "HDDs use spinning disks to store data, while SSDs use flash memory.",
    b: "SSDs use spinning disks to store data, while HDDs use flash memory.",
    c: "HDDs and SSDs are the same thing.",
    d: "None of the above.",
    correct: "a",
  },
  {
    question: "What is the purpose of an arithmetic logic unit (ALU) in a CPU?",
    a: "To perform arithmetic and logical operations on data.",
    b: "To store program instructions and data.",
    c: "To manage the flow of instructions within the CPU.",
    d: "To temporarily store data and instructions that are currently being processed by the CPU.",
    correct: "a",
  },
  {
    question: "What is the purpose of a memory controller?",
    a: "To manage the flow of data between a CPU and main memory.",
    b: "To manage the flow of data between different components in a computer.",
    c: "To perform arithmetic and logical operations on data.",
    d: "To provide an interface between software and hardware.",
    correct: "a",
  },
  {
    question: "What is pipelining in computer architecture?",
    a: "A technique used to allow multiple instructions to be processed simultaneously.",
    b: "A type of memory used to store frequently accessed data.",
    c: "A device used to control the flow of electricity in a computer.",
    d: "A type of bus used to connect different components in a computer.",
    correct: "a",
  },
  {
    question: "What is the purpose of a stack in computer architecture?",
    a: "To store data and return addresses during function calls and other program operations.",
    b: "To provide an interface between software and hardware.",
    c: "To manage the flow of instructions within the CPU.",
    d: "To perform arithmetic and logical operations on data.",
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
