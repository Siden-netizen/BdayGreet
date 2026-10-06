/* =========================================================
   PAPA'S GARAGE
   HAPPY BIRTHDAY CARD
========================================================= */


/* =========================================================
   GET ELEMENTS
========================================================= */

const intro = document.getElementById("intro");
const cardWrap = document.getElementById("cardWrap");

const openBtn = document.getElementById("openBtn");
const replayBtn = document.getElementById("replayBtn");
const lightBtn = document.getElementById("lightBtn");

const confetti = document.getElementById("confetti");


/* =========================================================
   OPEN CARD
========================================================= */

function openCard() {

    intro.classList.add("hide");

    setTimeout(() => {

        cardWrap.classList.add("show");

        launchConfetti();

    }, 550);

}


/* =========================================================
   REPLAY
========================================================= */

function replayCard() {

    cardWrap.classList.remove("show");

    confetti.innerHTML = "";

    setTimeout(() => {

        intro.classList.remove("hide");

    }, 450);

}


/* =========================================================
   CONFETTI
========================================================= */

function launchConfetti() {

    confetti.innerHTML = "";

    const numberOfPieces = 100;

    const colors = [
        "#ffca28",
        "#56b5ff",
        "#e53935",
        "#ffffff",
        "#50e38a"
    ];


    for (
        let i = 0;
        i < numberOfPieces;
        i++
    ) {

        const piece =
            document.createElement("span");


        piece.classList.add("piece");


        /* POSITION */

        piece.style.left =
            Math.random() * 100 + "%";


        /* SPEED */

        piece.style.animationDuration =
            (
                2.5 +
                Math.random() * 3
            ) + "s";


        /* DELAY */

        piece.style.animationDelay =
            Math.random() * .8 + "s";


        /* COLOR */

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        /* SIZE */

        piece.style.width =
            (
                5 +
                Math.random() * 7
            ) + "px";


        piece.style.height =
            (
                8 +
                Math.random() * 10
            ) + "px";


        confetti.appendChild(piece);

    }


    setTimeout(() => {

        confetti.innerHTML = "";

    }, 6500);

}


/* =========================================================
   LIGHTS
========================================================= */

let lightsOn = true;


function toggleLights() {

    lightsOn = !lightsOn;


    if (lightsOn) {

        document.documentElement
            .style
            .setProperty(
                "--yellow",
                "#ffca28"
            );

        lightBtn.textContent =
            "💡 Lights";

    } else {

        document.documentElement
            .style
            .setProperty(
                "--yellow",
                "#7d8790"
            );

        lightBtn.textContent =
            "🌑 Lights";

    }

}


/* =========================================================
   BUTTON EVENTS
========================================================= */

openBtn.addEventListener(
    "click",
    openCard
);


replayBtn.addEventListener(
    "click",
    replayCard
);


lightBtn.addEventListener(
    "click",
    toggleLights
);
