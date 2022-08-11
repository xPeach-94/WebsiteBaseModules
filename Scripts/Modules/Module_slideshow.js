// https://www.w3schools.com/howto/howto_js_slideshow.asp

let imgSrc = [
    "Images/Nature/WhatsApp Image 2022-07-23 at 5.42.11 PM.jpeg",
    "Images/Nature/WhatsApp Image 2022-07-23 at 5.42.20 PM.jpeg",
    "Images/Nature/WhatsApp Image 2022-07-23 at 5.42.21 PM.jpeg",
    "Images/Nature/WhatsApp Image 2022-07-23 at 5.42.23 PM(2).jpeg",
    "Images/Nature/WhatsApp Image 2022-07-23 at 5.42.24 PM.jpeg"
];

let slideShowHeight = "50vh";
let slideShowWidth = "100%";



let natureSlideshow = document.getElementById("natureSlideshow");
natureSlideshow.style.paddingBottom = "50px";
natureSlideshow.style.height = slideShowHeight;
natureSlideshow.style.width = slideShowWidth;

let slideshowContainer = document.createElement("div");
slideshowContainer.classList.add("slideshowContainer");

// img slides
imgSrc.forEach(src => 
{
    let slide = document.createElement("div");
    let img = document.createElement("img");

    // slide.classList.add("slide");
    slide.classList.add("slide");
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
prev.setAttribute("onclick", "plusSlides(-1)");
prev.innerHTML = "&#10094;";

next.classList.add("next");
next.setAttribute("onclick", "plusSlides(1)");
next.innerHTML = "&#10095;";

slideshowContainer.appendChild(prev);
slideshowContainer.appendChild(next);


natureSlideshow.appendChild(slideshowContainer);


// Dots

let dotContainer = document.createElement("div");
dotContainer.classList.add("dotContainer");

for (let i = 1; i < imgSrc.length +1; i++) 
{
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("onclick", "currentSlide("+i+")");

    dotContainer.appendChild(dot);
}

slideshowContainer.appendChild(dotContainer);


// Functionality

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}