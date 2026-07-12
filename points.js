const levels = {

"Deadlocked": {points:350, list:"Main"},
"Theory of Everything II": {points:330, list:"Main"},
"Clubstep": {points:300, list:"Main"},
"Pain Engine": {points:270, list:"Main"},
"Electrodynamix": {points:250, list:"Main"},

"Nivan Never Clear": {points:220, list:"Extended"},
"Drown": {points:200, list:"Extended"},
"Magmatic Sanctuary": {points:180, list:"Extended"},
"Clutterfunk": {points:150, list:"Extended"},
"Theory of Everything": {points:120, list:"Extended"},
"The Nightmare": {points:100, list:"Extended"},
"Mauveine VII": {points:80, list:"Extended"},
"Sunshine": {points:60, list:"Extended"},
"Cycles": {points:40, list:"Extended"},
"Blast Processing": {points:40, list:"Extended"},

"Flappy UFO": {points:0, list:"Legacy"},
"Jumper": {points:0, list:"Legacy"},
"Outerspace": {points:0, list:"Legacy"}

};

const players = {

Aarks: [
"Deadlocked",
"Theory of Everything II",
"Clubstep",
"Pain Engine",
"Electrodynamix",
"Drown",
"Magmatic Sanctuary",
"Clutterfunk",
"Theory of Everything",
"Mauveine VII",
"Cycles",
"Blast Processing",
"Jumper",
"Outerspace",
],

arxdamn: [
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

let output = "";

for (const player in players){

    let total = 0;
    let main = 0;
    let extended = 0;
    let legacy = 0;

    for(const level of players[player]){

        total += levels[level].points;

        if(levels[level].list == "Main")
            main++;

        else if(levels[level].list == "Extended")
            extended++;

        else
            legacy++;
    }

    output +=
    player + "\n" +
    "Points: " + total + "\n" +
    "Main: " + main + "\n" +
    "Extended: " + extended + "\n" +
    "Legacy: " + legacy + "\n\n";
}

document.getElementById("output").textContent = output;