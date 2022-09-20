const check = "&#10004;";
const enter = "&#10550;";
const replay = "&#10226; Replay";

let score = 0;
let theChosenNumber;


let playground = document.getElementById("numberGame");
playground.classList.add("flex");
playground.classList.add("vertical");

function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}
// console.log(getRandomInt(3));
// // expected output: 0, 1 or 2

function keyEnter(el) 
{
    if (el.id == "rangeInputID") 
    {
        if(event.key == "Enter") 
        {
            startGame();
        }
    }
    else if (el.id == "guessInpID") 
    {
        if(event.key == "Enter") 
        {
            guessNr();
        }
    }
}

const createStartup = function()
{
    let heading = document.createElement("h1");
    heading.innerHTML = "Welcome to Guess the Number!"
    playground.appendChild(heading);

    let startContainer = document.createElement("div")
    startContainer.classList.add("flex");
    startContainer.style.width = "320px";
    let rangeText = document.createElement("p");
    let rangeInput = document.createElement("input");
    let startButton = document.createElement("button");

    rangeText.classList.add("fontSize");
    rangeText.innerHTML = "Range from 0 -";

    rangeInput.classList.add("fontSize");
    rangeInput.classList.add("input");
    rangeInput.type = "number";
    rangeInput.value = "100";
    rangeInput.id = "rangeInputID";
    rangeInput.setAttribute("onkeydown", "keyEnter(this)");

    startButton.classList.add("fontSize");
    startButton.classList.add("button");
    startButton.setAttribute("onclick", "startGame()");
    startButton.innerHTML = check;
    startButton.id = "startButtonID";

    startContainer.appendChild(rangeText);
    startContainer.appendChild(rangeInput);
    startContainer.appendChild(startButton);

    playground.appendChild(startContainer);
}

const createControls = function()
{
    let controlsContainer = document.createElement("div");
    controlsContainer.classList.add("flex");
    controlsContainer.style.width = "150px"

    let guessInp = document.createElement("input");
    guessInp.classList.add("fontSize");
    guessInp.classList.add("input");
    guessInp.type = "number";
    guessInp.id = "guessInpID";
    guessInp.setAttribute("onkeydown", "keyEnter(this)");


    let guessEnter = document.createElement("button");
    guessEnter.classList.add("fontSize");
    guessEnter.classList.add("button");
    guessEnter.classList.add("button--enter");
    guessEnter.setAttribute("onclick", "guessNr()");
    guessEnter.innerHTML = enter;
    guessEnter.id = "guessEnterID";

    controlsContainer.appendChild(guessInp);
    controlsContainer.appendChild(guessEnter);

    let scoreBoard = document.createElement("div");
    scoreBoard.id = "scoreBoard";
    scoreBoard.classList.add("flex");
    scoreBoard.classList.add("vertical");
    scoreBoard.style.gap = "10px";

    playground.appendChild(controlsContainer);
    playground.appendChild(scoreBoard);
}

const startGame = function()
{
    if (document.getElementById("rangeInputID").value != "") 
    {
        document.getElementById("rangeInputID").disabled = true;
        document.getElementById("startButtonID").disabled = true;
        theChosenNumber = getRandomInt(document.getElementById("rangeInputID").value);
        createControls();
    }
    else
    {
        window.alert("You need a max range number");
        document.getElementById("rangeInputID").value = 100;
    }
    
}

const reload = function()
{
    location.reload();
}

const replayGame = function()
{
    let replayBtn = document.createElement("button");
    replayBtn.innerHTML = replay;
    replayBtn.classList.add("button");
    replayBtn.classList.add("button--enter");
    replayBtn.style.fontSize = "2rem";
    replayBtn.setAttribute("onclick", "reload()");


    playground.appendChild(replayBtn);
}

const scoreCount = function()
{
    switch (score) 
    {
        case 1:
        {
            return "&#10112;";
        }
        case 2:
        {
            return "&#10113;";
        }
        case 3:
        {
            return "&#10114;";
        }
        case 4:
        {
            return "&#10115;";
        }
        case 5:
        {
            return "&#10116;";
        }
        case 6:
        {
            return "&#10117;";
        }
        case 7:
        {
            return "&#10118;";
        }
        case 8:
        {
            return "&#10119;";
        }
        case 9:
        {
            return "&#10120;";
        }
        case 0:
        {
            return ("how did you manage to guess " + (score) + " times??? <br> Are you cheating? &#9785;")
        }
    
        default:
        {
            return ("how did you manage to guess " + (score) + " times???");
        }
            
    }
}

const checkNr = function(guess)
{
    let scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.style.gap = "20px";

    if (guess < theChosenNumber) 
    {
        score++
        let answer = document.createElement("p");
        answer.innerHTML = "Higher than " + document.getElementById("guessInpID").value;
        scoreBoard.prepend(answer);
    }
    else if (guess > theChosenNumber) 
    {
        score++
        let answer = document.createElement("p");
        answer.innerHTML = "Lower than " + document.getElementById("guessInpID").value;;
        scoreBoard.prepend(answer);
    }
    else if (guess == theChosenNumber) 
    {
        document.getElementById("guessInpID").disabled = true;
        document.getElementById("guessEnterID").disabled = true;

        scoreBoard.innerHTML = "";
        let answer = document.createElement("p");
        answer.style.fontSize = "3rem";
        answer.style.textAlign = "center";
        answer.innerHTML = "CONGRATULATIONS!!! <br> The number was " + theChosenNumber;
        
        let score = document.createElement("p");
        score.innerHTML = "Your score is: <br>" + scoreCount();
        score.style.fontSize = "2.5rem";
        score.style.textAlign = "center"

        scoreBoard.appendChild(answer);
        scoreBoard.appendChild(score);

        replayGame();
    }
}

const guessNr = function()
{
    var guess = document.getElementById("guessInpID");

    if (guess.value != "") 
    {
        checkNr(guess.value);
        guess.value = "";
    }
    else
    {
        window.alert("You left your guess blank!");
    }
}

createStartup();