const levels = {

"Deadlocked": {points:350, list:"Main"},
"Theory of Everything II": {points:330, list:"Main"},
"Clubstep": {points:300, list:"Main"},
"The Planetarium": {points:270, list:"Main"},
"Pain Engine": {points:250, list:"Main"},

"Electrodynamix": {points:220, list:"Extended"},
"Nivan Never Clear": {points:200, list:"Extended"},
"Drown": {points:180, list:"Extended"},
"Panshiyu Modern": {points:150, list:"Extended"},
"Magmatic Sanctuary": {points:120, list:"Extended"},
"To The Floor": {points:100, list:"Extended"},
"Clutterfunk": {points:80, list:"Extended"},
"Theory of Everything": {points:60, list:"Extended"},
"The Nightmare": {points:40, list:"Extended"},
"Mauveine VII": {points:20, list:"Extended"},

"Sunshine": {points:0, list:"Legacy"},
"Cycles": {points:0, list:"Legacy"},
"Blast Processing": {points:0, list:"Legacy"},
"Flappy UFO": {points:0, list:"Legacy"},
"Jumper": {points:0, list:"Legacy"},
"Outerspace": {points:0, list:"Legacy"}

};

const players = {

Aarks: [
"Deadlocked",
"Theory of Everything II",
"Clubstep",
"The Planetarium",
"Pain Engine",
"Electrodynamix",
"Drown",
"Panshiyu Modern",
"Magmatic Sanctuary",
"To The Floor",
"Clutterfunk",
"Theory of Everything",
"Mauveine VII",
"Cycles",
"Blast Processing",
"Jumper",
"Outerspace",
],

arxdamn: [
"Clubstep",
"Electrodynamix",
"Clutterfunk",
"Theory of Everything",
"The Nightmare",
"Sunshine",
"Cycles",
"Blast Processing",
"Jumper",
"Flappy UFO",
"Outerspace"
],

Niv243: [
"Clutterfunk",
"Theory of Everything",
"Cycles",
"Blast Processing",
"Jumper"
],

WiredMK: [
"Nivan Never Clear",
"Cycles",
"Blast Processing",
"Jumper"
],

ItzShadowPR: [
"Cycles",
"Blast Processing",
"Jumper"
],

Ridhasaul: [
"Jumper"
]

};

const leaderboard = [];

for (const player in players) {

    let total = 0;
    let main = 0;
    let extended = 0;
    let legacy = 0;

    for (const level of players[player]) {

        total += levels[level].points;

        if (levels[level].list === "Main")
            main++;
        else if (levels[level].list === "Extended")
            extended++;
        else
            legacy++;
    }

    leaderboard.push({
        player,
        total,
        main,
        extended,
        legacy
    });
}
leaderboard.sort((a, b) => b.total - a.total);
const tbody = document.querySelector("#pointsTable tbody");

for (const p of leaderboard) {

    tbody.innerHTML += `
        <tr>
            <td>${p.player}</td>
            <td>${p.total}</td>
            <td>${p.main}</td>
            <td>${p.extended}</td>
            <td>${p.legacy}</td>
        </tr>
    `;
}