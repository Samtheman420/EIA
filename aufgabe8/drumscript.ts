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

let beat: string[] = ['sounds/kick.mp3.mp3','sounds/hihat.mp3.mp3',"sounds/snare.mp3.mp3",'sounds/hihat.mp3.mp3']
let zaehler: number = 0;
document.querySelector(".play-button").addEventListener("click",playBeat)
function playThis(soundQuelle: string):void {
const beat: HTMLAudioElement = new Audio(soundQuelle);
beat.play ()

}
function playBeat(): void{
setInterval(function ():void {
playThis(beat[zaehler]);
console.log ("test");
zaehler++;
console.log(beat[zaehler])
if (zaehler === 3)  {
zaehler = 0;


}
else if

},500);
 
   
document.querySelector(".play-button").addEventListener("click",stopBeat)
function playThis( : string):void {

}