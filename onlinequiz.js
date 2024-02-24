
const ps = require ("prompt-sync");


const prompt = ps ()

// Define the quiz object
const quiz = {
    questionAndAnswer1: {
        question: 'What is JavaScript',
        options: [
            'A programming language used for web development',
            'The best coding language in the world',
            'Is a markup language'
        ],
        correctAnswer: 0
    },
    questionAndAnswer2: {
        question: 'How does the prompt function work in JavaScript',
        options: [
            'It takes user input and returns',
            'It prints the output',
            'It is a compile'
        ],
        correctAnswer: 0
    }
};

// Function to display the answer options
function displayAnswerOptions(options) {
    options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
}

// Function to check the user's answer
function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        return true;
    } else {
        console.log('Incorrect. The correct answer is:');
        console.log(quiz[Object.keys(quiz)[0]].options[quiz[Object.keys(quiz)[0]].correctAnswer]);
        return false;
    }
}