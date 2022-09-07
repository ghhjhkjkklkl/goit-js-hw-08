import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



 const iframeEl = document.querySelector('#vimeo-player');
 const player = new Player(iframeEl);


const newTime = player.on('timeupdate', function(data) {});

localStorage.setItem("videoplayer-current-time", "newTime");

player.setCurrentTime(30.456).then(function (seconds) {
}).catch(function (error) {
    switch (error.name) {
         case 'RangeError':
            
           break;

         default:
            
             break;
     }
 });
