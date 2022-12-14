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
    sound.play()
}
document.querySelector(".a").addEventListener("click", function () {
    playSample(sounda)
})
document.querySelector(".c").addEventListener("click", function () {
    playSample(soundc)
})
document.querySelector(".f").addEventListener("click", function () {
    playSample(soundf)
})
document.querySelector(".d").addEventListener("click", function () {
    playSample(soundd)
})
document.querySelector(".e").addEventListener("click", function () {
    playSample(sounde)
})
document.querySelector(".snare").addEventListener("click", function () {
    playSample(soundsnare)
})
document.querySelector(".laugh").addEventListener("click", function () {
    playSample(soundlaugh)
})
document.querySelector(".kick").addEventListener("click", function () {
    playSample(soundkick)
})
document.querySelector(".hihat").addEventListener("click", function () {
    playSample(soundhihat)

})



var audio = ['sounds/kick.mp3', 'sounds/hihat.mp3', 'sounds/laugh2.mp3', 'sounds/kick.mp3', 'sounds/snare.mp3', 'sounds/hihat.mp3', 'sound/snare.mp3', "sound/laugh1.mp3"];
var zaehler = 0;
let beatid;
function playbeat(text) {
    var beat = new Audio(text);
    beat.play();
}
function playBeat() {
    beatid = setInterval(function () {
        playbeat(audio[count]);
        count += 1;
        if (count > audio.length) {
            count = 0;
        }
    }, 420);
}


let playstopbutton = document.getElementById("playstop");
let count = 0;

function playstop() {
    if (playstopbutton.classList.contains('fa-play')) {
        playstopbutton.classList.remove('fa-play');
        playstopbutton.classList.add('fa-pause');
        playBeat();
        console.log('2');
    }
    else {
        playstopbutton.classList.remove('fa-pause');
        playstopbutton.classList.add('fa-play');
        clearInterval(beatid);
        console.log('3');
    }
}
document.querySelector('#playstop-button').addEventListener('click', function () {
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