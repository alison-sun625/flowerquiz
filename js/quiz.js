const questions = {
    "1": {
        "question": "You and your flower friends are planning a fun picnic. What are you bringing?",
        // image
        "choices": {
            "Utensils — everyone always forgets them!": [2, ["Lavender", ]],
            "A blanket — there would be no picnic without me": [2, []],
            "My famous banana bread": [2, ["Rose"]],
            "A bag of chips": [2, []],
            "Some drinks": [2, []]
        }
    },

    "2": {
        "question": "You're about to be swept over the edge of a waterfall! What do you do?",
        // image
        "choices": {
            "Well, goodbye world": [3, []],
            "Quick!! How did that infographic say to tuck my arms?": [3, []],
            "Scream for help!": [3, []],
            "Pray that there aren't rocks at the bottom": [3, []]
        }
    },

    "3": {
        "question": "You're at a big career event and it's time to network! What's the move?",
        // image
        "choices": {
            "Lurk in a corner. I need a second to pluck up my courage!": [4, []],
            "Walk around aimlessly. Hopefully someone will catch my eye!": [4, ["Daisy"]],
            "Go right up to the most accomplished-looking flower in the room!": [4, ["Tulip", "Bluebell"]],
            "Try to find my friends": [4, []]
        }
    },

    "4": {
        "question": "You've just been granted immortality. Choose one thing to take with you throughout the rest of eternity.",
        // image
        "choices": {
            "A": [5, []],
            "B": [5, []],
            "C": [5, []],
            "D": [5, []],
            "E": [5, []]
        }
    },

    "5": {
        "question": "Choose a song:",
        // image
        "choices": {
            "\"Daisy\" - Pentagon": [6, []],
            "\"Magnolia\" - Lauvey": [6, []],
            "\"Sunflower\" - Post Malone, Swae Lee": [6, []],
            "\"La vie en Rose\" - Edith Piaf": [6, []],
            "\"Ivy\" - Frank Ocean": [6, []],
            "\"Lilac Wine\" - Jeff Buckley": [6, []]
        }
    },

    "6": {
        "question": "It is important that others like me.",
        // image
        "choices": {
            "Agree": [7, []],
            "Neutral": [7, []],
            "Disagree": [7, []],
            "\"I need everyone to like me so much, it’s exhausting\" - John Mulaney": [7, []]
        }
    },

    "7": {
        "question": "Which of the seven deadly sins resonates the most with you?",
        // image
        "choices": {
            "Pride — ": [8, ["Daisy"]],
            "Greed": [8, ["Sunflower"]],
            "Gluttony": [8, ["Tulip"]],
            "Sloth": [8, ["Baby's Breath"]],
            "Wrath": [8, ["Rose"]],
            "Lust": [8, ["Bluebell"]],
            "Envy": [8, ["Rose"]]
        }
    },

    "8": {
        "question": "Lorem Ipsum",
        // image
        "choices": {
            "A": [9, ["Daisy"]],
            "B": [9, ["Daisy"]],
            "C": [9, []],
            "D": [9, []]
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
            "Compassion": [10, ["Sunflower", "Daisy"]],
            "Honesty": [10, ["Lavender"]]
        }
    },

    "10": {
        "question": "Lorem Ipsum",
        // image
        "choices": {
            "A": [11, ["Daisy"]],
            "B": [11, ["Rose"]],
            "C": [11, ["Tulip"]],
            "D": [11, ["Daisy"]]
        }
    },

    "11": {
        "question": "Lorem Ipsum",
        // image
        "choices": {
            "A": [12, ["Daisy"]],
            "B": [12, ["Rose"]],
            "C": [12, ["Sunflower"]],
            "D": [12, ["Bluebell"]]
        }
    },

    "12": {
        "question": "THIS IS THE END!",
        // image
        "choices": {
            "A": [13, []],
            "B": [13, []],
            "C": [13, []],
            "D": [13, []]
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
    startContainer = document.getElementById('start-container');
    startContainer.style.display='none';

    // console.log('questionNum:', questionNum);
    const currentQuestion = questions[questionNum];
    // console.log('currentQuestion:', currentQuestion);
    const questionText = document.getElementById('question-text');
    // const questionImage = document.getElementById('question-image');
    const choicesContainer = document.getElementById('choices');

    // const img = Image();         // image variables in const currently commented out bc they don't exist yet!!!
    // img.src = questions[questionNum].image;
    // questionImage.src = img.src;

    choicesContainer.innerHTML = '';

    questionText.textContent = questions[questionNum].question;

    // create buttons for each question 
    for (const [choice, info] of Object.entries(currentQuestion.choices)) {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'choice-button';
        let nextState = info[0];
        button.onclick = () => nextQuestion(nextState, info[1]); 
        
        choicesContainer.appendChild(button);
    };
}

function nextQuestion(newState, selectedPersonalities) {           // log choice, move to next question, show result if at the end
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
        console.log(personalities);
    });

    currentQuestionIndex = newState;

    if (newState <= Object.keys(questions).length) {
        displayQuestion(currentQuestionIndex);
    } 
    else {
        showResult();
    }
}

function showResult() {
    const questionText = document.getElementById('question-text');
    const choicesContainer = document.getElementById('choices');
    const resultsContainer = document.getElementById('result-container');

    questionText.style.display = 'none';            // hide question text and choice options
    choicesContainer.style.display = 'none';

    // count flowers

    // load flower result img
    // const resultImage = document.getElementById('image');
    // const resultPath = ``;
    // const img = new Image();
    // resultImage.src = resultPath;
    // resultImage.className = 'responsive-image'; 
    // console.log("finish");

    // sharing setup
    
    // console.log("finish");

    // show flower result img: image onload plus text

    // share result api call

    const shareData = {
        title: "What Flower are You?",
        text: "Lorem Ipsum Flower Quiz!",
        url: "https://alison-sun625.github.io/flowerquiz/",
        // flower image
      };
      
    //   const btn = document.querySelector("button");
      const resultPara = document.querySelector(".result");
    //   console.log(resultPara);

        const shareButton = document.createElement('button');
        shareButton.textContent = 'Share with the rest of your garden!';
        shareButton.className = 'choice-button';
        resultsContainer.appendChild(shareButton);
      
    // Share must be triggered by "user activation"
      shareButton.addEventListener("click", async () => {
        try {
          await navigator.share(shareData);
          resultPara.textContent = "MDN shared successfully";
        } catch (err) {
          resultPara.textContent = `Error: ${err}`;
        }
      });    
}

function startQuiz() {
    currentQuestionIndex = 1;
    // do some display stuff
    displayQuestion(currentQuestionIndex)
}
