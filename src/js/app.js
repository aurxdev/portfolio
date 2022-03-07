let sidebar = document.getElementById('sidebar');
let navbar = document.getElementById('navbar');
let navbarBtn = document.getElementById('navbarBtn');
let principal = document.getElementById('principal');
let txtAnim = document.getElementById('txtAnim');
let goUpBtn = document.getElementById('go-up-btn');
let compteur = 0;
sidebar.style.transition = 'width 0.1s linear, opacity 0.1s linear, visibility 0.1s linear';


function masquer(){

    if(compteur == 0){

        // SIDEBAR CHANGES
        sidebar.style.width = '0%';
        sidebar.style.opacity = '0';
        sidebar.style.visibility = 'hidden';

        // NAVBAR CHANGES
        navbar.style.left = '0px';
        navbar.style.width = '100%';
        navbar.style.transition = 'left 0.1s, width 0.1s';

        // SECTION CHANGES
        principal.style.width = '100%';
        principal.style.left = '0px';
        principal.style.transition = 'width 0.1s, left 0.1s';
 



    }
    if(compteur == 1){

        // SIDEBAR CHANGES
        sidebar.style.width = '200px';
        sidebar.style.opacity = '1';
        sidebar.style.visibility = 'visible';

        // NAVBAR CHANGES
        navbar.style.left = '200px';
        navbar.style.width = 'calc(100% - 200px)';
        navbar.style.transition = 'left 0.1s, width 0.1s';

        // SECTION CHANGES
        principal.style.width = 'calc(100% - 200px)';
        principal.style.left = '200px';
        principal.style.transition = 'width 0.1s, left 0.1s';


        compteur = 0;
    }
    else{
        compteur = 1;
    }



}


function sidebarResponsive(x) {
    if (x.matches) { // If media query matches
      sidebar.style.position = 'absolute';
      sidebar.style.backgroundColor = 'transparent';
      sidebar.style.boxShadow  = '0px 0px 0px transparent';


 
   
    } else {
        sidebar.style.position = 'fixed';
        sidebar.style.backgroundColor = 'var(--grey-color)';
        sidebar.style.boxShadow = '0px 0px 10px rgb(15, 15, 15)';
    }
  }
  
  var x = window.matchMedia("(max-width: 900px)")
  sidebarResponsive(x) // Call listener function at run time
  x.addEventListener("change", sidebarResponsive) // Attach listener function on state changes

window.onscroll = function (){

    if(document.documentElement.scrollTop>100){
        navbar.style.backgroundColor = 'transparent';
        navbarBtn.style.backgroundColor = 'transparent';
        navbar.style.transition = 'background-color 0.3s';

    }
    else{
        navbar.style.backgroundColor = 'var(--grey-color)';
    }
    if(document.documentElement.scrollTop>900){
        goUpBtn.style.opacity = '1';
        goUpBtn.style.visibility = 'visible';


    }
    else{
        goUpBtn.style.opacity = '0';
        goUpBtn.style.visibility = 'hidden';
        
    }
}




new Typewriter(txtAnim, {
    loop:true,
    deleteSpeed : 40

})
.changeDelay(40)
.typeString('aurxdev.')
.pauseFor(500)
.deleteChars(8)
.typeString('<span style="color:var(--primary-blue)">en L1 Informatique.</span>')
.pauseFor(500)
.deleteChars(19)
.typeString('passioné de développement informatique.')


.start()
