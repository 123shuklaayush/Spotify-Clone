
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

// Songs Name
let songs = [
    {songName: "Punji", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Punji", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Punji", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Punji", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Punji", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Punji", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Punji", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Punji", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Punji", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
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
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
    myProgressBar.value = progress;
})