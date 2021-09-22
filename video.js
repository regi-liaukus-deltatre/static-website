function onYouTubeIframeAPIReady() {

  var player;

  player = new YT.Player('YouTubeBackgroundVideoPlayer', {

      videoId: 'dQw4w9WgXcQ', // YouTube Video ID

      width: 1280,               // Player width (in px)

      height: 720,              // Player height (in px)

      playerVars: {

        playlist: '{$loadYouTubeVideoID}',

          autoplay: 1,        // Auto-play the video on load

          autohide: 1,

          disablekb: 1,

          controls: 1,        // Hide pause/play buttons in player

          showinfo: 1,        // Hide the video title

          modestbranding: 1,  // Hide the Youtube Logo

          loop: 1,            // Run the video in a loop

          fs: 1,              // Hide the full screen button

          autohide: 1,         // Hide video controls when playing

          rel: 0,

          enablejsapi: 1

      },

      events: {

        onReady: function(e) {

            e.target.mute();

            e.target.setPlaybackQuality('hd1080');

        },

        onStateChange: function(e) {

          if(e && e.data === 1){

              var videoHolder = document.getElementById('home-banner-box');

              if(videoHolder && videoHolder.id){

                videoHolder.classList.remove('loading');

              }

          }else if(e && e.data === 0){

            e.target.playVideo()

          }

        }

      }

  });

}
