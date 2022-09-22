const diceFace1 = "&#9856;";
const diceFace2 = "&#9857;";
const diceFace3 = "&#9858;";
const diceFace4 = "&#9859;";
const diceFace5 = "&#9860;";
const diceFace6 = "&#9861;";

var amount = 0;

const heading = function(int)
{
    if (!int > 0) 
    {
        let diceContainer = document.getElementById("diceContainer");
        diceContainer.classList.add("flex");
        diceContainer.classList.add("vertical");

        let containerForDice = document.createElement("div");
        containerForDice.id = "cfd";
        containerForDice.classList.add("flex");
        containerForDice.style.flexWrap = "wrap";
        containerForDice.style.width = "100%";

        let shake = document.createElement("h2");
        shake.innerHTML = "Click dice to shake";
        diceContainer.appendChild(shake);
        diceContainer.appendChild(containerForDice);
    }
    
}

const createDice = function()
{
    heading(amount);
    amount++

    let cfd = document.getElementById("cfd");

    let dice1 = document.createElement("div");

    let diceFace = document.createElement("p");
    diceFace.classList.add("diceFace");
    diceFace. setAttribute("onclick", "shakeDice(this)");
    let r = getRandomInt(7);
    if (r != 0) 
    {
        diceFace.innerHTML = diceSwitch(r);
    }
    else
    {
        r = 1;
        diceFace.innerHTML = diceSwitch(r);
    }

    dice1.appendChild(diceFace);
    cfd.appendChild(dice1);
}

const diceSwitch = function(roll)
{
    switch (roll) 
    {
        case 1:
        {
            return diceFace1
        }
        case 2:
        {
            return diceFace2;
        }
        case 3:
        {
            return diceFace3;
        }
        case 4:
        {
            return diceFace4;
        }
        case 5:
        {
            return diceFace5;
        }
        case 6:
        {
            return diceFace6;
        }

        default:
        {
            console.log("something went wrong :(", roll);
            break;
        }            
    }
}

const shakeDice = function(el)
{
    let roll;

    var timer = setInterval(function() 
    {
        let randomInt = getRandomInt(7)
        if (randomInt != 0) 
        {
            roll = diceSwitch(randomInt);
            el.id = randomInt;
            el.innerHTML = roll;
        }
    }, 150);

    setTimeout(function() 
    {
        clearInterval(timer);
    }, getRandomInt(4000));
}