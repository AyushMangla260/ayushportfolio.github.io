function linkedin(){
    window.open('https://www.linkedin.com/in/ayush-mangla-9a1a8b1a5', '_blank')};
  
function instagram(){
      window.open('https://www.instagram.com/ayush.mangla_/', '_blank')};
function facebook(){
  window.open('https://www.facebook.com/profile.php?id=100005969476223', '_blank');
}
function google(){
  window.open('mailto:aayushmangla260@gmail.com','_blank');
}
function github(){
    window.open('https://github.com/AyushMangla260','_blank');
}
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
