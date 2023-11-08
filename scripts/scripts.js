const playSongButton = document.querySelector('.playSong');
const playSong_Colored = document.querySelector('.playSong_Colored');
const playSongIcon = document.querySelector('.playSongIcon');
const progressContainer = document.querySelector('.progressContainer');
const songProgress = document.querySelector('.songProgress');
const prevSong = document.querySelector('.prevSong');
const nextSong = document.querySelector('.nextSong');
const audio = document.querySelector('audio');
const file = document.querySelector('#file')
let songIndex = 0;

const songName = document.querySelector('.songName');
const songSinger = document.querySelector('.songSinger');

file.addEventListener('change',song);
playSongButton.addEventListener('click',playingSong);
audio.addEventListener('timeupdate',progressUpdate);
progressContainer.addEventListener('click', seekSong);
prevSong.addEventListener('click',()=>{song('previous')});
nextSong.addEventListener('click',()=>{song('next')});

function song(go) {
    if(go === 'next') {
        songIndex++
    } else if(go === 'previous') {songIndex--};
    const songs = Array.from(file.files);
    audio.src = `assets/Music/${songs[songIndex].name}`;
    const currentFileName = songs[songIndex].name;
    songSinger.innerText = currentFileName.split('-')[0];
    songName.innerText = currentFileName.split('-')[1].split('.')[0];
    playSong();
    playingSong();
    playSongButton.disabled = false;
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