const rightArrow = "&#10163";
const pawn = "&#9823;";

let playground = document.getElementById("mensErgerJeMinder");
playground.classList.add("flex");
playground.classList.add("vertical");

let players;

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

    let uID = 0;

    for (let i = 0; i < 7; i++) 
    {
        let tr = document.createElement("tr");
        tr.classList.add("flex");
        for (let x = 0; x < 7; x++) 
        {
            uID++;
            let td = document.createElement("td");
            td.classList.add("flex");
            let div = document.createElement("div");
            div.id = "step"+uID;
            if (uID == 5 || uID == 15 || uID == 35 || uID == 45) // adding arrows to starting positions
            {
                let startArrow = document.createElement("p");
                startArrow.innerHTML = rightArrow;
                startArrow.classList.add("startArrow")

                switch (uID) 
                {
                    case 5:
                    {
                        startArrow.classList.add("greenArrow");
                        break;
                    }
                    case 15:
                    {
                        // yellow arrow is already good rotation
                        break;
                    }
                    case 35:
                    {
                        startArrow.classList.add("redArrow");
                        break;
                    }
                    case 45:
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


    // players = window.prompt("How many players?");

    // console.log(players)
}

createStartup();