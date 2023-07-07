//text auto type script

const typed = new Typed(".auto-type",{
    strings: ["Improve your Business"],
    typeSpeed:150,
     backSpeed:150,
     loop:true
})

//open the main nav unorder lists
function opentoggle(){
    document.getElementById("mainNav").style.left="0";
}
//close the main nav lists
function closetoggle(){
    document.getElementById("mainNav").style.left="-100%";
}

//scroll on top function script

const mybutton = document.getElementById("scroll");
window.onscroll = function() {scrollings()};

function scrollings() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
