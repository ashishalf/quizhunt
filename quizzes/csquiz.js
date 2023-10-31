const quizData = [
  {
    question: "What is Cyber Security?",
    a: "Cyber Security provides security against malware",
    b: "Cyber Security provides security against cyber-terrorists",
    c: "Cyber Security protects a system from cyber attacks",
    d: "All of the mentioned",
    correct: "d",
  },
  {
    question: "Which of the following is a type of cyber security?",
    a: "Cloud Security",
    b: "Network Security",
    c: "Application Security",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "Which of the following is a component of cyber security?",
    a: "Internet Of Things",
    b: "AI",
    c: "Database",
    d: "Attacks",
    correct: "a",
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
    question: "Which of the following is not an email-related hacking tool?",
    a: "Mail Password",
    b: "Email Finder Pro",
    c: "Mail PassView",
    d: "Sendinc",
    correct: "b",
  },
  {
    question: "What is the ethics behind training how to hack a system?",
    a: "To think like hackers and know how to defend such attacks",
    b: "To hack a system without the permission",
    c: "To hack a network that is vulnerable",
    d: "To corrupt software or service using malware",
    correct: "a",
  },
  {
    question:
      "An attacker may use automatic brute forcing tool to compromise your ____________",
    a: "username",
    b: "employee ID",
    c: "system / PC name",
    d: "password",
    correct: "d",
  },
  {
    question:
      "Which of the following is not a proper aspect of user integration?",
    a: "Employee’s authentication",
    b: "Physical authorization",
    c: "Access control",
    d: "Representing users in the database",
    correct: "b",
  },
  {
    question:
      "Which is the legal form of hacking based on which jobs are provided in IT industries and firms?",
    a: "Cracking",
    b: "Non ethical Hacking",
    c: "Ethical hacking",
    d: "Hactivism",
    correct: "c",
  },
  {
    question: "The full form of Malware is ________",
    a: "Malfunctioned Software",
    b: "Multipurpose Software",
    c: "Malicious Software",
    d: "Malfunctioning of Security",
    correct: "c",
  },
  {
    question: "What is the definition of cybersecurity?",
    a: "Protecting computer hardware from damage or theft",
    b: "Preventing unauthorized access to computer networks",
    c: "Ensuring software runs smoothly",
    d: "Improving the performance of computer systems",
    correct: "b",
  },
  {
    question: "What is a firewall?",
    a: "A physical barrier that blocks access to a computer system",
    b: "A piece of software that blocks unauthorized access to a computer network",
    c: "A program that speeds up computer processing",
    d: "A device that filters spam email",
    correct: "b",
  },
  {
    question: "What is the most common type of cyber attack?",
    a: "Malware",
    b: "Phishing",
    c: "DDoS",
    d: "SQL injection",
    correct: "b",
  },
  {
    question: "What is encryption?",
    a: "Hiding data within an image or video file",
    b: "Encoding data so that it can only be read by authorized parties",
    c: "Blocking access to a computer network",
    d: "Deleting data from a computer system",
    correct: "b",
  },
  {
    question: "What is a password manager?",
    a: "A tool for generating strong passwords",
    b: "A program for managing login credentials",
    c: "A service that stores passwords securely",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "What is two-factor authentication?",
    a: "A security measure that requires two passwords to access a system",
    b: "A process for verifying the identity of a user through two different methods",
    c: "A technique for encrypting data using two different algorithms",
    d: "A type of virus that infects computer systems through USB drives",
    correct: "b",
  },
  {
    question: "What is social engineering?",
    a: "Manipulating people into divulging confidential information",
    b: "A technique for encrypting data using social media networks",
    c: "A process for securing computer systems in public spaces",
    d: "A way of measuring the impact of cybersecurity attacks",
    correct: "a",
  },
  {
    question: "What is a VPN?",
    a: "A virtual private network that enables secure remote access to a computer network",
    b: "A virus protection program",
    c: "A device for controlling access to a computer system",
    d: "A tool for detecting cyber attacks",
    correct: "a",
  },
  {
    question: "What is a phishing attack?",
    a: "An attempt to steal passwords or other sensitive information through a fake website",
    b: "A type of malware that encrypts files and demands payment for their release",
    c: "A technique for slowing down computer systems",
    d: "A method for cracking password hashes",
    correct: "a",
  },
  {
    question: "What is ransomware?",
    a: "A type of malware that encrypts files and demands payment for their release",
    b: "A program for generating strong passwords",
    c: "A technique for slowing down computer systems",
    d: "A type of virus that spreads through email",
    correct: "a",
  },
  {
    question: "What is a vulnerability?",
    a: "A weakness in a computer system that can be exploited by attackers",
    b: "A type of malware that encrypts files and demands payment for their release",
    c: "A device that filters spam email",
    d: "A technique for securing computer networks",
    correct: "a",
  },
  {
    question: "What is a zero-day vulnerability?",
    a: "A vulnerability that has not yet been discovered by attackers",
    b: "A vulnerability that has been exploited for zero days",
    c: "A vulnerability that has been discovered but not yet fixed",
    d: "A vulnerability that only affects older computer systems",
    correct: "a",
  },
  {
    question: "What is a patch?",
    a: "A software update that fixes security vulnerabilities",
    b: "A tool for monitoring network traffic",
    c: "A type of malware that steals login credentials",
    d: "A device for filtering spam email",
    correct: "a",
  },
  {
    question: "What is the principle of least privilege?",
    a: "Limiting user access to only the resources they need to perform their job",
    b: "Granting users full administrative access to computer systems",
    c: "Allowing all users unrestricted access to computer resources",
    d: "Providing users with access to all network traffic",
    correct: "a",
  },
  {
    question: "What is a rootkit?",
    a: "A type of malware that provides attackers with backdoor access to a computer system",
    b: "A tool for detecting cyber attacks",
    c: "A device that filters spam email",
    d: "A program for generating strong passwords",
    correct: "a",
  },
  {
    question: "What is a Trojan horse?",
    a: "A type of malware disguised as legitimate software",
    b: "A program for managing login credentials",
    c: "A type of virus that spreads through email",
    d: "A tool for detecting cyber attacks",
    correct: "a",
  },
  {
    question: "What is a backdoor?",
    a: "A hidden entry point into a computer system that can be used by attackers",
    b: "A type of malware that encrypts files and demands payment for their release",
    c: "A device that filters spam email",
    d: "A tool for generating strong passwords",
    correct: "a",
  },
  {
    question: "What is a honeypot?",
    a: "A computer system designed to attract attackers",
    b: "A tool for monitoring network traffic",
    c: "A device that filters spam email",
    d: "A program for managing login credentials",
    correct: "a",
  },
  {
    question: "What is a buffer overflow?",
    a: "A vulnerability that allows attackers to execute code by overwriting memory",
    b: "A technique for slowing down computer systems",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
    correct: "a",
  },
  {
    question: "What is a man-in-the-middle attack?",
    a: "An attack where an attacker intercepts communication between two parties",
    b: "A type of virus that spreads through email",
    c: "A technique for slowing down computer systems",
    d: "A program for generating strong passwords",
    correct: "a",
  },
  {
    question: "What is two-factor authentication?",
    a: "A security method that requires users to provide two forms of identification to access a system",
    b: "A technique for encrypting data on a computer system",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
    correct: "a",
  },
  {
    question: "What is encryption?",
    a: "A method for encoding data to prevent unauthorized access",
    b: "A technique for slowing down computer systems",
    c: "A type of malware that encrypts files and demands payment for their release",
    d: "A tool for detecting cyber attacks",
    correct: "a",
  },
  {
    question: "What is a denial-of-service attack?",
    a: "An attack where an attacker floods a system with traffic to make it unavailable to users",
    b: "A technique for encrypting data on a computer system",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
    correct: "a",
  },
  {
    question: "What is social engineering?",
    a: "The use of psychological manipulation to trick users into divulging sensitive information",
    b: "A technique for encrypting data on a computer system",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
    correct: "a",
  },
  {
    question: "What is a firewall?",
    a: "A network security device that monitors and filters incoming and outgoing network traffic",
    b: "A type of malware that encrypts files and demands payment for their release",
    c: "A tool for detecting cyber attacks",
    d: "A program for generating strong passwords",
    correct: "a",
  },
  {
    question: "What is malware?",
    a: "Software designed to harm computer systems or steal sensitive information",
    b: "A technique for encrypting data on a computer system",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
    correct: "a",
  },
  {
    question: "What is phishing?",
    a: "A type of social engineering attack where attackers use fake websites or emails to trick users into revealing sensitive information",
    b: "A technique for encrypting data on a computer system",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
    correct: "a",
  },
  {
    question: "What is a VPN?",
    a: "A virtual private network that allows users to securely access a network over the internet",
    b: "A type of malware that encrypts files and demands payment for their release",
    c: "A tool for detecting cyber attacks",
    d: "A program for generating strong passwords",
    correct: "a",
  },
  {
    question: "What is a DMZ?",
    a: "A network segment that sits between the internet and an internal network",
    b: "A type of malware that encrypts files and demands payment for their release",
    c: "A tool for detecting cyber attacks",
    d: "A program for generating strong passwords",
    correct: "a",
  },
  {
    question: "What is a buffer overflow?",
    a: "A type of attack where an attacker sends more data than a program can handle, causing it to crash or execute arbitrary code",
    b: "A technique for encrypting data on a computer system",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
    correct: "a",
    },
    {
    question: "What is SQL injection?",
    a: "A type of attack where an attacker inserts malicious SQL statements into a web application's input fields to gain access to its database",
    b: "A technique for encrypting data on a computer system",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
    correct: "a",
    },
    {
    question: "What is a honeypot?",
    a: "A security mechanism designed to detect and deflect attacks by mimicking vulnerable systems",
    b: "A type of malware that encrypts files and demands payment for their release",
    c: "A tool for detecting cyber attacks",
    d: "A program for generating strong passwords",
    correct: "a",
    },
    {
    question: "What is a keylogger?",
    a: "A type of malware that records a user's keystrokes to steal sensitive information",
    b: "A technique for encrypting data on a computer system",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
    correct: "a",
    },
    {
    question: "What is steganography?",
    a: "The practice of concealing a message, file, or image within another message, file, or image",
    b: "A technique for encrypting data on a computer system",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
    correct: "a",
    },
    {
    question: "What is a man-in-the-middle attack?",
    a: "A type of attack where an attacker intercepts communications between two parties to steal information or alter the communication",
    b: "A technique for encrypting data on a computer system",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
    correct: "a",
    },
    {
    question: "What is a zero-day vulnerability?",
    a: "A vulnerability that is not known to the software vendor and has not been patched",
    b: "A technique for encrypting data on a computer system",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
    correct: "a",
    },
    {
    question: "What is multifactor authentication?",
    a: "A security method that requires users to provide more than one form of identification to access a system",
    b: "A technique for encrypting data on a computer system",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
    correct: "a",
    },
    {
    question: "What is the CIA triad?",
    a: "Confidentiality, integrity, and availability, the three core components of information security",
    b: "A technique for encrypting data on a computer system",
    c: "A type of virus that spreads through email",
    d: "A program for generating strong passwords",
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
