const quizData = [
  {
    question: "Which command is used to display the operating system name?",
    a: "os",
    b: "unix",
    c: "kernel",
    d: "uname",
    correct: "d",
  },
  {
    question: "Which command is used to display the unix version",
    a: "uname -r",
    b: "uname -n",
    c: "uname -t",
    d: "kernel",
    correct: "a",
  },
  {
    question: "Which command is used to print a file",
    a: "print",
    b: "ptr",
    c: "lpr",
    d: "none of the mentioned",
    correct: "c",
  },
  {
    question: "Which command is used to view compressed text file contents",
    a: "zcat",
    b: "type",
    c: "cat",
    d: "print",
    correct: "a",
  },
  {
    question: "Which command is used to extract a column from a text file",
    a: "paste",
    b: "tar",
    c: "get",
    d: "cut",
    correct: "d",
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
    question: "Which command is used to identify file type?",
    a: "Type",
    b: "Finfo",
    c: "File",
    d: "Info",
    correct: "c",
  },
  {
    question: "Which of the following command output contains userid?",
    a: "ls",
    b: "help",
    c: "date",
    d: "ls –l",
    correct: "d",
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
    question: "What is Linux?",
    a: "A programming language",
    b: "A hardware component",
    c: "An operating system",
    d: "A text editor",
    correct: "c",
  },
  {
    question: "Who created Linux?",
    a: "Bill Gates",
    b: "Linus Torvalds",
    c: "Steve Jobs",
    d: "Mark Zuckerberg",
    correct: "b",
  },
  {
    question: "What is the Linux kernel?",
    a: "The core component of the operating system",
    b: "A type of file system",
    c: "The user interface",
    d: "A web browser",
    correct: "a",
  },
  {
    question: "What is a distribution in Linux?",
    a: "A type of hardware component",
    b: "A variant of the Linux operating system",
    c: "A type of file system",
    d: "A programming language",
    correct: "b",
  },
  {
    question: "Which of the following is not a Linux distribution?",
    a: "Ubuntu",
    b: "Fedora",
    c: "Windows",
    d: "Debian",
    correct: "c",
  },
  {
    question: "What is the Bash shell?",
    a: "A type of Linux distribution",
    b: "A hardware component",
    c: "A programming language",
    d: "A command-line interface",
    correct: "d",
  },
  {
    question: "What is a package manager in Linux?",
    a: "A tool for managing software installation and updates",
    b: "A type of hardware component",
    c: "A programming language",
    d: "A web browser",
    correct: "a",
  },
  {
    question: "What is a terminal emulator in Linux?",
    a: "A type of hardware component",
    b: "A tool for managing software installation and updates",
    c: "A program that emulates a terminal",
    d: "A type of file system",
    correct: "c",
  },
  {
    question: "What is a command in Linux?",
    a: "A type of hardware component",
    b: "A program that interacts with the user",
    c: "A tool for managing software installation and updates",
    d: "A programming language",
    correct: "b",
  },
  {
    question: "What is a shell script in Linux?",
    a: "A program that runs on the hardware",
    b: "A programming language",
    c: "A tool for managing software installation and updates",
    d: "A script that runs in the Bash shell",
    correct: "d",
  },
  {
    question: "What is a process in Linux?",
    a: "A type of hardware component",
    b: "A program that runs on the operating system",
    c: "A tool for managing software installation and updates",
    d: "A programming language",
    correct: "b",
  },
  {
    question: "What is a daemon in Linux?",
    a: "A program that runs in the Bash shell",
    b: "A tool for managing software installation and updates",
    c: "A type of hardware component",
    d: "A program that runs in the background",
    correct: "d",
  },
  {
    question: "What is a symbolic link in Linux?",
    a: "A shortcut to a file or directory",
    b: "A type of hardware component",
    c: "A tool for managing software installation and updates",
    d: "A programming language",
    correct: "a",
  },
  {
    question: "What is a permission in Linux?",
    a: "A tool for managing software installation and updates",
    b: "A set of rules that determine who can access a file or directory and what they can do with it",
    c: "A type of hardware component",
    d: "A program that interacts with the user",
    correct: "b",
  },
  {
    question: "What is the root user in Linux?",
    a: "The first user to be created on the system",
    b: "The user who has complete control over the system",
    c: "The user who is responsible for maintaining the system",
    d: "The user who is responsible for creating and managing user accounts",
    correct: "b",
  },
  {
    question: "What is a runlevel in Linux?",
    a: "A type of file system",
    b: "A state of the operating system that determines which services are running",
    c: "A tool for managing software installation and updates",
    d: "A program that interacts with the user",
    correct: "b",
  },
  {
    question: "What is a cron job in Linux?",
    a: "A type of hardware component",
    b: "A program that interacts with the user",
    c: "A tool for managing software installation and updates",
    d: "A scheduled task that runs automatically at specified intervals",
    correct: "d",
  },
  {
    question: "What is the grep command in Linux used for?",
    a: "Finding and replacing text in a file",
    b: "Displaying the contents of a file",
    c: "Listing the files in a directory",
    d: "Searching for a specific pattern in a file or set of files",
    correct: "d",
  },
  {
    question: "What is the top command in Linux used for?",
    a: "Viewing and managing processes that are running on the system",
    b: "Creating and editing files",
    c: "Managing software packages",
    d: "Interacting with the user",
    correct: "a",
  },
  {
    question: "What is the sudo command in Linux used for?",
    a: "Changing the current working directory",
    b: "Viewing and editing files",
    c: "Switching to a different user account",
    d: "Running a command as the superuser or another user with elevated privileges",
    correct: "d",
  },
  {
    question: "What is the tar command in Linux used for?",
    a: "Displaying the contents of a file",
    b: "Managing software packages",
    c: "Creating and extracting compressed archives",
    d: "Interacting with the user",
    correct: "c",
  },
  {
    question: "What is the chmod command in Linux used for?",
    a: "Changing the owner of a file",
    b: "Viewing and editing files",
    c: "Changing the permissions of a file or directory",
    d: "Creating and managing user accounts",
    correct: "c",
  },
  {
    question: "What is a process in Linux?",
    a: "A program in execution",
    b: "A tool for managing software installation and updates",
    c: "A type of hardware component",
    d: "A file system",
    correct: "a",
    },
    {
    question: "What is the ps command in Linux used for?",
    a: "Managing software packages",
    b: "Viewing and editing files",
    c: "Displaying information about running processes",
    d: "Interacting with the user",
    correct: "c",
    },
    {
    question: "What is the kill command in Linux used for?",
    a: "Stopping a running process",
    b: "Editing a file",
    c: "Displaying the contents of a file",
    d: "Managing software packages",
    correct: "a",
    },
    {
    question: "What is a shell in Linux?",
    a: "A type of hardware component",
    b: "A program that interacts with the user",
    c: "A command-line interpreter",
    d: "A tool for managing software installation and updates",
    correct: "c",
    },
    {
    question: "What is the ls command in Linux used for?",
    a: "Managing software packages",
    b: "Viewing and editing files",
    c: "Displaying the contents of a file",
    d: "Listing the files and directories in a directory",
    correct: "d",
    },
    {
    question: "What is the cd command in Linux used for?",
    a: "Viewing and editing files",
    b: "Managing software packages",
    c: "Changing the current working directory",
    d: "Interacting with the user",
    correct: "c",
    },
    {
    question: "What is the mkdir command in Linux used for?",
    a: "Creating a new file",
    b: "Managing software packages",
    c: "Creating a new directory",
    d: "Interacting with the user",
    correct: "c",
    },
    {
    question: "What is the rmdir command in Linux used for?",
    a: "Removing a file",
    b: "Managing software packages",
    c: "Removing an empty directory",
    d: "Interacting with the user",
    correct: "c",
    },
    {
    question: "What is the touch command in Linux used for?",
    a: "Creating a new file",
    b: "Managing software packages",
    c: "Editing an existing file",
    d: "Interacting with the user",
    correct: "a",
    },
    {
    question: "What is the cat command in Linux used for?",
    a: "Managing software packages",
    b: "Viewing the contents of a file",
    c: "Editing a file",
    d: "Interacting with the user",
    correct: "b",
    },
    {
    question: "What is the cp command in Linux used for?",
    a: "Moving a file",
    b: "Copying a file",
    c: "Removing a file",
    d: "Managing software packages",
    correct: "b",
    },
    {
    question: "What is the mv command in Linux used for?",
    a: "Copying a file",
    b: "Moving a file",
    c: "Removing a file",
    d: "Managing software packages",
    correct: "b",
    },
    {
        question: "What is the tar command in Linux used for?",
        a: "Archiving files",
        b: "Managing software packages",
        c: "Viewing and editing files",
        d: "Interacting with the user",
        correct: "a",
        },
        {
        question: "What is the gzip command in Linux used for?",
        a: "Compressing files",
        b: "Managing software packages",
        c: "Viewing and editing files",
        d: "Interacting with the user",
        correct: "a",
        },
        {
        question: "What is the grep command in Linux used for?",
        a: "Viewing and editing files",
        b: "Searching for a pattern in a file",
        c: "Managing software packages",
        d: "Interacting with the user",
        correct: "b",
        },
        {
        question: "What is the find command in Linux used for?",
        a: "Viewing and editing files",
        b: "Searching for a file or directory",
        c: "Managing software packages",
        d: "Interacting with the user",
        correct: "b",
        },
        {
        question: "What is the chmod command in Linux used for?",
        a: "Changing the ownership of a file or directory",
        b: "Changing the permissions of a file or directory",
        c: "Managing software packages",
        d: "Interacting with the user",
        correct: "b",
        },
        {
        question: "What is the chown command in Linux used for?",
        a: "Changing the permissions of a file or directory",
        b: "Changing the ownership of a file or directory",
        c: "Managing software packages",
        d: "Interacting with the user",
        correct: "b",
        },
        {
        question: "What is the sudo command in Linux used for?",
        a: "Switching to the root user",
        b: "Managing software packages",
        c: "Editing a file",
        d: "Running a command with administrative privileges",
        correct: "d",
        },
        {
        question: "What is the apt command in Linux used for?",
        a: "Viewing and editing files",
        b: "Managing software packages",
        c: "Interacting with the user",
        d: "Searching for a file or directory",
        correct: "b",
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
