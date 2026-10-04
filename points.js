const levels = {

"Ultra Fairydust": {points:1000, list:"Main"},
"-Sirius-": {points:950, list:"Main"},
"Sakupen Egg": {points:900, list:"Main"},
"Deadlocked": {points:850, list:"Main"},
"Syobon Action": {points:800, list:"Main"},
"Troll Madness": {points:750, list:"Main"},
"DEMON PARK": {points:700, list:"Main"},
"The Planetarium": {points:650, list:"Main"},
"Problematic": {points:600, list:"Main"},
"Invisible Clubstep": {points:550, list:"Main"},

"Theory of Everything II": {points:520, list:"Extended"},
"Ultra Paracosm": {points:490, list:"Extended"},
"Clubstep": {points:460, list:"Extended"},
"ISpyWithMyLittleEye": {points:430, list:"Extended"},
"Demon Park": {points:400, list:"Extended"},
"Pain Engine": {points:370, list:"Extended"},
"yStep": {points:340, list:"Extended"},
"Electrodynamix": {points:310, list:"Extended"},
"PixeL Dungeon": {points:280, list:"Extended"},
"Panshiyu Modern": {points:250, list:"Extended"},
"GD Gangster Rap": {points:220, list:"Extended"},
"Aloft": {points:190, list:"Extended"},
"Shiver": {points:160, list:"Extended"},
"Platinum Adventures": {points:130, list:"Extended"},
"Hexagon Force": {points:100, list:"Extended"},

"THE LIGHTNING ROAD": {points:0, list:"Legacy"},
"Clutterfunk": {points:0, list:"Legacy"},
"The Nightmare": {points:0, list:"Legacy"}

};

const players = {

Aarks: [
"Ultra Fairydust",
"Sakupen Egg",
"Deadlocked",
"The Planetarium",
"Problematic",
"Theory of Everything II",
"Invisible Clubstep",
"Ultra Paracosm",
"Clubstep",
"Pain Engine",
"PixeL Dungeon",
"Electrodynamix",
"Aloft",
"Panshiyu Modern",
"Shiver",
"Hexagon Force",
"Clutterfunk",
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
"The Nightmare"
],

Niv243: [
"Troll Madness",
"Clutterfunk"
],

ItzShadowPR: [
"Clubstep",
"Electrodynamix"
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