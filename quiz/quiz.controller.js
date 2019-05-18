const express = require('express');
const router = express.Router();

const quizService = require('./quiz.service');

router
    .get('/', (req, res, next) => {
        quizService.getQuizList()
            .then(categories => categories ? res.json(categories) : res.status(400).json({message: 'Erreur'}))
            .catch(err => next(err));
    })
    .get('/:name', (req, res, next) => {
        const quizName = req.params.name;
        quizService.getQuestions(quizName)
            .then(questions => questions ? res.json(questions) : res.status(400).json({message: 'Aucun quiz ne correspond à cet id'}))
            .catch(err => next(err));
    })
    .post('/', (req, res, next) => {
        quizService.addQuiz(req.body)
            .then(ok => ok ? res.json({message: 'ok'}) : res.status(400).json({message: 'Quelque chose s\'est mal passé'}))
            .catch(err => next(err));
    })
    .post('/:id', (req, res, next) => {
        idCategorie = req.params.id;
        quizService.addQuestion(req.body, idCategorie)
            .then(ok => ok ? res.json({message: 'ok'}) : res.status(400).json({message: 'Quelque chose s\'est mal passé'}))
            .catch(err => next(err));
    });

module.exports = router;