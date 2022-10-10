
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterplay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');

// Songs Name
let songs = [
    {songName: "Punji", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Punji", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Punji", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Punji", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Punji", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Punji", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Punji", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Punji", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName: "Punji", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
]

// Listen to Events
// ----MY First Song---- //
masterPlay.addEventListener('click', ()=>{

    // Play and Pause Buttons 
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity =0;
    }
})

// Time Update
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    // Formula change percent = (current Time/total Duration)*100 

    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value *audioElement.duration/100;

})