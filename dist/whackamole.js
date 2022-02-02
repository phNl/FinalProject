let gameField = new Array();
let fieldDiv = document.getElementById("field");
let score = 0;
let flag = false; // Если true, то текущая черная кнопка уже была нажата

for (let i = 0; i < 4; i++) {
    let tempArr = new Array();
    for (let j = 0; j < 4; j++) {
        let tempButton = document.createElement('button');
        tempButton.style.backgroundColor == "white"
        tempButton.className = "field-cell";
        tempButton.onclick = function () {
            if (this.style.backgroundColor == "black" && !flag) {
                document.getElementById("score").innerHTML = "Очков: " + score;
                score++;
                flag = true;
            }
        }

        fieldDiv.appendChild(tempButton);
        tempArr.push(fieldDiv.lastChild);
    }

    gameField.push(tempArr);
    fieldDiv.appendChild(document.createElement('br'));
}

let intervalID;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function changeActiveButton() {
    flag = false;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (gameField[i][j].style.backgroundColor == "black")
                gameField[i][j].style.backgroundColor = "white";
        }
    }

    if (score >= 10) {
        score = 0;
        clearInterval(intervalID);
        document.getElementById("score").innerHTML = "Очков: 10";
        alert("Победа");
        document.getElementById("score").innerHTML = "Очков: 0";
        return;
    }

    let tempButton;
    do {
        tempButton = gameField[getRandomInt(4)][getRandomInt(4)];
    } while (tempButton.style.backgroundColor == "black");

    tempButton.style.backgroundColor = "black";
}

document.getElementById("play-button").onclick = function () {
    let difLevel = document.getElementById("difficult-range").value;
    intervalID = setInterval(changeActiveButton, 2000 - difLevel*500);
};