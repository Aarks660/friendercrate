const levels = {

"-Sirius-": {points:1000, list:"Main"},
"Deadlocked": {points:950, list:"Main"},
"Syobon Action": {points:900, list:"Main"},
"Troll Madness": {points:850, list:"Main"},
"DEMON PARK": {points:800, list:"Main"},
"The Planetarium": {points:750, list:"Main"},
"Problematic": {points:700, 
list:"Main"},
"Invisible Clubstep": {points:650, list:"Main"},
"Theory of Everything II": {points:600, list:"Main"},
"Ultra Paracosm": {points:550, list:"Main"},

"Clubstep": {points:520, list:"Extended"},
"ISpyWithMyLittleEye": {points:490, list:"Extended"},
"Demon Park": {points:470, list:"Extended"},
"Pain Engine": {points:440, list:"Extended"},
"yStep": {points:410, list:"Extended"},
"Electrodynamix": {points:390, list:"Extended"},
"Nivan Never Clear": {points:370, list:"Extended"},
"PixeL Dungeon": {points:340, list:"Extended"},
"Panshiyu Modern": {points:310, list:"Extended"},
"GD Gangster Rap": {points:290, list:"Extended"},
"Aloft": {points:270, list:"Extended"},
"Platinum Adventures": {points:240, list:"Extended"},
"Shiver": {points:210, list:"Extended"},
"Hexagon Force": {points:190, list:"Extended"},
"THE LIGHTNING ROAD": {points:170, list:"Extended"},

"Clutterfunk": {points:0, list:"Legacy"},
"The Nightmare": {points:0, list:"Legacy"}

};

const players = {

Aarks: [
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

WiredMK: [
"Nivan Never Clear",
"THE LIGHTNING ROAD"
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