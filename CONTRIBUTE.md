# QuizHunt - Contributing Guide

Welcome to QuizHunt! We are glad you're interested in contributing to our quiz website. 

## Getting Started

Follow the steps below to add more multiple-choice questions (MCQs) to the existing quizzes:

1. Fork the Repository:
   - Go to the QuizHunt repository on GitHub.
   - Click the "Fork" button in the top right corner of the repository page to create a forked copy of the repository under your GitHub account.

2. Clone the Forked Repository:
   - After forking, navigate to your GitHub account and open the forked QuizHunt repository.
   - Click the "Code" button and copy the repository's URL.
   - Open a terminal or command prompt on your local machine.
   - Use the `git clone` command to clone the repository to your local machine:
     
     ```
     git clone https://github.com/ashishalf/quizhunt.github.io.git
     ```
3. Add New MCQ Questions:
   - Open the JavaScript file corresponding to the quiz you want to add questions to. For example, if you want to add questions to the C++ quiz, open the "cppquiz.js" file.
   - The JavaScript file should contain an array of objects, with each object representing a question and its options. The format might look something like this:

     ```javascript
       {  
          question: "Who invented C++?",
          a: "Dennis Ritchie",
          b: "Ken Thompson",
          c: "Brian Kernighan",
          d: "Bjarne Stroustrup",
          correct: "d",
       },
     ```
4. Save the Changes:
5. Commit and Push Changes:
   - After adding the new question and creating the contribute readme file, save the changes in the repository.
   - Use the following commands to commit and push the changes to your forked repository:

     ```
     git add .
     git commit -m "Add new MCQ questions to the C++ quiz"
     git push origin master
     ```

6. Create a Pull Request:
   - Go to your forked repository on GitHub.
   - Click on the "Pull Request" button.
   - Describe the changes you made in the pull request and click "Create Pull Request."

Now, the maintainers of the original QuizHunt repository can review your changes and, if everything is in order, merge your pull request, adding your new MCQ questions to the website.

Thank you for contributing to QuizHunt!
