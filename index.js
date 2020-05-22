var inquirer = require('inquirer');

var Player = class Player {
    constructor(name) {
        this.name = name;
    }
}


var initialPlayers = [
    {
        type: 'input',
        name: 'player1',
        message: "(Spieler 1) Gib deinen Namen ein:",
        default: function () {
            return 'Spieler 1';
        }
    },
    {
        type: 'input',
        name: 'player2',
        message: "(Spieler 2) Gib deinen Namen ein:",
        default: function () {
            return 'Spieler 2';
        }
    },
];

var availableFigures = [
    {
        type: 'list',
        name: 'figures',
        message: 'Wähle deine Spielfigure aus!',
        choices: [
            'A1', 'B1', 'C1', 'D1',
        ]
    }
];

let player1;
let player2;

inquirer.prompt(initialPlayers).then(selectedPlayers => {
    player1 = new Player(selectedPlayers.player1);
    player2 = new Player(selectedPlayers.player2);
    console.log(player1, player2)

    makeMove();
});

function makeMove() {
    inquirer.prompt(availableFigures).then(selectedFigure => {
        console.log(selectedFigure);
        if (selectedFigure) {
            makeMove();
        } else {
            console.log('Something get wrong ...');
        }
    });
}