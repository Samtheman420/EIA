const sounda = new Audio('sounds/a.mp3.mp3');
const soundc = new Audio('sounds/c.mp3.mp3');
const soundf = new Audio('sounds/f.mp3.mp3');
const soundd = new Audio('sounds/d.mp3.mp3');
const sounde = new Audio('sounds/e.mp3.mp3');
const soundsnare = new Audio('sounds/snare.mp3.mp3');
const soundlaugh = new Audio('sounds/laugh.mp3.mp3');
const soundkick = new Audio('sounds/kick.mp3.mp3');
const soundhihat = new Audio('sounds/hihat.mp3.mp3');
function playSample(sound) {
    sound.play();
}
document.querySelector(".a").addEventListener("click", function () {
    playSample(sounda);
});
document.querySelector(".c").addEventListener("click", function () {
    playSample(soundc);
});
document.querySelector(".f").addEventListener("click", function () {
    playSample(soundf);
});
document.querySelector(".d").addEventListener("click", function () {
    playSample(soundd);
});
document.querySelector(".e").addEventListener("click", function () {
    playSample(sounde);
});
document.querySelector(".snare").addEventListener("click", function () {
    playSample(soundsnare);
});
document.querySelector(".laugh").addEventListener("click", function () {
    playSample(soundlaugh);
});
document.querySelector(".kick").addEventListener("click", function () {
    playSample(soundkick);
});
document.querySelector(".hihat").addEventListener("click", function () {
    playSample(soundhihat);
});
let beat = ['sounds/kick.mp3.mp3', 'sounds/hihat.mp3.mp3', "sounds/snare.mp3.mp3", 'sounds/hihat.mp3.mp3'];
let zaehler = 0;
document.querySelector(".play-button").addEventListener("click", playBeat);
function playThis(soundQuelle) {
    const beat = new Audio(soundQuelle);
    beat.play();
}
function playBeat() {
    setInterval(function () {
        playThis(beat[zaehler]);
        console.log("test");
        zaehler++;
        if (zaehler === 3) {
            zaehler = 0;
        }
        500;
    });
    let playstopBTN = document.getElementById("playstop");
    let count = 0;
    function playstop() {
        if (playstopBTN.classList.contains('fa-play')) {
            playstopBTN.classList.remove('fa-play');
            playstopBTN.classList.add('fa-pause');
            playBeat();
            console.log('2');
        }
        else {
            playstopBTN.classList.remove('fa-pause');
            playstopBTN.classList.add('fa-play');
            clearInterval(beatid);
            console.log('3');
        }
    }
    document.querySelector('#playstop').addEventListener('click', function () {
        playstop();
        console.log('1');
    });
    function remix() {
        setInterval(function () {
            const rmx = Math.floor(Math.random() * audio.length);
            playbeat(audio[rmx]);
        }, 420);
    }
    document.querySelector('#remix-button').addEventListener('click', function () {
        remix();
    });
}
//# sourceMappingURL=drumscript.js.map