const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router
    .use(express.static('resources'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use('/quiz', require('./quiz/quiz.controller'))
    .use('/leaderboard', require('./leaderboard/leaderboard.controller'))
    .use((req, res) => {
        res.status(400);
        res.json({
            error: "Bad request"
        });
    });

module.exports = router;