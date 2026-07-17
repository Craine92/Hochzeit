/* =========================
   Countdown Hochzeit
========================= */


const weddingDate = new Date("August 28, 2026 12:00:00").getTime();



const countdown = setInterval(function() {


    const now = new Date().getTime();


    const distance = weddingDate - now;



    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );



    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;



    if(distance < 0) {


        clearInterval(countdown);


        document.querySelector(".countdown").innerHTML =
        "Heute ist unser Hochzeitstag ❤️";


    }



},1000);








/* =========================
   Hamburger Menü
========================= */


const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.getElementById("nav-menu");



if(menuToggle && navMenu){



    menuToggle.addEventListener("click", function(){



        navMenu.classList.toggle("active");



        if(navMenu.classList.contains("active")){


            menuToggle.innerHTML = "✕";


        } else {


            menuToggle.innerHTML = "☰";


        }



    });






    // Menü schließen nach Klick auf Link

    document.querySelectorAll("#nav-menu a")
    .forEach(link => {


        link.addEventListener("click", function(){


            navMenu.classList.remove("active");


            menuToggle.innerHTML = "☰";


        });


    });



}








/* =========================
   Smooth Scroll Offset
   wegen fixer Navigation
========================= */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {


    anchor.addEventListener("click", function(e){


        const target =
        document.querySelector(this.getAttribute("href"));



        if(target){


            e.preventDefault();



            const headerHeight =
            document.querySelector("header").offsetHeight;



            const position =
            target.offsetTop - headerHeight;



            window.scrollTo({

                top: position,

                behavior:"smooth"

            });


        }


    });


});