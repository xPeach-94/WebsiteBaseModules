const rightArrow = "&#10163";
const pawn = "&#9823;";

let playground = document.getElementById("mensErgerJeMinder");
playground.classList.add("flex");
playground.classList.add("vertical");

let players = [];

function keyEnter(el) // enter key works in player amount textbox to continue
{
    if (el.id == "playerAmount") 
    {
        if(event.key == "Enter") 
        {
            confirmPlayerAmount();
        }
    }
}

const createStartup = function() // initial board startup
{
    let heading = document.createElement("h1");
    heading.innerHTML = "Mens Erger je Minder";

    let playgroundContainer = document.createElement("div");
    playgroundContainer.classList.add("flex");
    playgroundContainer.classList.add("playgroundContainer")

    let table = document.createElement("table");
    table.classList.add("flex");
    table.classList.add("vertical");
    table.style.justifyContent = "center";
    table.style.gap = "0px";

    let diceContainer = document.createElement("div");
    diceContainer.id = "diceContainer";
    diceContainer.classList.add("diceContainer");

    for (let i = 1; i <= 7; i++) 
    {
        // add 7 rows
        let tr = document.createElement("tr");
        tr.classList.add("flex");

        // for each row added, add 7 boxes as steps
        for (let x = 1; x <= 7; x++) 
        {
            let td = document.createElement("td");
            td.classList.add("flex");
            let div = document.createElement("div");
            
            div.id = (numberToLetterSwitch(i) + x);
            
            // arrows
            if (div.id == "A5" || div.id == "C1" || div.id == "E7" || div.id == "G3")
            {
                let startArrow = document.createElement("p");
                startArrow.innerHTML = rightArrow;
                startArrow.classList.add("startArrow")

                switch (div.id) 
                {
                    case "A5":
                    {
                        startArrow.classList.add("greenArrow");
                        break;
                    }
                    case "C1":
                    {
                        // yellow arrow is already good rotation
                        break;
                    }
                    case "E7":
                    {
                        startArrow.classList.add("redArrow");
                        break;
                    }
                    case "G3":
                    {
                        startArrow.classList.add("blueArrow");
                        break;
                    }
                        
                
                    default:
                        console.log("something went wrong :(", uID);
                        break;
                }
                
                div.appendChild(startArrow);
            }

            div.classList.add("circle");
            div.classList.add("flex");

            td.appendChild(div);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    playgroundContainer.appendChild(table);
    playgroundContainer.appendChild(diceContainer);
    playground.appendChild(heading);
    playground.appendChild(playgroundContainer);

    // Scripts/Modules/Module_Dice.js
    createDice();
}

const popupForm = function() // the form that gives player the choice of how many and what color to play with
{
    // https://www.w3schools.com/howto/howto_js_popup_form.asp
    let formDiv = document.createElement("div");
    formDiv.classList.add("form-popup");
    formDiv.classList.add("flex");
    formDiv.classList.add("vertical");
    formDiv.id = "myForm";

    let title = document.createElement("h1");
    title.innerHTML = "How many Players?";

    let inputContainer = document.createElement("div");
    inputContainer.classList.add("flex");
    inputContainer.classList.add("inputContainer")
    inputContainer.id = "playerAmount";
    inputContainer.setAttribute("onkeydown", "keyEnter(this)");

    let playerAmountInput = document.createElement("input");
    playerAmountInput.classList.add("playerInp");
    playerAmountInput.type = "text";
    playerAmountInput.placeholder = "1-4";
    playerAmountInput.id = "playerAmountInp";

    let enterBtn = document.createElement("button");
    enterBtn.innerHTML = "&#9745;";
    enterBtn.id = "enterBtnId";
    enterBtn.classList.add("enterBtn");
    enterBtn.setAttribute("onclick", "confirmPlayerAmount()");

    let playerColorContainer = document.createElement("div");
    playerColorContainer.id = "playerColorContainerID";
    playerColorContainer.classList.add("playerColorContainer");
    playerColorContainer.classList.add("flex");
    playerColorContainer.classList.add("vertical");
    playerColorContainer.classList.add("hidden");

    let filler = document.createElement("div");
    filler.classList.add("filler");

    inputContainer.appendChild(playerAmountInput);
    inputContainer.appendChild(enterBtn);

    formDiv.appendChild(title);
    formDiv.appendChild(inputContainer)

    // radio choices
    for (let i = 1; i <= 4; i++) 
    {
        let playerColorDiv = document.createElement("div");
        playerColorDiv.classList.add("flex");
        playerColorDiv.classList.add("playerColorDiv");
        playerColorDiv.classList.add("hidden");
        playerColorDiv.id = "Player"+i

        let playerLabel = document.createElement("p");
        playerLabel.innerHTML = "Player " +i;

        let radioDiv = document.createElement("div");
        radioDiv.classList.add("radioDiv");

        let greenDiv = document.createElement("div");
        let greenRadio = document.createElement("input");
        greenRadio.type = "radio";
        greenRadio.id = "greenRadio"+i;
        greenRadio.name = "color"+i;
        greenRadio.setAttribute("onchange", "disableColor(this)");
        let greenLabel = document.createElement("label");
        greenLabel.setAttribute("for", "greenRadio"+i);
        greenLabel.innerHTML = "Green";
        greenDiv.appendChild(greenRadio);
        greenDiv.appendChild(greenLabel);

        let redDiv = document.createElement("div");
        let redRadio = document.createElement("input");
        redRadio.type = "radio";
        redRadio.id = "redRadio"+i;
        redRadio.name = "color"+i;
        redRadio.setAttribute("onchange", "disableColor(this)");
        let redLabel = document.createElement("label");
        redLabel.setAttribute("for", "redRadio"+i);
        redLabel.innerHTML = "Red";
        redDiv.appendChild(redRadio);
        redDiv.appendChild(redLabel);

        let blueDiv = document.createElement("div");
        let blueRadio = document.createElement("input");
        blueRadio.type = "radio";
        blueRadio.id = "blueRadio"+i;
        blueRadio.name = "color"+i;
        blueRadio.setAttribute("onchange", "disableColor(this)");
        let blueLabel = document.createElement("label");
        blueLabel.setAttribute("for", "blueRadio"+i);
        blueLabel.innerHTML = "Blue";
        blueDiv.appendChild(blueRadio);
        blueDiv.appendChild(blueLabel);

        let yellowDiv = document.createElement("div");
        let yellowRadio = document.createElement("input");
        yellowRadio.type = "radio";
        yellowRadio.id = "yellowRadio"+i;
        yellowRadio.name = "color"+i;
        yellowRadio.setAttribute("onchange", "disableColor(this)");
        let yellowLabel = document.createElement("label");
        yellowLabel.setAttribute("for", "yellowRadio"+i);
        yellowLabel.innerHTML = "Yellow";
        yellowDiv.appendChild(yellowRadio);
        yellowDiv.appendChild(yellowLabel);

        radioDiv.appendChild(greenDiv);
        radioDiv.appendChild(redDiv);
        radioDiv.appendChild(blueDiv);
        radioDiv.appendChild(yellowDiv);

        playerColorDiv.appendChild(playerLabel);
        playerColorDiv.appendChild(radioDiv);

        playerColorContainer.appendChild(playerColorDiv);
    }

    let start = document.createElement("button");
    start.innerHTML = "Start Game";
    start.classList.add("startGame");
    start.id = "startBtn";
    start.setAttribute("onclick", "startGame()")
    start.disabled = "true";

    formDiv.appendChild(playerColorContainer);

    formDiv.appendChild(filler);
    formDiv.appendChild(start);

    playground.appendChild(formDiv);
}

const closeForm = function() // closes the form when the start button is pressed
{
    document.getElementById("myForm").style.display = "none";
}

const confirmPlayerAmount = function() // checks if there are 4 players or less playing or get an error
{
    let amountOfPlayers = document.getElementById("playerAmountInp");

    if (amountOfPlayers.value >= 1 && amountOfPlayers.value <= 4) 
    {
        document.getElementById("playerAmountInp").disabled = "true";
        document.getElementById("enterBtnId").disabled = "true";

        let playerColorContainer = document.getElementById("playerColorContainerID");
        playerColorContainer.classList.toggle("hidden");

        for (let i = 1; i <= amountOfPlayers.value; i++) 
        {
            document.getElementById("Player"+i).classList.toggle("hidden");
        }
    }
    else
    {
        window.alert("Not the right amount of players. Player amount: "+ amountOfPlayers.value);
    }
}

const disableColor = function(el) // checks if a player has already chosen a specific color and disables it for the remaining players
{
    let amountOfPlayers = document.getElementById("playerAmountInp").value;

    let playerId = el.id;
    playerId = playerId[playerId.length -1];
    let playerColor = el.id.replace(/[0-9]/g, '');
    playerColor = playerColor.replace("Radio", "")

    console.log(playerColor, playerId);

    if (amountOfPlayers >1) // only needs to check for diffrent colors with more than 1 player
    {
        players[playerId-1] = playerColor;

        for (let i = 1; i <= amountOfPlayers; i++)  // resetting of the radio buttons to change after first choice
        {
            document.getElementById("greenRadio"+i).disabled = false;
            document.getElementById("redRadio"+i).disabled = false;
            document.getElementById("blueRadio"+i).disabled = false;
            document.getElementById("yellowRadio"+i).disabled = false;
        }

        players.forEach(color => // disabling the color for other players after chosen
        {
            for (let i = 1; i <= amountOfPlayers; i++) 
            {
                document.getElementById(color+"Radio"+i).disabled = true;
            }
        });
    }
    else // if there's only one player playing, still add the color to the players array
    {
        players[0] = (playerColor);
    }

    // if everyone has chosen, unlock the start button to be pressed
    if (players.length == amountOfPlayers) 
    {
        document.getElementById("startBtn").disabled = false;
    }
}

const startGame = function() // the start button has been pressed, the game begins
{ 
    // close the pop up form to start the game
    closeForm();

    // show the pawns of the correct colors on the starting positions
    showPawns();

    // the playing order is green, red, blue, yellow and back to green
    // once the player has thrown 6, the player had to put a pawn on the first step
}

const stepSwitch = function(step)
{
    switch (step) 
    {
        case 1:
        {
            return "A5"
        }
        case 2:
        {
            return "B5"
        }
        case 3:
        {
            return "C5"
        }
        case 4:
        {
            return "C6"
        }
        case 5:
        {
            return "C7"
        }
        case 6:
        {
            return "D7"
        }
        case 7:
        {
            return "E7"
        }
        case 8:
        {
            return "E6"
        }
        case 9:
        {
            return "E5"
        }
        case 10:
        {
            return "F5"
        }
        case 11:
        {
            return "G5"
        }
        case 12:
        {
            return "G4"
        }
        case 13:
        {
            return "G3"
        }
        case 14:
        {
            return "F3"
        }
        case 15:
        {
            return "E3"
        }
        case 16:
        {
            return "E2"
        }
        case 17:
        {
            return "E1"
        }
        case 18:
        {
            return "D1"
        }
        case 19:
        {
            return "C1"
        }
        case 20:
        {
            return "C2"
        }
        case 21:
        {
            return "C3"
        }
        case 22:
        {
            return "B3"
        }
        case 23:
        {
            return "A3"
        }
        case 24:
        {
            return "A4"
        }
    
        default:
            console.log("something went wrong :(", step);
            break;
    }
}

const showPawns = function()
{
    players.forEach(color => 
    {
        if (color == "green") 
        {
            for (let i = 1; i <= 2; i++) 
            {
                if (i == 1) 
                {
                    let green1Container = document.createElement("div");
                    let green1 = document.createElement("p");
                    green1.innerHTML = pawn;
                    green1.classList.add("green");

                    let startPos1 = document.getElementById("A7");

                    green1Container.appendChild(green1);
                    startPos1.appendChild(green1Container);
                }
                else
                {
                    let green2Container = document.createElement("div");
                    let green2 = document.createElement("p");
                    green2.innerHTML = pawn;
                    green2.classList.add("green");

                    let startPos2 = document.getElementById("B6");

                    green2Container.appendChild(green2);
                    startPos2.appendChild(green2Container);
                }
            }
        }
        else if (color == "red") 
        {
            for (let i = 1; i <= 2; i++) 
            {
                if (i == 1) 
                {
                    let red1Container = document.createElement("div");
                    let red1 = document.createElement("p");
                    red1.innerHTML = pawn;
                    red1.classList.add("red");

                    let startPos1 = document.getElementById("F6");

                    red1Container.appendChild(red1);
                    startPos1.appendChild(red1Container);
                }
                else
                {
                    let red2Container = document.createElement("div");
                    let red2 = document.createElement("p");
                    red2.innerHTML = pawn;
                    red2.classList.add("red");

                    let startPos2 = document.getElementById("G7");

                    red2Container.appendChild(red2);
                    startPos2.appendChild(red2Container);
                }
            }
        }
        else if (color == "blue") 
        {
            for (let i = 1; i <= 2; i++) 
            {
                if (i == 1) 
                {
                    let blue1Container = document.createElement("div");
                    let blue1 = document.createElement("p");
                    blue1.innerHTML = pawn;
                    blue1.classList.add("blue");

                    let startPos1 = document.getElementById("F2");

                    blue1Container.appendChild(blue1);
                    startPos1.appendChild(blue1Container);
                }
                else
                {
                    let blue2Container = document.createElement("div");
                    let blue2 = document.createElement("p");
                    blue2.innerHTML = pawn;
                    blue2.classList.add("blue");

                    let startPos2 = document.getElementById("G1");

                    blue2Container.appendChild(blue2);
                    startPos2.appendChild(blue2Container);
                }
            }
        }
        else if (color == "yellow") 
        {
            for (let i = 1; i <= 2; i++) 
            {
                if (i == 1) 
                {
                    let yellow1Container = document.createElement("div");
                    let yellow1 = document.createElement("p");
                    yellow1.innerHTML = pawn;
                    yellow1.classList.add("yellow");

                    let startPos1 = document.getElementById("A1");

                    yellow1Container.appendChild(yellow1);
                    startPos1.appendChild(yellow1Container);
                }
                else
                {
                    let yellow2Container = document.createElement("div");
                    let yellow2 = document.createElement("p");
                    yellow2.innerHTML = pawn;
                    yellow2.classList.add("yellow");

                    let startPos2 = document.getElementById("B2");

                    yellow2Container.appendChild(yellow2);
                    startPos2.appendChild(yellow2Container);
                }
            }
        }
    });
}

createStartup();

popupForm();

players = ['green', 'blue'];
console.log(players);
startGame();
