
const typed = new Typed(".auto-type",{
    strings: ["Improve your Business"],
    typeSpeed:150,
     backSpeed:150,
     loop:true
})


//open the main nav unorder list
function opentoggle(){
    document.getElementById("mainNav").style.left="0";
}
//close the main nav lists
function closetoggle(){
    document.getElementById("mainNav").style.left="-100%";
}