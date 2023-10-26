const playSongButton = document.querySelector('.playSong');
const playSong_Colored = document.querySelector('.playSong_Colored');
const playSongIcon = document.querySelector('.playSongIcon');

const audio = document.querySelector('audio');

playSongButton.addEventListener('click',playingSong);

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