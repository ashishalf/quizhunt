const quizData = [
  {
    question: "What is Machine learning?",
    a: "The autonomous acquisition of knowledge through the use of computer programs",
    b: "The autonomous acquisition of knowledge through the use of manual programs",
    c: "The selective acquisition of knowledge through the use of computer programs",
    d: "The selective acquisition of knowledge through the use of manual programs",
    correct: "a",
  },
  {
    question:
      "In language understanding, the levels of knowledge that does not include?",
    a: "Phonological",
    b: "Syntactic",
    c: "Empirical",
    d: "Logical",
    correct: "c",
  },
  {
    question:
      "What will take place as the agent observes its interactions with the world?",
    a: "Learning",
    b: "Hearing",
    c: "Perceiving",
    d: "Speech",
    correct: "a",
  },
  {
    question:
      "How many things are concerned in the design of a learning element?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "c",
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
    question: "Which is used to choose among multiple consistent hypotheses?",
    a: "Razor",
    b: "Ockham razor",
    c: "Learning element",
    d: "None of the mentioned",
    correct: "b",
  },
  {
    question: "How the decision tree reaches its decision?",
    a: "Single test",
    b: "Two test",
    c: "Sequence of test",
    d: "No test",
    correct: "c",
  },
  {
    question:
      "Which of the following could be the approaches to Artificial Intelligence?",
    a: "Strong Artificial Intelligence",
    b: "Weak Artificial Intelligence",
    c: "Applied Artificial Intelligence",
    d: "All of the mentioned",
    correct: "d",
  },
  {
    question: "An Artificial Neural Network Is based on?",
    a: "Strong Artificial Intelligence approach",
    b: "Weak Artificial Intelligence approach",
    c: "Cognitive Artificial Intelligence approach",
    d: "Applied Artificial Intelligence approach",
    correct: "c",
  },
  {
    question:
      "Application of machine learning methods to large databases is called",
    a: "Data mining",
    b: "Artificial intelligence",
    c: "Big data computing",
    d: "Internet of things",
    correct: "a",
  },
  {
    question: "What is Machine Learning?",
    a: "A subset of Artificial Intelligence",
    b: "A programming language",
    c: "A database management system",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is supervised learning?",
    a: "A machine learning algorithm where the input data is labeled with the correct output",
    b: "A machine learning algorithm where the input data is not labeled with the correct output",
    c: "A machine learning algorithm where the output is not known in advance",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is unsupervised learning?",
    a: "A machine learning algorithm where the input data is not labeled with the correct output",
    b: "A machine learning algorithm where the input data is labeled with the correct output",
    c: "A machine learning algorithm where the output is not known in advance",
    d: "None of the above",
    correct: "a",
  },
  ,
  {
    question: "What is deep learning?",
    a: "A subset of machine learning that uses deep neural networks",
    b: "A type of learning where the input data is labeled with the correct output",
    c: "A type of learning where the output is not known in advance",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is a neural network?",
    a: "A type of algorithm that is modeled after the human brain",
    b: "A type of algorithm that uses decision trees",
    c: "A type of algorithm that uses random forests",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is a perceptron?",
    a: "A type of neural network that consists of a single layer of neurons",
    b: "A type of neural network that consists of multiple layers of neurons",
    c: "A type of neural network that is used for reinforcement learning",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is backpropagation?",
    a: "A technique used to train neural networks by adjusting the weights of the connections between neurons",
    b: "A technique used to label data for supervised learning",
    c: "A technique used to cluster data for unsupervised learning",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is overfitting?",
    a: "When a model performs well on the training data but poorly on new data",
    b: "When a model performs poorly on the training data but well on new data",
    c: "When a model performs well on both the training data and new data",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is a decision tree?",
    a: "A type of algorithm that uses a tree-like structure to make decisions",
    b: "A type of neural network that consists of multiple layers of neurons",
    c: "A type of algorithm that uses random forests",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is clustering?",
    a: "A type of unsupervised learning where the goal is to group similar data points together",
    b: "A type of supervised learning where the input data is labeled with the correct output",
    c: "A type of machine learning where the output is not known in advance",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is feature selection?",
    a: "A technique used to select a subset of the most relevant features for a given problem",
    b: "A technique used to label data for supervised learning",
    c: "A technique used to cluster data for unsupervised learning",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is feature extraction?",
    a: "A technique used to extract relevant features from the raw data",
    b: "A technique used to label data for supervised learning",
    c: "A technique used to cluster data for unsupervised learning",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is transfer learning?",
    a: "A technique where a pre-trained model is used as a starting point for a new problem",
    b: "A technique used to label data for supervised learning",
    c: "A technique used to cluster data for unsupervised learning",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is a support vector machine (SVM)?",
    a: "A type of algorithm that finds the hyperplane that best separates the data into different classes",
    b: "A type of algorithm that uses decision trees",
    c: "A type of algorithm that uses random forests",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is a convolutional neural network (CNN)?",
    a: "A type of neural network that is commonly used for image classification tasks",
    b: "A type of neural network that consists of a single layer of neurons",
    c: "A type of neural network that is used for reinforcement learning",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is a convolutional neural network (CNN)?",
    a: "A type of neural network commonly used for image classification and recognition tasks",
    b: "A type of neural network commonly used for natural language processing tasks",
    c: "A type of neural network commonly used for reinforcement learning tasks",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is backpropagation?",
    a: "A technique used to update the weights of a neural network during training",
    b: "A technique used to preprocess data before feeding it to a neural network",
    c: "A technique used to visualize the activations of a neural network",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is the activation function used in most neural networks?",
    a: "ReLU",
    b: "Sigmoid",
    c: "Tanh",
    d: "Linear",
    correct: "a",
  },
  {
    question: "What is the loss function used in binary classification tasks?",
    a: "Cross-entropy",
    b: "Mean squared error",
    c: "Mean absolute error",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "What is the measure used to evaluate the performance of a classification model?",
    a: "Accuracy",
    b: "Mean squared error",
    c: "Mean absolute error",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "What is the measure used to evaluate the performance of a regression model?",
    a: "Mean squared error",
    b: "Accuracy",
    c: "Precision",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "What is the process of finding the best hyperparameters for a machine learning model called?",
    a: "Hyperparameter tuning",
    b: "Feature engineering",
    c: "Model selection",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "What is the process of splitting a dataset into a training set and a test set called?",
    a: "Train-test split",
    b: "Cross-validation",
    c: "Bootstrap",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "What is the process of normalizing the input data to have zero mean and unit variance called?",
    a: "Standardization",
    b: "Normalization",
    c: "Scaling",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "What is the technique used to combat imbalanced classes in a classification task?",
    a: "Sampling",
    b: "Weighting",
    c: "Thresholding",
    d: "None of the above",
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
