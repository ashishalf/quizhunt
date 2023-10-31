const quizData = [
  {
    question: "The structure or format of data is called ___________",
    a: "Syntax",
    b: "Semantics",
    c: "Struct",
    d: "Formatting",
    correct: "a",
  },
  {
    question:
      "Communication between a computer and a keyboard involves ______________ transmission.",
    a: "Automatic",
    b: "Half-duplex",
    c: "Full-duplex",
    d: "Simplex",
    correct: "d",
  },
  {
    question: "A _______ is the physical path over which a message travels.",
    a: "Path",
    b: "Medium",
    c: "Protocol",
    d: "Route",
    correct: "b",
  },
  {
    question: "Which of this is not a network edge device?",
    a: "PC",
    b: "Smartphones",
    c: "Servers",
    d: "Switch",
    correct: "d",
  },
  {
    question: "Three or more devices share a link in ________ connection.",
    a: "Unipoint",
    b: "Multipoint",
    c: "Point to point",
    d: "Simplex",
    correct: "b",
  },
  {
    question: "In computer network nodes are _________",
    a: "The computer that originates the data",
    b: "The computer that routes the data",
    c: "The computer that terminates the data",
    d: "All of the mentioned",
    correct: "d",
  },
  {
    question: "Bluetooth is an example of __________",
    a: "Personal area network",
    b: "Local area network",
    c: "Virtual private network",
    d: "Wide area network",
    correct: "a",
  },
  {
    question:
      "Which of the following networks extends a private network across public networks?",
    a: "Local area network",
    b: "Virtual private network",
    c: "Enterprise private network",
    d: "Storage area network",
    correct: "b",
  },
  {
    question:
      "Data communication system within a building or campus is________",
    a: "LAN",
    b: "WAN",
    c: "MAN",
    d: "PAN",
    correct: "a",
  },
  {
    question: "WAN stands for __________",
    a: "World area network",
    b: "Web access network",
    c: "Web area network",
    d: "Wide area network",
    correct: "d",
  },
  {
    question: "What is a computer network?",
    a: "A group of interconnected computers and devices",
    b: "A single computer system",
    c: "A physical location where computers are stored",
    d: "A type of computer software",
    correct: "a",
  },
  {
    question: "What is a LAN?",
    a: "Local Area Network",
    b: "Large Area Network",
    c: "Logical Access Network",
    d: "Logical Area Network",
    correct: "a",
  },
  {
    question: "What is a WAN?",
    a: "Wide Area Network",
    b: "Wireless Access Network",
    c: "Wireless Area Network",
    d: "Wide Access Network",
    correct: "a",
  },
  {
    question: "What is the purpose of a router in a network?",
    a: "To connect LANs and WANs",
    b: "To connect computers within a LAN",
    c: "To connect computers within a WAN",
    d: "To connect a computer to the internet",
    correct: "a",
  },
  {
    question: "What is a firewall?",
    a: "A security system that controls access to a network",
    b: "A software program that allows remote access to a network",
    c: "A device that connects LANs and WANs",
    d: "A type of computer virus",
    correct: "a",
  },
  {
    question: "What is TCP/IP?",
    a: "A protocol used to transfer files over the internet",
    b: "A networking protocol suite",
    c: "A type of computer hardware",
    d: "A type of computer software",
    correct: "b",
  },
  {
    question: "What is DNS?",
    a: "Domain Name System",
    b: "Dynamic Network System",
    c: "Digital Network Service",
    d: "Distributed Network Security",
    correct: "a",
  },
  {
    question: "What is a MAC address?",
    a: "Media Access Control address",
    b: "Machine Access Control address",
    c: "Memory Access Control address",
    d: "Mobile Access Control address",
    correct: "a",
  },
  {
    question: "What is DHCP?",
    a: "Dynamic Host Configuration Protocol",
    b: "Domain Host Configuration Protocol",
    c: "Digital Host Configuration Protocol",
    d: "Distributed Host Configuration Protocol",
    correct: "a",
  },
  {
    question: "What is a packet?",
    a: "A unit of data that is transmitted over a network",
    b: "A type of network cable",
    c: "A computer virus",
    d: "A type of computer hardware",
    correct: "a",
  },
  {
    question: "What is a protocol?",
    a: "A set of rules that governs communication between devices",
    b: "A type of computer software",
    c: "A type of network hardware",
    d: "A computer language",
    correct: "a",
  },
  {
    question: "What is bandwidth?",
    a: "The amount of data that can be transmitted over a network in a given period of time",
    b: "The amount of memory in a computer system",
    c: "The speed of a computer processor",
    d: "The size of a computer screen",
    correct: "a",
  },
  {
    question: "What is a subnet mask?",
    a: "A set of numbers that defines the network address and host address of an IP address",
    b: "A security feature that prevents unauthorized access to a network",
    c: "A type of computer virus",
    d: "A type of network hardware",
    correct: "a",
  },
  {
    question: "What is a proxy server?",
    a: "A server that acts as an intermediary between a client and another server",
    b: "A type of computer virus",
    c: "A type of computer software",
    d: "A type of network hardware",
    correct: "a",
  },
  {
    question: "What is a virtual private network (VPN)?",
    a: "A secure connection between two devices over a public network",
    b: "A type of network cable",
    c: "A type of computer hardware",
    d: "A type of computer software",
    correct: "a",
  },
  {
    question: "What is a wireless network?",
    a: "A network that uses radio waves to transmit data",
    b: "A network that uses fiber optic cables to transmit data",
    c: "A network that uses copper cables to transmit data",
    d: "A network that uses satellite technology to transmit data",
    correct: "a",
  },
  {
    question: "What is a domain name?",
    a: "A unique name that identifies a website",
    b: "A type of computer hardware",
    c: "A type of computer software",
    d: "A type of network cable",
    correct: "a",
  },
  {
    question: "What is a URL?",
    a: "Uniform Resource Locator",
    b: "Unified Remote Link",
    c: "Unique Resource Locator",
    d: "Universal Resource Link",
    correct: "a",
  },
  {
    question: "What is HTTP?",
    a: "Hypertext Transfer Protocol",
    b: "Hyperlink Transfer Protocol",
    c: "Hyperspeed Transfer Protocol",
    d: "Hyperdrive Transfer Protocol",
    correct: "a",
  },
  {
    question: "What is FTP?",
    a: "File Transfer Protocol",
    b: "Folder Transfer Protocol",
    c: "Fast Transfer Protocol",
    d: "File Transport Protocol",
    correct: "a",
  },
  {
    question: "What is SMTP?",
    a: "Simple Mail Transfer Protocol",
    b: "Secure Mail Transfer Protocol",
    c: "System Mail Transfer Protocol",
    d: "Social Mail Transfer Protocol",
    correct: "a",
  },
  {
    question: "What is POP?",
    a: "Post Office Protocol",
    b: "Point of Presence",
    c: "Packet over Protocol",
    d: "Phone over Protocol",
    correct: "a",
  },
  {
    question: "What is IMAP?",
    a: "Internet Message Access Protocol",
    b: "Instant Message Access Protocol",
    c: "Integrated Mail Access Protocol",
    d: "Internal Message Access Protocol",
    correct: "a",
  },
  {
    question: "What is VoIP?",
    a: "Voice over Internet Protocol",
    b: "Video over Internet Protocol",
    c: "Virtual over Internet Protocol",
    d: "Voltage over Internet Protocol",
    correct: "a",
  },
  {
    question: "What is a firewall?",
    a: "A security system that monitors and controls incoming and outgoing network traffic",
    b: "A type of network hardware",
    c: "A type of computer software",
    d: "A type of computer virus",
    correct: "a",
  },
  {
    question: "What is a router?",
    a: "A device that forwards data packets between computer networks",
    b: "A type of network cable",
    c: "A type of computer hardware",
    d: "A type of computer software",
    correct: "a",
  },
  {
    question: "What is a switch?",
    a: "A device that connects network segments",
    b: "A type of computer hardware",
    c: "A type of computer software",
    d: "A type of network cable",
    correct: "a",
  },
  {
    question: "What is a hub?",
    a: "A device that connects multiple devices together in a network",
    b: "A type of computer software",
    c: "A type of computer hardware",
    d: "A type of network cable",
    correct: "a",
  },
  {
    question: "What is DNS?",
    a: "Domain Name System",
    b: "Domain Name Server",
    c: "Domain Name Software",
    d: "Domain Name Security",
    correct: "a",
  },
  {
    question: "What is a packet?",
    a: "A unit of data that is transmitted over a network",
    b: "A type of computer hardware",
    c: "A type of network cable",
    d: "A type of computer software",
    correct: "a",
  },
  {
    question: "What is bandwidth?",
    a: "The amount of data that can be transmitted over a network in a given amount of time",
    b: "The speed at which data is transmitted over a network",
    c: "The distance between two network devices",
    d: "The number of devices connected to a network",
    correct: "a",
  },
  {
    question: "What is latency?",
    a: "The amount of time it takes for data to travel from one point to another on a network",
    b: "The amount of data that can be transmitted over a network in a given amount of time",
    c: "The speed at which data is transmitted over a network",
    d: "The distance between two network devices",
    correct: "a",
  },
  {
    question: "What is a MAC address?",
    a: "A unique identifier assigned to a network interface controller for use as a network address",
    b: "A type of computer virus",
    c: "A type of network cable",
    d: "A type of computer software",
    correct: "a",
  },
  {
    question: "What is an IP address?",
    a: "A numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication",
    b: "A type of computer hardware",
    c: "A type of computer software",
    d: "A type of network cable",
    correct: "a",
  },
  {
    question: "What is a gateway?",
    a: "A device that connects two networks together",
    b: "A type of computer software",
    c: "A type of computer hardware",
    d: "A type of network cable",
    correct: "a",
  },
  {
    question: "What is a protocol?",
    a: "A set of rules that governs the communication between devices on a network",
    b: "A type of computer software",
    c: "A type of computer hardware",
    d: "A type of network cable",
    correct: "a",
  },
  {
    question: "What is TCP?",
    a: "Transmission Control Protocol",
    b: "Transfer Control Protocol",
    c: "Transport Communication Protocol",
    d: "Transmission Communication Protocol",
    correct: "a",
  },
  {
    question: "What is UDP?",
    a: "User Datagram Protocol",
    b: "Universal Datagram Protocol",
    c: "User Data Protocol",
    d: "Universal Data Protocol",
    correct: "a",
  },
  {
    question: "What is HTTP?",
    a: "Hypertext Transfer Protocol",
    b: "Hypertext Transport Protocol",
    c: "Hypertext Transmission Protocol",
    d: "Hypertext Communication Protocol",
    correct: "a",
  },
  {
    question: "What is FTP?",
    a: "File Transfer Protocol",
    b: "File Transport Protocol",
    c: "File Transmission Protocol",
    d: "File Communication Protocol",
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
