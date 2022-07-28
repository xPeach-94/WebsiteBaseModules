// https://www.w3schools.com/howto/howto_js_slideshow.asp

let slide1ImgSrc = [
    "https://www.eea.europa.eu/themes/biodiversity/state-of-nature-in-the-eu/state-of-nature-2020-subtopic/image_print",
    "https://thumbs.dreamstime.com/b/belle-for%C3%AAt-tropicale-%C3%A0-l-itin%C3%A9raire-am%C3%A9nag%C3%A9-pour-amateurs-de-la-nature-de-ka-d-ang-36703721.jpg",
    "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/1:1/w_2000,h_2000,c_limit/gettyimages-1146431497.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
    "https://dutchreview.com/wp-content/uploads/image00001-1-e1597223439731.jpeg"
];

let slide2ImgSrc = [
    "https://cdn.britannica.com/37/154237-050-A76A506D/blue-peafowl-tail-Indian-peacock-courtship-displays.jpg",
    "https://site-547756.mozfiles.com/files/547756/medium/peacock.jpg",
    "https://i.guim.co.uk/img/media/80f866674f2a6d03dfbbcddff7475aeec325951e/0_158_2000_1200/master/2000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=dd55996fbafe3383299e0022f04e7ed9",
    "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B980%2C853%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2021%2F10%2F06%2Fpeacock-displayed-feathers-getty-1021-2000.jpg"
];

let slide3ImgSrc = [
    "https://cdn.britannica.com/37/154237-050-A76A506D/blue-peafowl-tail-Indian-peacock-courtship-displays.jpg",
    "https://site-547756.mozfiles.com/files/547756/medium/peacock.jpg",
    "https://i.guim.co.uk/img/media/80f866674f2a6d03dfbbcddff7475aeec325951e/0_158_2000_1200/master/2000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=dd55996fbafe3383299e0022f04e7ed9",
    "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B980%2C853%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2021%2F10%2F06%2Fpeacock-displayed-feathers-getty-1021-2000.jpg",
    "https://dutchreview.com/wp-content/uploads/image00001-1-e1597223439731.jpeg",
    "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/1:1/w_2000,h_2000,c_limit/gettyimages-1146431497.jpg"
];

let imgSrcs = [slide1ImgSrc, slide2ImgSrc, slide3ImgSrc];

let slideShowHeight = ["30vh", "50vh", "40vh"]

let useDots = [true, true, true];


const createSlideshowElements = function(index, height, useDots)
{
    let slideshow = document.getElementById("slideshow" + index);

    slideshow.style.paddingBottom = "60px";
    slideshow.style.height = height;

    let slideshowContainer = document.createElement("div");
    slideshowContainer.classList.add("slideshowContainer");

    imgSrcs[index -1].forEach(src => 
    {
        let slide = document.createElement("div");
        let img = document.createElement("img");
    
        slide.classList.add("slide");
        slide.classList.add("slides"+index);
        slide.classList.add("fade");
        img.src = src;
        img.classList.add("slideImg");
    
        slide.appendChild(img);
        slideshowContainer.appendChild(slide);
    });

    // Next and previous buttons
    let prev = document.createElement("a");
    let next = document.createElement("a");

    prev.classList.add("prev");
    prev.setAttribute("onclick", "plusSlides(-1, "+ (index-1) +")");
    prev.innerHTML = "&#10094;";

    next.classList.add("next");
    next.setAttribute("onclick", "plusSlides(1, "+ (index-1) +")");
    next.innerHTML = "&#10095;";


    slideshowContainer.appendChild(prev);
    slideshowContainer.appendChild(next);
    slideshow.appendChild(slideshowContainer);


    if (useDots) 
    {
        // Dots

        let dotContainer = document.createElement("div");
        dotContainer.classList.add("dotContainer");

        for (let i = 1; i < imgSrcs[index -1].length +1; i++) 
        {
            let dot = document.createElement("span");
            dot.classList.add("dot");
            dot.setAttribute("onclick", "currentSlide("+i+", "+ (index -1) +")");

            dotContainer.appendChild(dot);
        }    

        slideshow.appendChild(dotContainer);
    }
}


for (let i = 1; i <= 100; i++) 
{
    if (document.getElementById("slideshow" + i) != null) 
    {
        createSlideshowElements(i, slideShowHeight[i-1], useDots[i-1], slideshowI = i);
    }
    else
    {
        break;
    }
}

// Functionality

let slideIndex = [1,1]; // slide number, slide index
let slideId = []

for (let i = 1; i <= imgSrcs.length; i++) 
{
    slideId.push("slides"+i);
}

for (let i = 0; i <= imgSrcs.length; i++) 
{
    showSlides(1, i);
    console.log(i);
}

// showSlides(1, 0);
// showSlides(1, 1);
// showSlides(1, 2);

function plusSlides(slideNumber, slideshowIndex) 
{
    showSlides(slideIndex[slideshowIndex] += slideNumber, slideshowIndex);
}

function currentSlide(slideNumber, slideshowIndex) 
{
    showSlides(slideIndex[slideshowIndex] = slideNumber, slideshowIndex);
}

function showSlides(slideNumber, slideshowIndex) 
{
    let i;
    let x = document.getElementsByClassName(slideId[slideshowIndex]);
    
    
    if (slideNumber > x.length) 
    {
        slideIndex[slideshowIndex] = 1
    }    
    if (slideNumber < 1) 
    {
        console.log(slideNumber);
        slideIndex[slideshowIndex] = x.length
    }
    
    for (i = 0; i < x.length; i++) 
    {
        x[i].style.display = "none";  
    }

    // console.log(x)
    // console.log("slideIndex:", slideIndex)
    // console.log("slideshowIndex", slideshowIndex)
    // console.log("slideIndex[slideshowIndex]", slideIndex[slideshowIndex])

    x[slideIndex[slideshowIndex]-1].style.display = "block";
}