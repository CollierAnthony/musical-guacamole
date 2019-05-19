module.exports = {
    getQuizList,
    getQuestions,
    addQuiz,
};

let quizList = [
    {
        id: 1,
        name: "Série TV",
    },
    {
        id: 2,
        name: "Culture Gé",
    }
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
    }
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
    console.log(data);
    quizList.push({
        "id": data.id,
        "name": data.name,
    });
    questionsList.push(data);
    return {ok: true};
}