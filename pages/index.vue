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
    <div class="scroll-section">
     <scroll-vue />
      <client-only>
        <video-vue />
      </client-only>
      <why-vue />
    </div>
    <shadow-vue />
    <contact-form />
  </div>
</template>
<script>
import OurServices from '../components/OurServices.vue';
import ScrollVue from '../components/ScrollVue.vue';
import VideoVue from '../components/VideoVue.vue';
import WhyVue from '../components/WhyVue.vue';
import ShadowVue from '../components/Shadow.vue';
import ContactForm from '../components/ContactForm.vue';


export default {
  components: {
    OurServices,
    ScrollVue,
    VideoVue,
    WhyVue,
    ShadowVue,
    ContactForm

  },
  head() {
    return {
      title: 'Welcome',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Welcome'
      }],
      script: [
        { src: "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TimelineLite.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenLite.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/CSSPlugin.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/BezierPlugin.min.js" }

      ]
    }
  },


}

</script>
