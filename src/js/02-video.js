import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";

function timeUpdate(data) {
    console.log(data.seconds);
    localStorage.setItem(CURRENT_TIME, data.seconds);
}

player.on('timeupdate', throttle(timeUpdate, 1000));

const currentTime = JSON.parse(localStorage.getItem(CURRENT_TIME));

player.setCurrentTime(currentTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            seconds < 0 || seconds > 571.52;
            break;

        default:
            break;
    }
});