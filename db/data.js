const categories = [
    {
        id: 1,
        name: 'Série TV',
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
            }
        ]
    },
];

exports.getCategories = () => {
    return categories;
};