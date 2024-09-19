const questions = {
    "1": {
        "question": "You and your flower friends are planning a fun picnic. What are you bringing?",
        // image
        "choices": {
            "Utensils — everyone always forgets them!": [2, ["Lavender", ]],
            "A blanket — there would be no picnic without me": [2, []],
            "My famous": [2, []],
            "A bag of chips": [2, []],
            "Some drinks": [2, []]
        }
    },

    "2": {
        "question": "You're about to be swept over the edge of a waterfall! What do you do?",
        // image
        "choices": {
            "Well, goodbye world": [3, []],
            "Try to remember what you read about it on the Internet": [3, []],
            "Scream for help!": [3, []],
            "Pray that there aren't rocks at the bottom": [3, []]
        }
    },

    "3": {
        "question": "You're at a big career event and it's time to network! What's the move?",
        // image
        "choices": {
            "A": [],
            "B": [],
            "C": [],
            "D": [],
            "E": []
        }
    },

    "4": {
        "question": "You've just been granted immortality. Choose one thing to take with you throughout the rest of eternity.",
        // image
        "choices": {
            "A": [],
            "B": [],
            "C": [],
            "D": [],
            "E": []
        }
    },

    "5": {
        "question": "Choose a band:",
        // image
        "choices": {
            "BTS": [],
            "Mother Mother": [],
            "Her's": [],
            "Fleetwood Mac": [],
            "The 1975": [],
            "wave to earth": []
        }
    },

    "6": {
        "question": "It is important that others like me.",
        // image
        "choices": {
            "Agree": [],
            "Neutral": [],
            "Disagree": [],
            "\"I need everyone to like me so much, it’s exhausting\" - John Mulaney": []
        }
    },

    "7": {
        "question": "Which of the seven deadly sins resonates the most with you?",
        // image
        "choices": {
            "Pride": [],
            "Greed": [],
            "Gluttony": [],
            "Sloth": [],
            "Wrath": [],
            "Lust": [],
            "Envy": []
        }
    },

    "8": {
        "question": "Lorem Ipsum",
        // image
        "choices": {
            "A": [],
            "B": [],
            "C": [],
            "D": []
        }
    },

    "9": {
        "question": "Which personality trait do you value the most?",
        // image
        "choices": {
            "Loyalty": [10, ["Rose"]],
            "Empathy": [10, ["Rose"]],
            "Creativity": [10, ["Bluebell"]],
            "Ambition": [10, ["Tulip"]],
            "Kindness": [10, ["Daisy"]],
            "Compassion": [10, ["Sunflower"]],
            "Honesty": [10, ["Lavender"]]
        }
    },

    "10": {
        "question": "Lorem Ipsum",
        // image
        "choices": {
            "A": [],
            "B": [],
            "C": [],
            "D": []
        }
    },

    "11": {
        "question": "Lorem Ipsum",
        // image
        "choices": {
            "A": [],
            "B": [],
            "C": [],
            "D": []
        }
    },

    "12": {
        "question": "Lorem Ipsum",
        // image
        "choices": {
            "A": [],
            "B": [],
            "C": [],
            "D": []
        }
    }

}

const personalities = {
    "Daisy": 0,
    "Sunflower": 0,
    "Rose": 0,
    "Lavender": 0,
    "Tulip": 0,
    "Bluebell": 0,
    "Baby's Breath": 0
}

let currentQuestionIndex = 0;       // what question are we on?

function displayQuestion(questionNum) {        // display each question and its choices
    // const currentQuestion = questions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    // const questionImage = document.getElementById('question-image');
    const choicesContainer = document.getElementById('choices');

    // const img = Image();         // image variables in const currently commented out bc they don't exist yet!!!
    // img.src = questions[questionNum].image;
    // questionImage.src = img.src;

    choicesContainer.innerHTML = '';

    questionText.textContent = questions[questionNum].question;

    // create buttons for each question 
    for (const [choice, info] of Object.entries(questions[state].choices)) {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'choice-button';
        let nextState = info[0];
        button.onclick = () => nextQuestion(nextState, info[1]); 
        choicesContainer.appendChild(button);
    };
}

function nextQuestion(selectedPersonalities) {           // log choice, move to next question, show result if at the end
    // const currentQuestion = questions[currentQuestionIndex];

    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } 
    else {
        showResult();
    }
}

function showResult() {
    // count flowers

    // load flower result img
    // const resultImage = document.getElementById('image');
    // const resultPath = ``;
    // const img = new Image();
    // resultImage.src = resultPath;
    // resultImage.className = 'responsive-image'; 
    console.log("finish");

    // sharing setup
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share with the rest of your garden!';
    shareButton.className = 'choice-button';

    // show flower result img: image onload plus text

    // share result api call

    // const shareData = {
    //     title: "MDN",
    //     text: "Learn web development on MDN!",
    //     url: "https://developer.mozilla.org",
    //     flower image
    //   };
      
    //   const btn = document.querySelector("button");
    //   const resultPara = document.querySelector(".result");
      
    // Share must be triggered by "user activation"
    //   btn.addEventListener("click", async () => {
    //     try {
    //       await navigator.share(shareData);
    //       resultPara.textContent = "MDN shared successfully";
    //     } catch (err) {
    //       resultPara.textContent = `Error: ${err}`;
    //     }
    //   });    
}

function startQuiz() {
    currentQuestionIndex = 0;
    // do some display stuff
    displayQuestion(currentQuestionIndex)
}
