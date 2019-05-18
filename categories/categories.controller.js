const express = require('express');
const router = express.Router();

const quizService = require('./quiz.service');

router
    .get('/', (req, res, next) => {
        res.json(getCategories());
    })
    .get('/:id', (req, res, next) => {
        const quizId = req.params.id;
        res.json(getQuestions(quizId));
    })
    .post('/', (req, res, next) => {
        res.json(addCategorie());
    })
    .post('/quote', (req, res) => {
        Quotes.insertQuote(req.body);
        res.json(DB.getQuotes());
    });

module.exports = router;