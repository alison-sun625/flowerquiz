const questions = {
    "1": {
        "question": "You and your friends are planning a fun picnic. What are you bringing?",
        // image
        "choices": {
            "Utensils — everyone always forgets them!": [2, []],
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
            "Position": [3, []],
            "Scream for help!": [3, []],
            "Frantically try to swim away": [3, []]
        }
    },

    "3": {
        "question": "It's time to network! What's the move?",
        // image
        "choices": {
            "Utensils — everyone always forgets them!": [],
            "A blanket — there would be no picnic without me": [],
            "My famous": [],
            "A bag of chips": [],
            "Some drinks": []
        }
    },

    "4": {
        "question": "You've just been granted immortality. Choose one thing to take with you throughout the rest of eternity.",
        // image
        "choices": {
            "Utensils — everyone always forgets them!": [],
            "A blanket — there would be no picnic without me": [],
            "My famous": [],
            "A bag of chips": [],
            "Some drinks": []
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

    "8": {},
    "9": {},
    "10": {},
    "11": {},
    "12": {}

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

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const questionImage = document.getElementById('question-image');
    const choicesContainer = document.getElementById('choices');
}

function changeState() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } 
    else {
        showResult();
    }
}

function showResult() {
    // count flowers
    // load flower result img
    // show flower result img
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


