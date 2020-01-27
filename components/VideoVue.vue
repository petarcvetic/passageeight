<template>
  <div class="video-section">
    <div class="video-wrap">

        <player></player>

      <div class="text-wrap">
        <div class="wrap">
          <h2>Together,
            we will build and increase
            your brand’s online credibility<span>.</span></h2>
          <p>At <span class="text-red">Passage 8</span>, we concentrate on creating well-thought-out
            marketing strategies and rely on valuable,
            far-reaching digital marketing tools
            to reach those in need of the services or products
            your business offers.<br><br>
            With our help, you can reach a broader audience
            in a way that is measurable and cost-effective.</p>
          <div class="link-wrap">
            <p>GET A QUOTE</p>
            <img src="@/assets/img/arrow-red.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Player from '../components/Player.vue';

export default {
  name: 'VideoVue' , 

  components: {
    Player
  }
}

</script>

