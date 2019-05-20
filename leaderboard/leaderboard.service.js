module.exports = {
    getLeaderboard,
    addScore,
};

let scores = [
    {
        username: 'LéoNicaisse',
        score: 1000000000,
    },
    {
        username: 'AnthonyCollier',
        score: 999999999,
    },
];

async function getLeaderboard() {
    leaderboard = scores.sort(function (a, b) {
        return b.score - a.score;
    });
    return leaderboard;
}

async function addScore(data) {
    let find = false;
    scores.map(function (score, i) {
            if (score.username === data.username) {
                find = true;
                scores[i].score += data.score;
            }
        }
    );
    if (!find) scores.push(data);
    return {ok: true};
}