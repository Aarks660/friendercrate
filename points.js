const levels = {

"Nine Circles": {points:1000, list:"Main"},
"Simulation Swarm": {points: 960, list:"Main"},
"Ultra Fairydust": {points:920, list:"Main"},
"-Sirius-": {points:880, list:"Main"},
"Sakupen Egg": {points:840, list:"Main"},
"Deadlocked": {points:800, list:"Main"},
"Syobon Action": {points:760, list:"Main"},
"Troll Madness": {points:720, list:"Main"},
"DEMON PARK": {points:680, list:"Main"},
"Butterfly Effect": {points:640, list:"Main"},
"The Planetarium": {points:600, list:"Main"},
"Problematic": {points:560, list:"Main"},
"Theory of Everything II": {points:520, list:"Main"},
"Retro Circles": {points: 480, list: "Main"},
"Space Circles": {points:440, list:"Main"},

"Invisible Clubstep": {points:420, list:"Extended"},
"Ultra Paracosm": {points:400, list:"Extended"},
"Clubstep": {points:380, list:"Extended"},
"The Farewell": {points:360, list:"Extended"},
"ISpyWithMyLittleEye": {points:340, list:"Extended"},
"Demon Park": {points:320, list:"Extended"},
"Pain Engine": {points:300, list:"Extended"},
"yStep": {points:280, list:"Extended"},
"ForGurt": {points:260, list:"Extended"},
"Electrodynamix": {points:240, list:"Extended"},
"BRAINFUGD": {points:220, list:"Extended"},
"PixeL Dungeon": {points:200, list:"Extended"},
"Panshiyu Modern": {points:180, list:"Extended"},
"GD Gangster Rap": {points:160, list:"Extended"},
"Dash": {points:140, list:"Extended"},
"Aloft": {points:120, list:"Extended"},
"Shiver": {points:100, list:"Extended"},
"To the Floor": {points: 80, list:"Extended"},
"Platinum Adventures": {points:60, list:"Extended"},
"Hexagon Force": {points:40, list:"Extended"},

"THE LIGHTNING ROAD": {points:0, list:"Legacy"},
"Clutterfunk": {points:0, list:"Legacy"},
"Theory of Everything": {points:0, list:"Legacy"},
"The Nightmare": {points:0, list:"Legacy"}

};

const players = {

Aarks: [
"Nine Circles",
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
"Simulation Swarm",
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