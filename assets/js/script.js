const flags = [

    {
        name: 'Argentina',
        fileName: 'argentina.png',
        correctAnswer: 'Argentina',
        options: [
            'Argentina',
            'Brazil',
            'Egypt'
        ]
    },
    {
        name: 'Brazil',
        fileName: 'brazil.png',
        correctAnswer: 'Brazil',
        options: [
            'England',
            'Brazil',
            'Chile'
        ]
    },
    {
        name: 'Cambodia',
        fileName: 'cambodia.png',
        correctAnswer: 'Cambodia',
        options: [
            'Vietnam',
            'Laos',
            'Cambodia'
        ]
    },
    {
        name: 'Cameroon',
        fileName: 'cameroon.png',
        correctAnswer: 'Cameroon',
        options: [
            'Senegal',
            'Cameroon',
            'New Zealand'
        ]
    },
    {
        name: 'Croatia',
        fileName: 'croatia.png',
        correctAnswer: 'Croatia',
        options: [
            'Croatia',
            'Montenegro',
            'Norway'
        ]
    },
    {
        name: 'Cuba',
        fileName: 'cuba.png',
        correctAnswer: 'Cuba',
        options: [
            'Barbados',
            'Jamaica',
            'Cuba'
        ]
    },
    {
        name: 'Egypt',
        fileName: 'egypt.png',
        correctAnswer: 'Egypt',
        options: [
            'Egypt',
            'Israel',
            'Italy'
        ]
    },
    {
        name: 'England',
        fileName: 'england.png',
        correctAnswer: 'England',
        options: [
            'England',
            'Finland',
            'Scotland'
        ]
    },
    {
        name: 'Israel',
        fileName: 'israel.png',
        correctAnswer: 'Israel',
        options: [
            'Qatar',
            'Israel',
            'Tunisia'
        ]
    },
    {
        name: 'Jamaica',
        fileName: 'jamaica.png',
        correctAnswer: 'Jamaica',
        options: [
            'South Africa',
            'USA',
            'Jamaica'
        ]
    },
    {
        name: 'Japan',
        fileName: 'japan.png',
        correctAnswer: 'Japan',
        options: [
            'Japan',
            'China',
            'South Korea'
        ]
    },
    {
        name: 'Mexico',
        fileName: 'mexico.png',
        correctAnswer: 'Mexico',
        options: [
            'Mexico',
            'Costa Rica',
            'Colombia'
        ]
    },
    {
        name: 'Morocco',
        fileName: 'morocco.jpg',
        correctAnswer: 'Morocco',
        options: [
            'UAE',
            'Saudi Arabia',
            'Morocco'
        ]
    },
    {
        name: 'Namibia',
        fileName: 'namibia.png',
        correctAnswer: 'Namibia',
        options: [
            'Nigeria',
            'Namibia',
            'Ghana'
        ]
    },
    {
        name: 'Norway',
        fileName: 'norway.png',
        correctAnswer: 'Norway',
        options: [
            'Sweden',
            'Ireland',
            'Norway'
        ]
    },
    {
        name: 'Singapore',
        fileName: 'singapore.png',
        correctAnswer: 'Singapore',
        options: [
            'Singapore',
            'Malaysia',
            'Fuji'
        ]
    },
    {
        name: 'Spain',
        fileName: 'spain.png',
        correctAnswer: 'Spain',
        options: [
            'Italy',
            'Portugal',
            'Spain'
        ]
    },
    {
        name: 'Switzerland',
        fileName: 'switzerland.png',
        correctAnswer: 'Switzerland',
        options: [
            'Greece',
            'France',
            'Switzerland'
        ]
    },
    {
        name: 'Thailand',
        fileName: 'thailand.png',
        correctAnswer: 'Thailand',
        options: [
            'Indonesia',
            'Australia',
            'Thailand'
        ]
    },
    {
        name: 'Tunisia',
        fileName: 'tunisia.png',
        correctAnswer: 'Tunisia',
        options: [
            'Turkey',
            'Tunisia',
            'Kenya'
        ]
    },

];


