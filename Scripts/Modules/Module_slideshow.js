// https://www.w3schools.com/howto/howto_js_slideshow.asp

let imgSrc = [
    "https://www.eea.europa.eu/themes/biodiversity/state-of-nature-in-the-eu/state-of-nature-2020-subtopic/image_print",
    "https://thumbs.dreamstime.com/b/belle-for%C3%AAt-tropicale-%C3%A0-l-itin%C3%A9raire-am%C3%A9nag%C3%A9-pour-amateurs-de-la-nature-de-ka-d-ang-36703721.jpg",
    "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/1:1/w_2000,h_2000,c_limit/gettyimages-1146431497.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
    "https://dutchreview.com/wp-content/uploads/image00001-1-e1597223439731.jpeg"
];

let slideShowHeight = "30vh"



let slideshow = document.getElementById("slideshow");
slideshow.style.paddingBottom = "60px";
slideshow.style.height = slideShowHeight;

let slideshowContainer = document.createElement("div");
slideshowContainer.classList.add("slideshowContainer");

// img slides
imgSrc.forEach(src => 
{
    let slide = document.createElement("div");
    let img = document.createElement("img");

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


slideshowContainer.appendChild(prev);
slideshowContainer.appendChild(next);
slideshowContainer.appendChild(dotContainer);
slideshow.appendChild(slideshowContainer);



// Functionality

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) 
{
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

// Automatic Slideshow

// showSlides();

// function showSlides() 
// {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 30000);
// }
