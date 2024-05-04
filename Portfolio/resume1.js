var scrolledbar=document.getElementById("scrooled");
function getDocHeight(){
    var D=document;
    return Math.max(D.body.scrollHeight,	D.body.offsetHeight,	D.body.clientHeight);
}
var docHeight=getDocHeight();
var windowHeight=window.innerHeight;
window.onresize=function(e){
    docHeight=getDocHeight();
    windowHeight=window.innerHeight;
};
function setScrolled(){
    var scrolled=Math.floor((window.scrollY/(docHeight-windowHeight))*100);
    scrolledbar.innerText=scrolled;
}
window.addEventListener('scroll',setScrolled);
