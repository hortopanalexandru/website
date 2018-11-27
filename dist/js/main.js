// Select DOM items 

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');



//Set Initial State of Menu 



let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State 

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        //Set Menu State 
        showMenu = false;
    }

}

//Projects on mouseover -> change to name of the project
function myOverFunction1() {
    document.querySelector('#eye1').innerHTML = "NavigationBar";
}

function myOutFunction1() {

    document.querySelector('#eye1').innerHTML = "Project";
}

function myOverFunction2() {
    document.querySelector('#eye2').innerHTML = "ParallaxEffect";
}

function myOutFunction2() {

    document.querySelector('#eye2').innerHTML = "Project";
}

function myOverFunction3() {
    document.querySelector('#eye3').innerHTML = "LoginVideoBackground";
}

function myOutFunction3() {

    document.querySelector('#eye3').innerHTML = "Project";
}

function myOverFunction4() {
    document.querySelector('#eye4').innerHTML = "In Progress..";
}

function myOutFunction4() {

    document.querySelector('#eye4').innerHTML = "Project";
}

function myOverFunction5() {
    document.querySelector('#eye5').innerHTML = "In Progress..";
}

function myOutFunction5() {

    document.querySelector('#eye5').innerHTML = "Project";
}


//  changing the contacts everytime when you hover one the other 2 change

function changeFunction1() {
    document.querySelector('#two1').innerHTML = "Avaible everyday from 10am to 10pm";
    document.querySelector('#two2').innerHTML = "";
    document.querySelector('#three1').innerHTML = "";
    document.querySelector('#three2').innerHTML = "This is my main email";
    setTimeout(function () {
        document.querySelector('#three1').innerHTML = "Email2:";
        document.querySelector('#three2').innerHTML = "hortopan77alexandru@gmail.com";
        document.querySelector('#two1').innerHTML = "Phone:";
        document.querySelector('#two2').innerHTML = "+40760012316";
    }, 3000);
}



function changeFunction2() {
    document.querySelector('#one1').innerHTML = "I'm checking my phone every 10seconds";
    document.querySelector('#one2').innerHTML = "";
    document.querySelector('#three1').innerHTML = "";
    document.querySelector('#three2').innerHTML = "Text/call me anytime";
    setTimeout(function () {
        document.querySelector('#one1').innerHTML = "Email:";
        document.querySelector('#one2').innerHTML = "hortopan00alexandru@gmail.com";
        document.querySelector('#three1').innerHTML = "Email2:";
        document.querySelector('#three2').innerHTML = "hortopan77alexandru@gmail.com";
    }, 3000);
}



function changeFunction3() {
    document.querySelector('#two1').innerHTML = "I check my emails once a week";
    document.querySelector('#two2').innerHTML = "";
    document.querySelector('#one1').innerHTML = "";
    document.querySelector('#one2').innerHTML = "This is my second email";
    setTimeout(function () {
        document.querySelector('#one1').innerHTML = "Email:";
        document.querySelector('#one2').innerHTML = "hortopan00alexandru@gmail.com";
        document.querySelector('#two1').innerHTML = "Phone:";
        document.querySelector('#two2').innerHTML = "+40760012316";
    }, 3000);
}