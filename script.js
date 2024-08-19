function playMusic(track) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = track;
    audioPlayer.play();
}
