const scrollTop=document.getElementById("scrolltop")
//when the page is loaded , hide the scroll to top button
window.onload=() =>{
    scrollTop.style.visibility="hidden";
    scrollTop.style.opacity="0";
}
// if the page is scrolled more than 200px
// show the scroll to top button 
// otherwise hide the button
window.onscroll=() =>{
    if(window.scrollY>200){
        scrollTop.style.visibility="visible";
    scrollTop.style.opacity="1";
    }
    else{
        scrollTop.style.visibility="hidden";
        scrollTop.style.opacity="0";
    }
}
// ==========================
function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);
  