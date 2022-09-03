 import Player from '@vimeo/player';



 const iframeEl = document.querySelector('#vimeo-player');
 const player = new Player(iframeEl);


const newTime = player.on('timeupdate', function(data) {
});

localStorage.setItem("videoplayer-current-time", "newTime");

player.setCurrentTime(30.456).then(function (seconds) {
         // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
         case 'RangeError':
             // the time was less than 0 or greater than the video’s duration
           break;

         default:
            // some other error occurred
             break;
     }
 });
