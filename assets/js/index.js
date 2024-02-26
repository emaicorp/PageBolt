let toggle = document.getElementById("toggler");
var sidebar = document.querySelector('.sidebar')

var x = 0
var first = document.getElementById("first")
var middle = document.getElementById("middle")
var last = document.getElementById("last")

toggle.addEventListener("click", ()=>{
    // console.log(sidebar)
    console.log(x)

    if(x % 2 == 0){
       middle.style.display="none";
       first.style.cssText=`
       transform:rotate(-45deg);
       position:relative;
       top:1px;`;
       last.style.cssText=`
       transform:rotate(45deg);
       position:relative;
       top:-6px;
       
       `;
        sidebar.style.display = "block";
        x++;

    }else{
        first.style.transform="rotate(0deg)";
        last.style.cssText=`transform:rotate(0deg);
        top:0px;
        `;
 
        sidebar.style.display = "none";
        middle.style.display="inline-block"

        x++;
  
    }
})
window.addEventListener("scroll" ,()=>{
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY>0)
})
// (function(w) {
//     //private variable
//     var loaded = false;
//     w.onload = function() {
//         loaded = true;
//     };

//     w.checkLoaded = function() {
//         alert(loaded);
//     };
// })(window);

window.addEventListener("scroll", reveal);   
function reveal(){
    let reveals = document.querySelectorAll('.reveal')
    for(let i = 0; i<reveals.length; i++){
         let windowHeight = window.innerHeight;
         let revealTop = reveals[i].getBoundingClientRect().top;
         let revealPoint = 50;
         

         if(revealTop < windowHeight - revealPoint  ){
            reveals[i].classList.add('active');
            $(document).ready(function () {

            $('#report').load(location.href + " #report");
        });

         }else{
            reveals[i].classList.remove('active');
         }
    }
}