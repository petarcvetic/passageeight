<template>
  <div class="service-slider">
    <div class="width-50">
    
        <div  class="text-area">
          <div class="head">
            <h2 >{{show.h}}</h2>
            <span >{{show.num}}</span>
          </div>
          <div class="body">
            <p>{{show.text}}</p>
          </div>
          <div class="s-footer">
            <div @click="changeText()" class="link-contact-wrap">
              <img src="@/assets/img/arrow-red.png" alt="">
            </div>
          </div>
        </div>
    
    </div>
    <div class="width-50 image-wrap">
      <transition name="fade">
        <img class="slider-img" :src="require(`@/assets/img/${show.img}`)" :key="show.id" alt="">
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ServiceSlider',
  data() {
    return {
      cont: 0,
      show: {
        id: 0,
        title: 'SEO Optimization',
        h: 'SEO',
        num: '01',
        img: 'services-1.jpg',
        text: 'Did you know that Google receives over 63,000 searches per second each day?      Search engine optimization is the best way to make your business stand out from your competition. Our SEO experts use goal-driven strategies to optimize your website and help you show up on the first page of Google.'

      },

      services: [{
          title: 'SEO Optimization',
          h: 'SEO',
          num: '01',
          img: 'services-1.jpg',
          text: 'Did you know that Google receives over 63,000 searches per second each day? Search engine optimization is the best way to make your business stand out from your competition. Our SEO experts use goal-driven strategies to optimize your website and help you show up on the first page of Google.'
        },
        {
          title: 'Web Development',
          h: 'WEB DEV',
          num: '02',
          img: 'services-2.jpg',
          text: 'Did you know that Google receives over 63,000 searches per second each day? Search engine optimization is the best way to make your business stand out from your competition. Our SEO experts use goal-driven strategies to optimize your website and help you show up on the first page of Google.'
        },
        {
          title: 'IT Maintenance',
          h: 'IT MAINTENANCE',
          num: '03',
          img: 'services-3.jpg',
          text: 'Did you know that Google receives over 63,000 searches per second each day? Search engine optimization is the best way to make your business stand out from your competition. Our SEO experts use goal-driven strategies to optimize your website and help you show up on the first page of Google.'
        },
        {
          title: 'Content Marketing',
          h: 'CONTENT',
          num: '04',
          img: 'services-4.jpg',
          text: 'Did you know that Google receives over 63,000 searches per second each day? Search engine optimization is the best way to make your business stand out from your competition. Our SEO experts use goal-driven strategies to optimize your website and help you show up on the first page of Google.'
        },
        {
          title: 'Social Media',
          h: 'SOCIAL MEDIA',
          num: '05',
          img: 'services-5.jpg',
          text: 'Did you know that Google receives over 63,000 searches per second each day? Search engine optimization is the best way to make your business stand out from your competition. Our SEO experts use goal-driven strategies to optimize your website and help you show up on the first page of Google.'
        },
        {
          title: 'Pay-Per-Click',
          h: 'PPC',
          num: '06',
          img: 'services-6.jpg',
          text: 'Did you know that Google receives over 63,000 searches per second each day? Search engine optimization is the best way to make your business stand out from your competition. Our SEO experts use goal-driven strategies to optimize your website and help you show up on the first page of Google.'
        },
        {
          title: 'Graphic Design',
          h: 'GRAPHIC DESIGN',
          num: '07',
          img: 'services-7.jpg',
          text: 'Did you know that Google receives over 63,000 searches per second each day? Search engine optimization is the best way to make your business stand out from your competition. Our SEO experts use goal-driven strategies to optimize your website and help you show up on the first page of Google.'
        },
        {
          title: 'White Label',
          h: 'WHITE LABEL',
          num: '08',
          img: 'services-8.jpg',
          text: 'Did you know that Google receives over 63,000 searches per second each day? Search engine optimization is the best way to make your business stand out from your competition. Our SEO experts use goal-driven strategies to optimize your website and help you show up on the first page of Google.'
        },

      ]

    }
  },
  methods: {
    changeText() {

      if (this.cont < 7) {
        this.cont++;
      } else {
        this.cont = 0;
      }
      this.show.id = this.cont;
      this.show.num = this.services[this.cont].num;
      this.show.img = this.services[this.cont].img;
      this.show.h = this.services[this.cont].h;
      this.show.text = this.services[this.cont].text;
    }
  },
};

</script>
