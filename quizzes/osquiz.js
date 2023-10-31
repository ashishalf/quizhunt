const quizData = [
  {
    question: "What is an operating system?",
    a: "A set of programs that helps manage the resources of a computer",
    b: "A set of hardware components that make up a computer",
    c: "A set of input/output devices that allow users to interact with a computer",
    d: "A set of applications that run on a computer",
    correct: "a",
  },
  {
    question: "What are the two main functions of an operating system?",
    a: "To provide a user interface and to manage hardware resources",
    b: "To provide security and to manage software applications",
    c: "To provide networking capabilities and to manage storage",
    d: "To provide entertainment and to manage user preferences",
    correct: "a",
  },
  {
    question: "What is a process?",
    a: "A program in execution",
    b: "A file on the hard drive",
    c: "A type of hardware component",
    d: "A type of software application",
    correct: "a",
  },
  {
    question: "What is a thread?",
    a: "A small unit of a process that can be scheduled independently",
    b: "A type of input/output device",
    c: "A type of storage device",
    d: "A type of network protocol",
    correct: "a",
  },
  {
    question: "What is a kernel?",
    a: "The central component of an operating system that manages resources",
    b: "A type of input device",
    c: "A type of output device",
    d: "A type of software application",
    correct: "a",
  },
  {
    question: "What is virtual memory?",
    a: "A technique that allows a computer to use more memory than it physically has available",
    b: "A type of network protocol",
    c: "A type of input device",
    d: "A type of output device",
    correct: "a",
  },
  {
    question: "What is a file system?",
    a: "A method of organizing and storing files on a computer",
    b: "A type of hardware component",
    c: "A type of software application",
    d: "A type of network protocol",
    correct: "a",
  },
  {
    question: "What is a device driver?",
    a: "A program that allows a computer to communicate with hardware devices",
    b: "A type of hardware component",
    c: "A type of software application",
    d: "A type of network protocol",
    correct: "a",
  },
  {
    question: "What is a system call?",
    a: "A request made by a program to the operating system for a specific operation to be performed",
    b: "A type of hardware component",
    c: "A type of software application",
    d: "A type of network protocol",
    correct: "a",
  },
  {
    question: "What is a semaphore?",
    a: "A synchronization object used to protect shared resources",
    b: "A type of input/output device",
    c: "A type of storage device",
    d: "A type of network protocol",
    correct: "a",
  },
  {
    question: "What is a deadlock?",
    a: "A situation in which two or more processes are unable to continue executing.",
    b: "A type of hardware component",
    c: "A type of software application",
    d: "A type of network protocol",
    correct: "a",
  },
  {
    question: "What is a context switch?",
    a: "The process of saving the current state of a process and restoring the state of another process",
    b: "A type of network protocol",
    c: "A type of software application",
    d: "A type of hardware component",
    correct: "a",
  },
  {
    question: "What is a scheduler?",
    a: "A component of an operating system that decides which processes should run at a given time",
    b: "A type of hardware component",
    c: "A type of software application",
    d: "A type of network protocol",
    correct: "a",
  },
  {
    question: "What is a page fault?",
    a: "A situation in which a program tries to access a page of memory that is not currently in physical memory",
    b: "A type of hardware component",
    c: "A type of software application",
    d: "A type of network protocol",
    correct: "a",
  },
  {
    question: "What is a fork?",
    a: "A system call that creates a new process by duplicating the calling process",
    b: "A type of hardware component",
    c: "A type of software application",
    d: "A type of network protocol",
    correct: "a",
  },
  {
    question: "What is a deadlock avoidance strategy?",
    a: "A technique used to prevent deadlocks by preventing one of the necessary conditions from occurring",
    b: "A type of hardware component",
    c: "A type of software application",
    d: "A type of network protocol",
    correct: "a",
  },
  {
    question: "What is the primary function of an operating system?",
    a: "Management",
    b: "Processing",
    c: "Storage",
    d: "Networking",
    correct: "a",
  },
  {
    question:
      "What is the most common type of scheduling algorithm used by operating systems?",
    a: "Round-robin",
    b: "Priority",
    c: "FCFS",
    d: "SJF",
    correct: "a",
  },
  {
    question:
      "What is the name of the file system used by most Linux distributions?",
    a: "EXT4",
    b: "NTFS",
    c: "FAT32",
    d: "HFS+",
    correct: "a",
  },
  {
    question:
      "What is the name of the Windows command-line utility used to manage disks and volumes?",
    a: "DiskPart",
    b: "DiskManager",
    c: "PartitionMagic",
    d: "DriveDoctor",
    correct: "a",
  },
  {
    question:
      "What is the name of the UNIX command used to list the contents of a directory?",
    a: "ls",
    b: "dir",
    c: "cd",
    d: "pwd",
    correct: "a",
  },
  {
    question:
      "What is the name of the process of converting a virtual address to a physical address?",
    a: "Address translation",
    b: "Memory allocation",
    c: "Page swapping",
    d: "Process scheduling",
    correct: "a",
  },
  {
    question:
      "What is the name of the command used to terminate a process in UNIX?",
    a: "kill",
    b: "end",
    c: "stop",
    d: "exit",
    correct: "a",
  },
  {
    question:
      "What is the name of the Windows utility used to manage startup programs?",
    a: "Msconfig",
    b: "TaskManager",
    c: "RegistryEditor",
    d: "DiskCleanup",
    correct: "a",
  },
  {
    question:
      "What is the name of the process of copying data from main memory to disk?",
    a: "Swapping",
    b: "Paging",
    c: "Caching",
    d: "Buffering",
    correct: "a",
  },
  {
    question:
      "What is the name of the process of copying data from disk to main memory?",
    a: "Page fault",
    b: "Cache hit",
    c: "Swapping",
    d: "Buffering",
    correct: "a",
  },
  {
    question: "What is the name of the UNIX command used to change the owner of a file?",
    a: "chown",
    b: "chmod",
    c: "chgrp",
    d: "chroot",
    correct: "a",
    },
    {
    question: "What is the name of the Windows utility used to view system information?",
    a: "SystemProperties",
    b: "SystemConfiguration",
    c: "TaskManager",
    d: "DeviceManager",
    correct: "a",
    },
    {
    question: "What is the name of the process of allocating memory to a process?",
    a: "Memory management",
    b: "Address translation",
    c: "Page swapping",
    d: "Process scheduling",
    correct: "a",
    },
    {
    question: "What is the name of the Windows utility used to defragment a disk?",
    a: "Defrag",
    b: "DiskCleanup",
    c: "DiskManager",
    d: "DiskPart",
    correct: "a",
    },
    {
    question: "What is the name of the UNIX command used to search for files in a directory hierarchy?",
    a: "find",
    b: "grep",
    c: "locate",
    d: "whereis",
    correct: "a",
    },
    {
    question: "What is the name of the process of protecting a process from other processes?",
    a: "Process isolation",
    b: "Process synchronization",
    c: "Process communication",
    d: "Process scheduling",
    correct: "a",
    },
    {
    question: "What is the name of the process of executing multiple tasks simultaneously?",
    a: "Multitasking",
    b: "Multiprocessing",
    c: "Parallel processing",
    d: "Distributed processing",
    correct: "a",
    },
    {
    question: "What is the name of the Windows utility used to scan for and repair disk errors?",
    a: "chkdsk",
    b: "Defrag",
    c: "DiskCleanup",
    d: "DiskPart",
    correct: "a",
    },
    {
    question: "What is the name of the UNIX command used to change the permissions of a file?",
    a: "chmod",
    b: "chown",
    c: "chgrp",
    d: "chroot",
    correct: "a",
    },
    {
    question: "What is the name of the process of dividing memory into fixed-size partitions?",
    a: "Fixed partitioning",
    b: "Dynamic partitioning",
    c: "Paging",
    d: "Swapping",
    correct: "a",
    },
    {
        question: "What is the name of the process of allocating CPU time to a process?",
        a: "Process scheduling",
        b: "Process synchronization",
        c: "Process communication",
        d: "Process isolation",
        correct: "a",
        },
        {
        question: "What is the name of the Windows utility used to view and manage running processes?",
        a: "Task Manager",
        b: "Device Manager",
        c: "System Configuration",
        d: "System Properties",
        correct: "a",
        },
        {
        question: "What is the name of the process of moving a process from main memory to disk?",
        a: "Swapping",
        b: "Paging",
        c: "Segmentation",
        d: "Fragmentation",
        correct: "a",
        },
        {
        question: "What is the name of the UNIX command used to create a new directory?",
        a: "mkdir",
        b: "rmdir",
        c: "cd",
        d: "ls",
        correct: "a",
        },
        {
        question: "What is the name of the process of dividing memory into variable-size partitions?",
        a: "Dynamic partitioning",
        b: "Fixed partitioning",
        c: "Paging",
        d: "Swapping",
        correct: "a",
        },
        {
        question: "What is the name of the process of preventing multiple processes from accessing shared resources simultaneously?",
        a: "Process synchronization",
        b: "Process isolation",
        c: "Process communication",
        d: "Process scheduling",
        correct: "a",
        },
        {
        question: "What is the name of the Windows utility used to manage disk partitions?",
        a: "Disk Management",
        b: "Defrag",
        c: "Disk Cleanup",
        d: "DiskPart",
        correct: "a",
        },
        {
        question: "What is the name of the process of mapping virtual addresses to physical addresses?",
        a: "Address translation",
        b: "Memory management",
        c: "Page swapping",
        d: "Process scheduling",
        correct: "a",
        },
        {
        question: "What is the name of the UNIX command used to display the contents of a file?",
        a: "cat",
        b: "grep",
        c: "sed",
        d: "awk",
        correct: "a",
        },
        {
        question: "What is the name of the process of executing multiple threads of the same process simultaneously?",
        a: "Multithreading",
        b: "Multiprocessing",
        c: "Parallel processing",
        d: "Distributed processing",
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
