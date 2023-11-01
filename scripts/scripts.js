const playSongButton = document.querySelector('.playSong');
const playSong_Colored = document.querySelector('.playSong_Colored');
const playSongIcon = document.querySelector('.playSongIcon');
const progressContainer = document.querySelector('.progressContainer');
const songProgress = document.querySelector('.songProgress');

const audio = document.querySelector('audio');
const file = document.querySelector('#file')

file.addEventListener('change',song);
playSongButton.addEventListener('click',playingSong);
audio.addEventListener('timeupdate',progressUpdate);
progressContainer.addEventListener('click', seekSong);

function song() {
    
}
function playingSong() {
    if(playSongIcon.classList.contains('fa-play')) playSong();
    else pauseSong();
}
function playSong() {
    playSongIcon.classList.toggle('fa-play');
    playSongIcon.classList.toggle('fa-pause');
    playSong_Colored.style.animationPlayState = 'running';
    audio.play();
}
function pauseSong() {
    playSongIcon.classList.toggle('fa-play');
    playSongIcon.classList.toggle('fa-pause');
    playSong_Colored.style.animationPlayState = 'paused'; 
    audio.pause();
}
function progressUpdate(ev) {
    const {duration,currentTime} = ev.srcElement;
    songProgress.style.width = currentTime / duration * progressContainer.clientWidth + "px";
}
function seekSong(ev) {
    const {duration} = audio;
    audio.currentTime = ev.offsetX / progressContainer.clientWidth * duration;
}