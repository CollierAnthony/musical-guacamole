const express = require('express');
const router = express.Router();

const leaderboardService = require('./leaderboard.service');

router
    .get('/', (req, res, next) => {
        leaderboardService.getLeaderboard()
            .then(categories => categories ? res.json(categories) : res.status(400).json({message: 'Erreur'}))
            .catch(err => next(err));
    })
    .post('/', (req, res, next) => {
        leaderboardService.addScore(req.body)
            .then(ok => ok ? res.json({message: 'ok'}) : res.status(400).json({message: 'Quelque chose s\'est mal passé'}))
            .catch(err => next(err));
    });

module.exports = router;