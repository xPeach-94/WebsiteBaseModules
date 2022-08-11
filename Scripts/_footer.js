let footerLinks = ["Service Voorwaarden", "FAQ", "Contact", "Samenwerkingen"];


var menuContent = document.getElementById("footerLinksID");

var ul = document.createElement("ul");
ul.classList.add("flex");

footerLinks.forEach(link => 
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