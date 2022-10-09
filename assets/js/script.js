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
            'Singapore',
            'Malaysia',
            'Spain'
        ]
    },
    {
        name: 'Switzerland',
        fileName: 'switzerland.png',
        correctAnswer: 'Switzerland',
        options: [
            'Greece',
            'Portugal',
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

console.log(flags)

const displayFlag = document.querySelector(".js-flag-img");
const firstOption = document.querySelector(".js-option1");
const secondOption = document.querySelector(".js-option2");
const thirdOption = document.querySelector(".js-option3");
const playerCorrectScore = document.querySelector(".js-correct");
const playerWrongScore = document.querySelector(".js-incorrect");

let currentCorrectAnswer = '';

const updateQuiz = () => {
    const index = Math.floor(Math.random() * 20);
    displayFlag.setAttribute('src', `/assets/images/${flags[index].fileName}`);
    firstOption.innerHTML = flags[index].options[0];
    secondOption.innerHTML = flags[index].options[1];
    thirdOption.innerHTML = flags[index].options[2];
    currentCorrectAnswer = flags[index].correctAnswer;

    console.log(currentCorrectAnswer);
}

firstOption.addEventListener('click', () => {
    const option = firstOption.innerHTML;
    if (option === currentCorrectAnswer) {
        alert('You are right!!!')
    } else {
        alert(`You selected ${option} which is wrong!!! The correct answer is ${currentCorrectAnswer}`)
    }
    updateQuiz();
});

secondOption.addEventListener('click', () => {
    const option = secondOption.innerHTML;
    if (option === currentCorrectAnswer) {
        alert('You are right!!!')
    } else {
        alert(`You selected ${option} which is wrong!!! The correct answer is ${currentCorrectAnswer}`)
    }
    updateQuiz();
});

thirdOption.addEventListener('click', () => {
    const option = thirdOption.innerHTML;
    if (option === currentCorrectAnswer) {
        alert('You are right!!!')
    } else {
        alert(`You selected ${option} which is wrong!!! The correct answer is ${currentCorrectAnswer}`)
    }
    updateQuiz();
});

updateQuiz();




