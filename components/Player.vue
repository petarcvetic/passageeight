<template> 
      <div id="videoPlayer" class="video-player-box" :playsinline="playsinline" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @loadeddata="onPlayerLoadeddata($event)" @waiting="onPlayerWaiting($event)" @playing="onPlayerPlaying($event)" @timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)" @canplaythrough="onPlayerCanplaythrough($event)" @ready="playerReadied" @statechanged="playerStateChanged($event)" v-video-player:myVideoPlayer="playerOptions">
      </div>      
</template>
<script>
import 'video.js/dist/video-js.css';


export default {
  name: 'Player',
  
  data() {
    return {
      // component options
      playsinline: true,

      // videojs options
      playerOptions: {
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: require(`@/assets/video/video.mp4`)
        }],
        // poster: "@/assets/img/arrow-red.png,
      }
    }
  },
  mounted() {
    let playerBox = document.getElementById('videoPlayer');
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      let playerBox = document.getElementById('videoPlayer');
        let playerBtn = document.querySelector('.vjs-big-play-button');

      playerBtn.classList.remove('d-block');
      playerBox.classList.add('player-full');
    },
    onPlayerPause(player) {
      let playerBox = document.getElementById('videoPlayer');
      let playerBtn = document.querySelector('.vjs-big-play-button');

      playerBtn.classList.add('d-block');
      playerBox.classList.remove('player-full');
    },
    onPlayerEnded(player) {
      let playerBox = document.getElementById('videoPlayer');
      let playerBtn = document.querySelector('.vjs-big-play-button');

      playerBtn.classList.add('d-block');
      playerBox.classList.remove('player-full');
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
    
    },
    // player is ready
    playerReadied(player) {
    
    }
  }
}

</script>
<style lang="scss" scoped>
.container {
  width: 60%;
  margin: 0 auto;
  padding: 50px 0;

  .video-player-box {
    min-height: 200px;
  }
}

</style>
