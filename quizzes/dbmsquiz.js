const quizData = [
  {
    question: "What is the full form of DBMS?",
    a: "Data of Binary Management System",
    b: "Database Management System",
    c: "Database Management Service",
    d: "Data Backup Management System",
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
    question: "What is DBMS?",
    a: "DBMS is a collection of queries",
    b: "DBMS is a high-level language",
    c: "DBMS is a programming language",
    d: "DBMS stores, modifies and retrieves data",
    correct: "d",
  },
  {
    question: "Who created the first DBMS?",
    a: "Edgar Frank Codd ",
    b: "Charles Bachman",
    c: "Charles Babbage",
    d: "Sharon B. Codd",
    correct: "b",
  },
  {
    question: "Which type of data can be stored in the database?",
    a: "Image oriented data ",
    b: "Text, files containing data ",
    c: "Data in the form of audio or video",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "Which of the following is not an example of DBMS?",
    a: "Google",
    b: "Microsoft Acess",
    c: "IBM DB2",
    d: "MySQL",
    correct: "a",
  },
  {
    question: "Which of the following is a feature of the database?",
    a: "No-backup for the data stored",
    b: "User interface provided",
    c: "Lack of Authentication",
    d: "Store data in multiple locations",
    correct: "b",
  },
  {
    question: "What is information about data called?",
    a: "Hyper data",
    b: "Tera data",
    c: "Meta data",
    d: "Relations",
    correct: "c",
  },
  {
    question: "What does an RDBMS consist of?",
    a: "Collection of Records",
    b: "Collection of Keys",
    c: "Collection of Tables",
    d: "Collection of Fields",
    correct: "c",
  },
  {
    question: "Which command is used to remove a relation from an SQL?",
    a: "Drop table",
    b: "Delete",
    c: "Purge",
    d: "Remove",
    correct: "a",
  },
  {
    question: "What is a DBMS?",
    a: "Data Browsing Management System",
    b: "Database Monitoring System",
    c: "Data Backup and Management System",
    d: "Database Management System",
    correct: "d",
  },
  {
    question: "Which of the following is not a type of database model?",
    a: "Relational model",
    b: "Object-Oriented model",
    c: "Hierarchical model",
    d: "Non-Relational model",
    correct: "d",
  },
  {
    question: "What is a primary key in a database?",
    a: "A key that is used to uniquely identify a row in a table",
    b: "A key that is used to join two tables together",
    c: "A key that is used to encrypt data in a table",
    d: "A key that is used to sort data in a table",
    correct: "a",
  },
  {
    question: "What is normalization in database design?",
    a: "A process of reducing data redundancy",
    b: "A process of increasing data redundancy",
    c: "A process of adding more tables to a database",
    d: "A process of reducing the number of tables in a database",
    correct: "a",
  },
  {
    question: "What is a foreign key in a database?",
    a: "A key that is used to uniquely identify a row in a table",
    b: "A key that is used to join two tables together",
    c: "A key that is used to encrypt data in a table",
    d: "A key that is used to sort data in a table",
    correct: "b",
  },
  {
    question: "What is SQL?",
    a: "Structured Query Language",
    b: "Structured Question Language",
    c: "Structured Query Loop",
    d: "Structured Question Loop",
    correct: "a",
  },
  {
    question: "What is the difference between SQL and PL/SQL?",
    a: "SQL is a programming language, PL/SQL is not",
    b: "PL/SQL is a programming language, SQL is not",
    c: "SQL is used for data manipulation, PL/SQL is used for procedural programming",
    d: "PL/SQL is used for data manipulation, SQL is used for procedural programming",
    correct: "c",
  },
  {
    question: "What is a view in a database?",
    a: "A virtual table that is based on the result of a SQL statement",
    b: "A physical table that contains data",
    c: "A table that is used to store temporary data",
    d: "A table that is used to store metadata",
    correct: "a",
  },
  {
    question: "What is a trigger in a database?",
    a: "A program that is executed when a certain event occurs",
    b: "A table that is used to store temporary data",
    c: "A physical table that contains data",
    d: "A table that is used to store metadata",
    correct: "a",
  },
  {
    question: "What is a stored procedure in a database?",
    a: "A precompiled set of SQL statements that is stored in the database",
    b: "A program that is executed when a certain event occurs",
    c: "A table that is used to store temporary data",
    d: "A table that is used to store metadata",
    correct: "a",
  },
  {
    question: "What is a database index?",
    a: "A data structure used to improve the speed of data retrieval operations on a database table",
    b: "A table used to store information about a database",
    c: "A tool used to backup a database",
    d: "A tool used to monitor database performance",
    correct: "a",
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
    question: "What is data normalization?",
    a: "A process of organizing data in a database to reduce redundancy and improve data integrity",
    b: "A process of duplicating data in a database to improve data availability",
    c: "A process of adding more data to a database to improve data accuracy",
    d: "A process of removing data from a database to improve data consistency",
    correct: "a",
  },
  {
    question: "What is the difference between a primary key and a unique key?",
    a: "A primary key is used to identify a row in a table, a unique key is not",
    b: "A unique key is used to identify a row in a table, a primary key is not",
    c: "Both primary keys and unique keys are used to identify a row in a table",
    d: "There is no difference between a primary key and a unique key",
    correct: "a",
  },
  {
    question: "What is a database trigger?",
    a: "A set of instructions that are automatically executed by the database.",
    b: "A tool used to backup a database",
    c: "A table used to store metadata about a database",
    d: "A tool used to monitor database performance",
    correct: "a",
  },
  {
    question: "What is a database cursor?",
    a: "A database object used to manipulate data row by row",
    b: "A database object used to backup data",
    c: "A database object used to monitor database performance",
    d: "A database object used to store metadata about a database",
    correct: "a",
  },
  {
    question: "What is the purpose of a foreign key in a database?",
    a: "To establish a relationship between two tables",
    b: "To sort data in a table",
    c: "To index data in a table",
    d: "To add data to a table",
    correct: "a",
  },
  {
    question: "What is a database view?",
    a: "A virtual table that represents the result of a database query",
    b: "A table used to store metadata about a database",
    c: "A tool used to backup a database",
    d: "A tool used to monitor database performance",
    correct: "a",
  },
  {
    question: "What is a database constraint?",
    a: "A rule that restricts the values that can be stored in a database",
    b: "A tool used to monitor database performance",
    c: "A tool used to backup a database",
    d: "A table used to store metadata about a database",
    correct: "a",
  },
  {
    question: "What is database normalization?",
    a: "The process of organizing data in a database to reduce redundancy and dependency",
    b: "The process of adding more data to a database to improve data accuracy",
    c: "The process of duplicating data in a database to improve data availability",
    d: "The process of removing data from a database to improve data consistency",
    correct: "a",
  },
  {
    question: "What is a stored procedure in a database?",
    a: "A set of precompiled SQL statements that can be executed on demand",
    b: "A tool used to backup a database",
    c: "A tool used to monitor database performance",
    d: "A table used to store metadata about a database",
    correct: "a",
  },
  {
    question: "What is a database transaction?",
    a: "A sequence of one or more database operations.",
    b: "A tool used to backup a database",
    c: "A tool used to monitor database performance",
    d: "A table used to store metadata about a database",
    correct: "a",
  },
  {
    question: "What is a database deadlock?",
    a: "A situation where two or more transactions are unable to proceed.",
    b: "A tool used to backup a database",
    c: "A tool used to monitor database performance",
    d: "A table used to store metadata about a database",
    correct: "a",
  },
  {
    question: "What is a NoSQL database?",
    a: "A non-relational database that does not use SQL as its primary query language",
    b: "A relational database that uses SQL as its primary query language",
    c: "A database that does not store any data",
    d: "A database that is only used for backups",
    correct: "a",
  },
  {
    question: "What is the difference between a primary key and a unique key?",
    a: "A table can have only one primary key, but multiple unique keys",
    b: "A table can have only one unique key, but multiple primary keys",
    c: "There is no difference between a primary key and a unique key",
    d: "A primary key is used to sort data in a table, a unique key is not",
    correct: "a",
  },
  {
    question: "What is a composite key?",
    a: "A key that consists of two or more columns in a table",
    b: "A key that is used to backup a database",
    c: "A key that is used to monitor database performance",
    d: "A key that is used to store metadata about a database",
    correct: "a",
  },
  {
    question: "What is a self-join in a database?",
    a: "A join operation where a table is joined with itself",
    b: "A join operation where two different tables are joined",
    c: "A join operation where a table is joined with a view",
    d: "A join operation where a table is joined with a subquery",
    correct: "a",
  },
  {
    question: "What is an index in a database?",
    a: "A data structure that improves the speed of data retrieval operations on a database table",
    b: "A table used to store metadata about a database",
    c: "A tool used to monitor database performance",
    d: "A tool used to backup a database",
    correct: "a",
  },
  {
    question: "What is a database schema?",
    a: "A blueprint that defines the structure of a database",
    b: "A tool used to backup a database",
    c: "A tool used to monitor database performance",
    d: "A table used to store metadata about a database",
    correct: "a",
  },
  {
    question: "What is a database index hint?",
    a: "A directive that tells the database which index to use when executing a query",
    b: "A tool used to monitor database performance",
    c: "A tool used to backup a database",
    d: "A table used to store metadata about a database",
    correct: "a",
  },
  {
    question: "What is a subquery in a database?",
    a: "A query that is nested inside another query",
    b: "A query that is executed on multiple tables",
    c: "A query that is executed on a single table",
    d: "A query that is used to backup a database",
    correct: "a",
  },
  {
    question: "What is a database cursor?",
    a: "A mechanism that enables traversal over the rows or records of a database table",
    b: "A tool used to backup a database",
    c: "A tool used to monitor database performance",
    d: "A table used to store metadata about a database",
    correct: "a",
  },
  {
    question: "What is a transaction in a database?",
    a: "A group of database operations that are treated as a single unit of work",
    b: "A tool used to backup a database",
    c: "A tool used to monitor database performance",
    d: "A table used to store metadata about a database",
    correct: "a",
  },
  {
    question: "What is a view in a database?",
    a: "A virtual table that is based on the result of a SELECT statement",
    b: "A tool used to backup a database",
    c: "A tool used to monitor database performance",
    d: "A table used to store metadata about a database",
    correct: "a",
  },
  {
    question: "What is a database schema diagram?",
    a: "A visual representation of a database schema",
    b: "A tool used to backup a database",
    c: "A tool used to monitor database performance",
    d: "A table used to store metadata about a database",
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
