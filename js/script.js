/* =========================
   Countdown Hochzeit
========================= */


const hochzeitDatum = new Date(
    "August 28, 2026 14:00:00"
).getTime();



function countdown() {


    const jetzt = new Date().getTime();


    const differenz = hochzeitDatum - jetzt;



    if (differenz <= 0) {

        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";

        return;

    }



    const tage = Math.floor(
        differenz /
        (1000 * 60 * 60 * 24)
    );



    const stunden = Math.floor(
        (differenz %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );



    const minuten = Math.floor(
        (differenz %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );



    const sekunden = Math.floor(
        (differenz %
        (1000 * 60))
        /
        1000
    );



    document.getElementById("days").innerHTML =
        tage;


    document.getElementById("hours").innerHTML =
        stunden;


    document.getElementById("minutes").innerHTML =
        minuten;


    document.getElementById("seconds").innerHTML =
        sekunden;


}



setInterval(countdown,1000);


countdown();




/* =========================
   Smooth Scroll Navigation
========================= */


document.querySelectorAll(
    'a[href^="#"]'
)
.forEach(link => {


    link.addEventListener(
        "click",
        function(e){


            const ziel =
                document.querySelector(
                    this.getAttribute("href")
                );


            if(ziel){

                e.preventDefault();


                ziel.scrollIntoView({

                    behavior:
                        "smooth"

                });

            }


        }
    );


});