const rightArrow = "&#10163";
const pawn = "&#9823;";

let playground = document.getElementById("mensErgerJeMinder");
playground.classList.add("flex");
playground.classList.add("vertical");

let players;

function keyEnter(el) 
{
    if (el.id == "playerAmount") 
    {
        if(event.key == "Enter") 
        {
            confirmPlayerAmount();
        }
    }
}

const confirmPlayerAmount = function()
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

const disableColor = function(el)
{
    // https://stackoverflow.com/questions/7272154/parsing-number-from-string
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

    // parse the number out if this string to match against the other players
    console.log(el.id);
}

const startGame = function()
{
    console.log("START");
}

const popupForm = function()
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
    start.setAttribute("onclick", "startGame()")
    start.disabled = "true";

    formDiv.appendChild(playerColorContainer);

    formDiv.appendChild(filler);
    formDiv.appendChild(start);

    playground.appendChild(formDiv);
}

const createStartup = function()
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
        let tr = document.createElement("tr");
        tr.classList.add("flex");
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

    createDice();
}

createStartup();

popupForm();