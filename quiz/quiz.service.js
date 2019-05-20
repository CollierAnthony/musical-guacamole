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
        name: "Cuisine",
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
                title: 'Quel était le métier de Walter White avant de devenir Heisenberg ?',
                image: 'https://i.imgur.com/q3UNVzc.png',
                difficulty: 2,
                answers: [
                    {A: 'Professeur de chimie'},
                    {B: 'Laveur de voitures'},
                    {C: 'Pilote de chasse'},
                    {D: 'Prof de web'}
                ]
            },
            {
                id: 3,
                title: 'Dans quelle série apparait ce personnage ?',
                image: 'https://i.imgur.com/OascAKq.png',
                difficulty: 2,
                answers: [
                    {A: 'Games of Thrones'},
                    {B: 'The Big Bang Theory'},
                    {C: 'La casa de Papel'},
                    {D: 'Plus belle la vie'}
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
                title: 'Comment se nomme cette variété de pâtes ?',
                image: 'https://i.imgur.com/JI8m1MF.jpg',
                difficulty: 1,
                answers: [
                    {A: 'Des coquillettes'},
                    {B: 'Des farfales'},
                    {C: 'Des spaghettis'},
                    {D: 'Des cuisses de poulet'}
                ]
            },
            {
                id: 2,
                title: 'Comment dit-on lentilles en turc ?',
                image: 'https://i.imgur.com/psJ9vkO.png',
                difficulty: 5,
                answers: [
                    {A: 'Mercimek'},
                    {B: 'Cimerpottoh'},
                    {C: 'Yogro'},
                    {D: 'Wechkouzin'}
                ]
            },
            {
                id: 3,
                title: 'Lorsqu\'un pancake tombe dans la neige avant le 31 décembre, on dit qu\'il est :',
                image: 'https://i.imgur.com/FCcaRBI.png',
                difficulty: 3,
                answers: [
                    {A: 'Une kippa surgelée'},
                    {B: 'Un frisbee comestible'},
                    {C: 'Tombé dans la neige avant le 31 décembre'},
                    {D: 'La réponse D'}
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