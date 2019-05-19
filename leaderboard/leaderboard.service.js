module.exports = {
    getLeaderboard,
    addScore,
};

let scores = [
    {
        username: 'GillouLeBoss',
        score: 98765,
    },
    {
        username: 'QueenHayenne',
        score: 98764,
    },
    {
        username: 'Dalmass0',
        score: 1,
    },
    {
        username: 'VDub',
        score: 9587,
    },
    {
        username: 'BigZim',
        score: 26541,
    },
    {
        username: 'SebTab',
        score: 89777,
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
                return {ok: true};
            }
        }
    );
    if (!find) scores.push(data);
    return {ok: true};
}