var slideIndex = 1;
 showSlides(slideIndex);
function plusSlides(n) {
   showSlides(slideIndex += n);
 }
function currentSlide(n) {
   showSlides(slideIndex = n);
 }
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
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
 $('#header__about-item').hover(
       function(){ $(this).addClass('text-blue') },
       function(){ $(this).removeClass('text-blue') }
)
$('#header__about-item2').hover(
       function(){ $(this).addClass('text-blue') },
       function(){ $(this).removeClass('text-blue') }
)
$('#header__about-item3').hover(
       function(){ $(this).addClass('text-blue') },
       function(){ $(this).removeClass('text-blue') }
)

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    items: 5,
    autoPlay: 3000,
    itemsDesktop: [1170, 5],
    navigation: true,
  });
});