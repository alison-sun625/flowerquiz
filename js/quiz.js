const questions = {
    "1": {
        "question": "You and your flower friends are planning a fun picnic. What are you bringing?",
        // image
        "choices": {
            "Utensils bc everyone always forgets them!": [2, ["Lavender"]],
            "A blanket — there would be no picnic without me": [2, ["Rose"]],
            "My famous banana bread": [2, ["Rose", "Daisy"]],
            "A bag of hot chip!": [2, ["Sunflower", "Bluebell"]],
            "My new favorite soda that went viral on Flowergram": [2, ["Tulip"]]
        }
    },

    "2": {
        "question": "You're about to be swept over the edge of a waterfall! What do you do?",
        // image
        "choices": {
            "Well, goodbye world": [3, ["Sunflower"]],
            "Quick!! How did that infographic say to tuck my arms?": [3, ["Daisy", "Tulip"]],
            "Scream for help!": [3, ["Rose"]],
            "Struggle frantically for the shore": [3, ["Bluebell"]],
            "Pray that there aren't rocks at the bottom": [3, ["Lavender"]]
        }
    },

    "3": {
        "question": "You're at a big career event and it's time to network! What's the move?",
        // image
        "choices": {
            "Lurk in a corner. I need a second to pluck up my courage!": [4, ["Sunflower"]],
            "Walk around aimlessly. Hopefully someflower will come up to me!": [4, ["Daisy", "Rose"]],
            "Go right up to the most accomplished-looking flower in the room!": [4, ["Tulip", "Bluebell"]],
            "Try to find my friends": [4, ["Lavender"]]
        }
    },

    "4": {
        "question": "What is your best flower feature?",
        // image
        "choices": {
            "My bright color": [5, ["Rose", "Sunflower", "Tulip"]],
            "My silky petals": [5, ["Tulip", "Bluebell"]],
            "My tall stem": [5, ["Sunflower"]],
            "My calming scent": [5, ["Daisy", "Lavender"]]
        }
    },

    "5": {
        "question": "Choose a song:",
        // image
        "choices": {
            "\"Magnolia\" - Laufey": [6, ["Daisy"]],
            "\"Sunflower\" - Post Malone, Swae Lee": [6, ["Tulip"]],
            "\"La vie en Rose\" - Edith Piaf": [6, ["Rose"]],
            "\"Ivy\" - Frank Ocean": [6, ["Lavender"]],
            "\"Bloom\" - Troye Sivan": [6, ["Sunflower"]],
            "\"Flowers\" - Miley Cyrus": [6, ["Bluebell"]]
        }
    },

    "6": {
        "question": "It is important that others like me.",
        // image
        "choices": {
            "Yup!": [7, ["Rose", "Sunflower"]],
            "Ehh, it's alright": [7, ["Lavender"]],
            "YOLO!!!": [7, ["Bluebell"]],
            "\"I need everyone to like me so much, it’s exhausting\" - John Mulaney": [7, ["Daisy", "Tulip"]]
        }
    },

    "7": {
        "question": "Lorem Ipsum",
        // image
        "choices": {
            "A": [8, ["Daisy"]],
            "B": [8, ["Sunflower"]],
            "C": [8, ["Tulip"]],
            "D": [8, ["Bluebell"]],
            "E": [8, ["Rose"]],
            "F": [8, ["Bluebell"]],
            "G": [8, ["Rose"]]
        }
    },

    "8": {
        "question": "How social are you?",
        // image
        "choices": {
            "I have good friends, but it's usually just me in this flowerpot": [9, ["Bluebell"]],
            "I have a few really close friends in my garden": [9, ["Daisy", "Sunflower"]],
            "I love hanging out in a big field of flowers!": [9, ["Rose", "Lavender"]],
            "I can vibe with anyflower, as long as they don't ruffle my petals": [9, ["Tulip"]]
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
        "question": "Choose an \"unrealistic\" job:",
        // image
        "choices": {
            "Underwater basket weaver": [11, ["Sunflower"]],
            "K-pop idol": [11, ["Tulip"]],
            "Dog hairdresser": [11, ["Bluebell"]],
            "Professional mourner": [11, ["Rose"]],
            "Panda nanny": [11, ["Daisy"]],
            "Celebrity gossip YouTuber": [11, ["Lavender"]]
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
    "Bluebell": 0
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
        // console.log(personalities);
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
    let maxCount = 0;
    let maxFlower = '';

    for (const [flower, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxFlower = flower;
        }
    }

    const questionText = document.getElementById('question-text');
    const choicesContainer = document.getElementById('choices');
    const resultsContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');

    resultText.textContent = `You got... ${maxFlower}!`;

    questionText.style.display = 'none';            // hide question text and choice options
    choicesContainer.style.display = 'none';

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
