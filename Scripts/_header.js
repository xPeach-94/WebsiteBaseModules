let headerLinks = ["Home", "Blog", "Projects"];


var menuContent = document.getElementById("headerLinksID");

var ul = document.createElement("ul");
ul.classList.add("flex");

headerLinks.forEach(link => 
{
    var li = document.createElement("li");
    var linkName = document.createElement("a");
    
    if (link == "Home") 
    {
        linkName.setAttribute("href", "index.html");
    }
    else
    {
        linkName.setAttribute("href", link.replace(/\s/g, '')+".html");
    }

    linkName.innerHTML = link;
    li.appendChild(linkName)
    ul.appendChild(li);
});

menuContent.appendChild(ul);