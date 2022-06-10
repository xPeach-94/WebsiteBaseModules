let icon = "hamburger"; // hamburger, kebab, hotdog, fries, strawberry, chocolate
let navDirection = "topHorizontalCenter"; // topVerticalLeft, topVerticalRight, topHorizontalCenter, topHorizontalLeft, topHorizontalRight
let links = ["home", "About Us", "Shop", "Return"];


const menuIcon = function(shape)
{
    switch (shape) 
    {
        case "hamburger":
        {
            for (let i = 0; i < 3; i++) 
            {
                let hamburgerMenuBar = document.createElement("div");
                hamburgerMenuBar.setAttribute("class", "hamburgerMenuBar");
                
                menuBtn.appendChild(hamburgerMenuBar);
            }
            break;
        }
        
        case "kebab":
        {
            for (let i = 0; i < 3; i++) 
            {
                let kebabMenuBar = document.createElement("div");
                kebabMenuBar.setAttribute("class", "kebabMenuBar");
                
                menuBtn.appendChild(kebabMenuBar);
            }
            break;
        }

        case "hotdog":
        {
            for (let i = 0; i < 3; i++) 
            {
                let hotdogMenuBar = document.createElement("div");
                hotdogMenuBar.setAttribute("class", "hotdogMenuBar");
                
                menuBtn.appendChild(hotdogMenuBar);
            }
            break;
        }

        case "fries":
        {
            for (let i = 0; i < 3; i++) 
            {
                let friesMenuBar = document.createElement("div");
                friesMenuBar.setAttribute("class", "friesMenuBar");
                
                menuBtn.appendChild(friesMenuBar);
            }
            break;
        }

        case "strawberry":
        {
            for (let i = 0; i < 3; i++) 
            {
                let strawberryMenuBar = document.createElement("div");
                strawberryMenuBar.setAttribute("class", "strawberryMenuBar");
                
                menuBtn.appendChild(strawberryMenuBar);
            }
            break;
        }

        case "chocolate":
        {
            for (let i = 0; i < 3; i++) 
            {
                let barDiv = document.createElement("div");
                barDiv.setAttribute("class", "chocolateBarDiv");
                for (let x = 0; x < 3; x++) 
                {
                    let chocolateMenuBar = document.createElement("div");
                    chocolateMenuBar.setAttribute("class", "chocolateMenuBar");
                    
                    barDiv.appendChild(chocolateMenuBar);
                }
                menuBtn.appendChild(barDiv);
            }
            break;
        }

        default:
            console.log("Pick another Icon");
            break;
    }
}

const navClick = function(direction = navDirection)
{
    let btnContent = document.getElementById("dropdownContentId");

    // change class to match direction
    switch (direction) 
    {
        case "topVerticalLeft":
        {
            btnContent.classList.toggle("topVerticalLeft");
            break;
        }

        case "topVerticalRight":
        {
            btnContent.classList.toggle("topVerticalRight");
            break;
        }

        case "topHorizontalCenter":
        {
            btnContent.classList.toggle("topHorizontalCenter");
            break;
        }

        case "topHorizontalLeft":
        {
            btnContent.classList.toggle("topHorizontalLeft");
            break;
        }

        case "topHorizontalRight":
        {
            btnContent.classList.toggle("topHorizontalRight");
            break;
        }
            
        default:
            console.log("Pick diffrend direction");
            break;
    }

}

const removeMenu = function(direction = navDirection)
{
    let btnContent = document.getElementById("dropdownContentId");
    switch (direction) 
    {
        case "topVerticalLeft":
        {
            btnContent.classList.remove("topVerticalLeft");
            break;
        }

        case "topVerticalRight":
        {
            btnContent.classList.remove("topVerticalRight");
            break;
        }

        case "topHorizontalCenter":
        {
            btnContent.classList.remove("topHorizontalCenter");
            break;
        }

        case "topHorizontalLeft":
        {
            btnContent.classList.remove("topHorizontalLeft");
            break;
        }

        case "topHorizontalRight":
        {
            btnContent.classList.remove("topHorizontalRight");
            break;
        }
            
        default:
            console.log("Pick diffrend direction");
            break;
    }
}

//https://alvarotrigo.com/blog/hamburger-menu-css/


// create menu button
var menu = document.getElementById("menuPlaceholder");

let menuNav = document.createElement("nav");
menuNav.setAttribute("class", "dropdown");

let menuBtn = document.createElement("button");
menuBtn.setAttribute("type", "dropbtn");
menuBtn.setAttribute("class", "menuBtn");
menuBtn.setAttribute("onclick", "navClick()");
menuIcon(icon); 


// create dropdown container
let menuContent = document.createElement("div");
menuContent.setAttribute("class", "dropdownContent");
menuContent.setAttribute("id", "dropdownContentId");

links.forEach(link => 
{
    let linkName = document.createElement("a");
    linkName.setAttribute("href", link.replace(/\s/g, '')+".html");
    linkName.innerHTML = link;
    menuContent.appendChild(linkName);
});

menuNav.appendChild(menuBtn);
menuNav.appendChild(menuContent);

menu.appendChild(menuNav);

