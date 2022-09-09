import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


 const iframeEl = document.querySelector('#vimeo-player');
 const player = new Player(iframeEl);

 player.on('timeupdate', throttle(function (data) {
  localStorage.setItem("videoplayer-current-time", data.seconds);
  console.log(data.seconds);
}), 500);


let savedTime = localStorage.getItem("videoplayer-current-time");
console.log(savedTime);
 
  if (savedTime) {
    player.setCurrentTime(savedTime);
};
