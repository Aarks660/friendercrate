const levels = {

"Ultra Fairydust": {points:1000, list:"Main"},
"-Sirius-": {points:960, list:"Main"},
"Sakupen Egg": {points:920, list:"Main"},
"Deadlocked": {points:880, list:"Main"},
"Syobon Action": {points:840, list:"Main"},
"Troll Madness": {points:800, list:"Main"},
"DEMON PARK": {points:760, list:"Main"},
"Butterfly Effect": {points:720, list:"Main"},
"The Planetarium": {points:680, list:"Main"},
"Problematic": {points:640, list:"Main"},
"Theory of Everything II": {points:600, list:"Main"},
"Retro Circles": {points: 560, list: "Main"},
"Space Circles": {points:520, list:"Main"},
"Invisible Clubstep": {points:480, list:"Main"},
"Ultra Paracosm": {points:440, list:"Main"},

"Clubstep": {points:420, list:"Extended"},
"The Farewell": {points:400, list:"Extended"},
"ISpyWithMyLittleEye": {points:380, list:"Extended"},
"Demon Park": {points:360, list:"Extended"},
"Pain Engine": {points:340, list:"Extended"},
"yStep": {points:320, list:"Extended"},
"ForGurt": {points:300, list:"Extended"},
"Electrodynamix": {points:280, list:"Extended"},
"BRAINFUGD": {points:260, list:"Extended"},
"PixeL Dungeon": {points:240, list:"Extended"},
"Panshiyu Modern": {points:220, list:"Extended"},
"GD Gangster Rap": {points:200, list:"Extended"},
"Dash": {points:180, list:"Extended"},
"Aloft": {points:160, list:"Extended"},
"Shiver": {points:140, list:"Extended"},
"To the Floor": {points: 120, list:"Extended"},
"Platinum Adventures": {points:100, list:"Extended"},
"Hexagon Force": {points:80, list:"Extended"},
"THE LIGHTNING ROAD": {points:60, list:"Extended"},
"Clutterfunk": {points:40, list:"Extended"},

"Theory of Everything": {points:0, list:"Legacy"},
"The Nightmare": {points:0, list:"Legacy"}

};

const players = {

Aarks: [
"Ultra Fairydust",
"Sakupen Egg",
"Deadlocked",
"Butterfly Effect",
"The Planetarium",
"Problematic",
"Theory of Everything II",
"Space Circles",
"Invisible Clubstep",
"Ultra Paracosm",
"Clubstep",
"Pain Engine",
"PixeL Dungeon",
"Electrodynamix",
"Aloft",
"Panshiyu Modern",
"Shiver",
"To the Floor",
"Hexagon Force",
"Clutterfunk",
"Theory of Everything",
"The Nightmare"
],

arxdamn: [
"-Sirius-",
"Syobon Action",
"DEMON PARK",
"Clubstep",
"ISpyWithMyLittleEye",
"yStep",
"Electrodynamix",
"GD Gangster Rap",
"Aloft",
"Shiver",
"Clutterfunk",
"Hexagon Force",
"Platinum Adventures",
"THE LIGHTNING ROAD",
"Theory of Everything",
"The Nightmare"
],

Niv243: [
"Troll Madness",
"Theory of Everything",
"Clutterfunk",
"The Nightmare"
],

ItzShadowPR: [
"Clubstep",
"The Farewell",
"ForGurt",
"Electrodynamix"
],

Priyansh3452: [
"BRAINFUGD",
"Dash"
],

WiredMK: [
"Retro Circles",
"THE LIGHTNING ROAD",
"The Nightmare"
],

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