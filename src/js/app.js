let sidebar = document.getElementById('sidebar');
let navbarBtn = document.getElementById('navbarBtn');
let goUpBtn = document.getElementById('go-up-btn');
let compteur = 0;


function masquer(){

    if(compteur == 0){
        // SIDEBAR CHANGES

        sidebar.style.height = '260px';
        sidebar.style.backgroundColor = 'var(--grey-color)';
        sidebar.style.transition = 'height 0.1s';

    }
    if(compteur == 1){   
        sidebar.style.height = '60px';

        compteur = 0;
    }
    else{
        compteur = 1;
    }



}

window.onscroll = function (){

    if(document.documentElement.scrollTop>100 && compteur == 0){
        sidebar.style.backgroundColor = 'transparent';

        sidebar.style.transition = 'background-color 0.3s';


    }
    else{
        sidebar.style.backgroundColor = 'var(--grey-color)';

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




