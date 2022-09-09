import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


 const iframeEl = document.querySelector('#vimeo-player');
 const player = new Player(iframeEl);

 player.on('timeupdate', function (data) {
  localStorage.setItem("videoplayer-current-time", data.seconds);
  console.log(data.seconds);
});


let savedTime = localStorage.getItem("videoplayer-current-time", data.seconds);
 
  if (savedTime) {
    player.setCurrentTime(savedTime);
    savedTime.value = player;
  }
