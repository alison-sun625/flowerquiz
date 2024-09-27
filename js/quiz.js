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
        "question": "Choose somewhere oddly specific to bloom:",
        // image
        "choices": {
            "The windowsill box of a kindly old woman": [8, ["Daisy"]],
            "Inside a red clay flowerpot owned by someone who isn't very good with plants": [8, ["Sunflower"]],
            "A crack in the sidewalk of a sleepy neighborhood": [8, ["Rose"]],
            "On a rocky cliff overlooking the ocean": [8, ["Lavender"]],
            "In a flower arrangement at your cousin's wedding": [8, ["Tulip", "Bluebell"]]
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
        "question": "How would you describe your fashion sense?",
        // image
        "choices": {
            "Stylish, yet casual and comfy!": [12, ["Daisy", "Tulip"]],
            "Classic, timeless, and a little fancy": [12, ["Rose"]],
            "I wear the same thing every day, like a cartoon character": [12, ["Lavender"]],
            "Lots of bright colors and cool statement pieces": [12, ["Bluebell", "Sunflower"]]
        }
    },

    "12": {
        "question": "What would hurt the most?",
        // image
        "choices": {
            "Being betrayed by a close friend": [13, ["Rose", "Bluebell"]],
            "Making a mistake that hurts someone you love": [13, ["Lavender"]],
            "Feeling like you aren't as great as the world thinks you are": [13, ["Tulip"]],
            "Realizing that you cared too much": [13, ["Sunflower"]]
        }
    },

    "13": {
        "question": "You and a super intelligent snail are both immortal, however you will wilt and die if the snail touches you. It always knows where you are and slowly crawls toward you. What's your plan?",
        // image
        "choices": {
            "Seal it in a jar": [14, ["Daisy", "Tulip"]],
            "Move to a salt flat": [14, ["Sunflower", "Rose"]],
            "Befriend the snail and ask it nicely to not touch you": [14, ["Lavender", "Bluebell"]]
        }
    },

    "14": {
        "question": "How much aura do you have?",
        // image
        "choices": {
            "Zero, I am very shy": [15, ["Daisy"]],
            "I have enough": [15, ["Sunflower", "Lavender"]],
            "A lot, navigating social situations is usually intuitive for me": [15, ["Rose", "Bluebell"]],
            "Infinite aura: empires crumble at my feet": [15, ["Tulip"]]
        }
    },

    "15": {
        "question": "What happens to you in the movie of your life?",
        // image
        "choices": {
            "I move to a garden in the countryside and embark on a heartwarming journey of self-growth": [16, ["Daisy"]],
            "I sacrifice everything to make a groundbreaking scientific discovery that saves billions of flowers": [16, ["Sunflower", "Lavender"]],
            "I team up with my ex-best friend/lover to win a gold medal in the Flower Olympics": [16, ["Tulip", "Bluebell"]],
            "I have a tragic, short-lived love affair, and I look for them in everyflower I meet": [16, ["Rose"]]
        }
    },

    "16": {
        "question": "Last question! Choose a non-flower plant and its symbolism:",
        // image
        "choices": {
            "Four-leaf clover: good luck": [17, ["Daisy", "Sunflower"]],
            "Monkshood: \"Danger is near\"": [17, ["Tulip", "Bluebell"]],
            "Laurel: glory and honor": [17, ["Rose"]],
            "Bamboo: longevity and strength": [17, ["Lavender"]]
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
