//var x= document.getElementsByTagName("body")
var y= document.getElementsByClassName("menu")
var z= document.getElementsByClassName("menu-btn")

function showMenu(){
    //x[0].style.display="none"
    y[0].style.display="block"
    z[0].style.border="1px solid black"
}

function closeMenu(){
    y[0].style.display="none"
    //x[0].style.display="block"
    //console.log(y[0].style)
    ////[0].style.animation="slide-out-bck-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both"
    //x[0].style.webkitAnimation="tilt-in-fwd-tl 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both" 
    z[0].style.border="1px solid white"
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}