let playground = document.getElementById("mensErgerJeMinder");
playground.classList.add("flex");
playground.classList.add("vertical");

const pawn = "&#9823;";

const createStartup = function()
{
    let heading = document.createElement("h1");
    heading.innerHTML = "Mens Erger je Minder"
    let table = document.createElement("table");
    table.classList.add("flex");
    table.classList.add("vertical");
    table.style.justifyContent = "center";
    table.style.gap = "0px";
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
            div.classList.add("circle");

            td.appendChild(div);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    playground.appendChild(heading);
    playground.appendChild(table);
}

createStartup();