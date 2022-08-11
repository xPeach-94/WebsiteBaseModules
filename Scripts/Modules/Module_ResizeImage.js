const imgResize = function(src, width = "auto", height = "auto")
{
    let imgDiv = document.createElement("div");

    imgDiv.style.width = "100%";

    let img = document.createElement("img");
    
    img.src = src;

    if (width == "" && height == "") 
    {
        img.style.width = "auto";
        img.style.height = "auto";
    }
    else if (width == "" || height == "") 
    {
        if (width == "") 
        {
            img.style.width = "auto";
            img.style.height = height;
        }
        else
        {
            img.style.width = width;
            img.style.height = "auto";
        }
    }
    else
    {
        img.style.width = width;
        img.style.height = height;
    }

    imgDiv.appendChild(img);
    return imgDiv;
}