module.exports = {
    getQuizList,
    getQuestions,
    addQuiz,
    addQuestion
};

let quizList = [
    {
        id: 1,
        name: "Série TV",
    },
    {
        id: 2,
        name: "Culture Gé",
    },
    {
        id: 3,
        name: "Cuisine",
    },
    {
        id: 4,
        name: "Sciences",
    },
    {
        id: 5,
        name: "Histoire",
    },
    {
        id: 6,
        name: "Animaux",
    },
    {
        id: 7,
        name: "Cinéma",
    },
    {
        id: 8,
        name: "Musique",
    },
    {
        id: 9,
        name: "Littérature",
    },
    {
        id: 10,
        name: "Jeux vidéo",
    },
    {
        id: 11,
        name: "Automobile",
    },
    {
        id: 12,
        name: "High-tech",
    },
];

let questionsList = [
    {
        id: 1,
        name: 'Série TV',
        questions: [
            {
                id: 1,
                title: 'De quel série provient ce personnage ?',
                image: 'https://i.imgur.com/2UeXHDH.png',
                difficulty: 2,
                answers: [
                    {A: 'Futurama'},
                    {B: 'Family guy'},
                    {C: 'Les Simpson'},
                    {D: 'American Dad'}
                ]
            },
            {
                id: 2,
                title: 'Qui a les plus grosses maracas ?',
                image: 'https://i.imgur.com/2UeXHDH.png',
                difficulty: 1,
                answers: [
                    {A: 'C\'est bibi ;)'},
                    {B: 'Family guy'},
                    {C: 'Les Simpson'},
                    {D: 'American Dad'}
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Cuisine',
        questions: [
            {
                id: 1,
                title: 'De quel série provient ce personnage ?',
                image: 'https://i.imgur.com/2UeXHDH.png',
                difficulty: 1,
                answers: [
                    {A: 'Futurama'},
                    {B: 'Family guy'},
                    {C: 'Les Simpson'},
                    {D: 'American Dad'}
                ]
            },
            {
                id: 2,
                title: 'De quel série provient ce personnage ?',
                image: 'https://i.imgur.com/2UeXHDH.png',
                difficulty: 1,
                answers: [
                    {A: 'Futurama'},
                    {B: 'Family guy'},
                    {C: 'Les Simpson'},
                    {D: 'American Dad'}
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Culture Gé',
        questions: [
            {
                id: 1,
                title: 'De quel série provient ce personnage ?',
                image: 'https://i.imgur.com/2UeXHDH.png',
                difficulty: 1,
                answers: [
                    {A: 'Futurama'},
                    {B: 'Family guy'},
                    {C: 'Les Simpson'},
                    {D: 'American Dad'}
                ]
            },
            {
                id: 2,
                title: 'De quel série provient ce personnage ?',
                image: 'https://i.imgur.com/2UeXHDH.png',
                difficulty: 1,
                answers: [
                    {A: 'Futurama'},
                    {B: 'Family guy'},
                    {C: 'Les Simpson'},
                    {D: 'American Dad'}
                ]
            }
        ]
    },
];

function getQuizById(id) {
    let q = questionsList.filter(q => q.id === +id);
    console.log(q);
    if (q.length === 0)
        return undefined;
    return q[0];
}

async function getQuizList() {
    return quizList;
}

async function getQuestions(quizName) {
    let questions = [];
    questionsList.map((questionList) => {
            if (questionList.name === quizName) {
                questions = questionList;
            }
        }
    );
    return questions;
}

async function addQuiz(data) {
    quizList.push(data);
    console.log(quizList);
    return {ok: true};
}

async function addQuestion(data, id) {
    let quiz = getQuizById(id);
    quiz.questions.push(data);
    console.log(quiz);

    return {ok: true};
}