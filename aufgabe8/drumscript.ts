 
 
 

 

 
    const sounda:HTMLAudioElement = new Audio('a.mp3.mp3')
    const soundc:HTMLAudioElement = new Audio('c.mp3.mp3');
    const soundf:HTMLAudioElement = new Audio('f.mp3.mp3');
    const soundd:HTMLAudioElement = new Audio('d.mp3.mp3');
    const sounde:HTMLAudioElement = new Audio('e.mp3.mp3');
    const soundsnare:HTMLAudioElement = new Audio('snare.mp3.mp3');
    const soundlaugh:HTMLAudioElement = new Audio('laugh.mp3.mp3');
    const soundkick:HTMLAudioElement = new Audio('kick.mp3.mp3');
    const soundhihat:HTMLAudioElement = new Audio('hihat.mp3.mp3');


function playSample(sound){
sound.play()
 
}


document.querySelector(".a") .addEventListener("click",function(){
    playSample(sounda)
})
document.querySelector(".c") .addEventListener("click",function(){
    playSample(soundc)
})
document.querySelector(".f") .addEventListener("click",function(){
    playSample(soundf)
})
document.querySelector(".d") .addEventListener("click",function(){
    playSample(soundd)
})
document.querySelector(".e") .addEventListener("click",function(){
    playSample(sounde)
})
document.querySelector(".snare") .addEventListener("click",function(){
    playSample(soundsnare)
})
document.querySelector(".laugh") .addEventListener("click",function(){
    playSample(soundlaugh)
})
document.querySelector(".kick") .addEventListener("click",function(){
    playSample(soundkick)
})
document.querySelector(".hihat") .addEventListener("click",function(){
    playSample(soundhihat)
        
})


