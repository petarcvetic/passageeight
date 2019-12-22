<template>
  <div>
    <div class="services">
      <our-services />
    </div>
    <div class="strategies">
      <div class="text-wrap">
        <div class="wrap">
          <h2>Successfully integrated digital marketing
            strategies<span>.</span></h2>
          <p>We will never offer unnecessary services because we understand what it means to run a business, and we recognize the importance and uniqueness of your brand. Each project we take on gets our full attention.</p>
          <div class="link-wrap">
            <p>LEARN MORE</p>
            <img src="@/assets/img/arrow-red.png" alt="">
          </div>
        </div>
      </div>
      <div class="video-wrap">
        <div class="wrap">
          <img src="@/assets/img/osmica.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OurServices from '../components/OurServices.vue';

export default {
  components: {
    OurServices
  },
  head() {
    return {
      title: 'Welcome',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Welcome'
      }]
    }
  }
}

</script>