/**
 * Wait for the DOM to finish loading before running the game
 * Get the button elements and add event listeners to them
 */

document.addEventListener("DOMContentLoaded", function() {
    
    console.log(flags)
    const displayFlag = document.querySelector(".js-flag-img");
    const firstOption = document.querySelector(".js-option1");
    const secondOption = document.querySelector(".js-option2");
    const thirdOption = document.querySelector(".js-option3");
    
    
    let playerCorrectScore = document.querySelector(".js-correct");
    let playerWrongScore = document.querySelector(".js-incorrect");
    let roundsPlayed = document.querySelector(".js-round-played");
    let currentCorrectAnswer = '';
    
    const updateQuiz = () => {
        const randomIndex = Math.floor(Math.random() * 20);

        displayFlag.setAttribute('src', `assets/images/${flags[randomIndex].fileName}`);
        displayFlag.setAttribute('alt', `Flag of ${flags[randomIndex].name}`);

        // update first option
        firstOption.innerHTML = flags[randomIndex].options[0];
        firstOption.setAttribute('aria-label', `Option 1: ${flags[randomIndex].name}`);
       
        // update second option
        secondOption.innerHTML = flags[randomIndex].options[1];
        secondOption.setAttribute('aria-label', `Option 2: ${flags[randomIndex].name}`);

        // update third option
        thirdOption.innerHTML = flags[randomIndex].options[2];
        thirdOption.setAttribute('aria-label', `Option 3: ${flags[randomIndex].name}`);

        currentCorrectAnswer = flags[randomIndex].correctAnswer;
        console.log(currentCorrectAnswer);
    }
    
    const incrementRound = () => {
        roundsPlayed.innerHTML = parseInt(roundsPlayed.innerHTML) + 1;
    }

    const incrementCorrectScore = () => {
        // alert('You are right!!!')
        playerCorrectScore.innerHTML = parseInt(playerCorrectScore.innerHTML) + 1;
    }
    
    const incrementWrongScore = (option) => {
        // alert(`You selected ${option} which is wrong!!! The correct answer is ${currentCorrectAnswer}`)
        playerWrongScore.innerHTML = parseInt(playerWrongScore.innerHTML) + 1;
    }

    document.keydod = function (e) {
        e = e || window.event;

        const userInput = e.keyCode;
        if (userInput === 49) {
            firstOption.click();
            // simulate click for option 1
        }
        if (userInput === 50) {
            secondOption.click();
            // simulate click for option 2
        }
        if (userInput === 51) {
            thirdOption.click();
            // simulate click for option 3
        }
        console.log(e.keyCode);
        
    };

    firstOption.addEventListener('click', () => {
        const option = firstOption.innerHTML;
        if (option === currentCorrectAnswer) {
            firstOption.style.backgroundColor = "green";
            incrementCorrectScore();
            
        } else {
            firstOption.style.backgroundColor = "red";
            incrementWrongScore(option);
        }

        setTimeout(() => {
            updateQuiz();
            firstOption.style.backgroundColor = "darkgray";
            incrementRound();
        }, 500);
       
    });
    
    secondOption.addEventListener('click', () => {
        const option = secondOption.innerHTML;
        if (option === currentCorrectAnswer) {
            secondOption.style.backgroundColor = "green";
            incrementCorrectScore();
        } else {
            secondOption.style.backgroundColor = "red";
            incrementWrongScore(option);
        }
        setTimeout(() => {
            updateQuiz();
            secondOption.style.backgroundColor = "darkgray";
            incrementRound();
        }, 500);
    });
    
    thirdOption.addEventListener('click', () => {
        const option = thirdOption.innerHTML;
        if (option === currentCorrectAnswer) {
            thirdOption.style.backgroundColor = "green";
            incrementCorrectScore();
        } else {
            thirdOption.style.backgroundColor = "red";
            incrementWrongScore(option);
        }
        setTimeout(() => {
            updateQuiz();
            thirdOption.style.backgroundColor = "darkgray";
            incrementRound();
        }, 500);
    });
    
    updateQuiz();
});


