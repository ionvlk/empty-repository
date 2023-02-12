import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);
      
      // Get current time from local storage or set to 0
      let currentTime = localStorage.getItem('videoplayer-current-time') || 0;
      
      // Update current time in local storage
      function updateCurrentTime(seconds) {
        localStorage.setItem('videoplayer-current-time', seconds);
      }
      
      // Listen for timeupdate event
      player.on('timeupdate', function(data) {
        updateCurrentTime(data.seconds);
      });
      
      // Set player time to current time
      player.setCurrentTime(currentTime).then(function(seconds) {
        console.log('Playback started from:', seconds, 'seconds');
      }).catch(function(error) {
        switch (error.name) {
          case 'RangeError':
            console.error('Error: Time is out of range');
            break;
            
          default:
            console.error('Error:', error.message);
            break;
        }
      });

