<template>
  <div class="container-full services-mob">
    <div class="container">
      <div class="header-box">
        <div class="wrap">
          <p><a href="#servicesBox">LEARN MORE</a></p>
          <img src="@/assets/img/arrow-right.png" alt="">
        </div>
        <h2 id="servText">OUR SERVICES</h2>
      </div>
    </div>
    <div id="servicesBox">
      <div class="link-wrap">
        <div v-for="(service, index) in services">
          <h2>{{service.title}}</h2>
          <div class="icon" :class="{'open': show === index}">
            <i @click="showCont(index)" class="fas fa-plus"></i>     
            <transition name="fade-text">     
              <p class="service-text" :key="index" v-if="show === index" v-html="service.text"></p>
            </transition>           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OurServices',
  show: false,

  data() {
    return {

      show: {
        id: 0,
        title: 'SEO Optimization',
        h: 'SEO',
        num: '01',
        img: 'services-1.jpg',
        text: `<p>Did you know that Google receives over 63,000 searches per second each day?</p><p>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.</p>`

      },

      services: [{
          title: 'SEO Optimization',
          h: 'SEO',
          num: '01',
          img: 'services-1.jpg',
          text: `<p>Did you know that Google receives over 63,000 searches per second each day?</p><p>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.</p>`
        },
        {
          title: 'Web Development',
          h: 'WEB DEV',
          num: '02',
          img: 'services-2.jpg',
          text: `<p>Web Developmentw 'Web Developmentceives over 63,000 searches per second each day?</p><p>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.</p>`
        },
        {
          title: 'IT Maintenance',
          h: 'IT MAINTENANCE',
          num: '03',
          img: 'services-3.jpg',
          text: `<p>IT Maintenance thatIT Maintenanceeives over 63,000 searches per second each day?</p><p>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.</p>`
        },
        {
          title: 'Content Marketing',
          h: 'CONTENT',
          num: '04',
          img: 'services-4.jpg',
          text: `<p>Content Marketingw Content Marketingreceives over 63,000 searches per second each day?</p><p>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.</p>`
        },
        {
          title: 'Social Media',
          h: 'SOCIAL MEDIA',
          num: '05',
          img: 'services-5.jpg',
          text: `<p>Social Media thatSocial Mediaes over 63,000 searches per second each day?</p><p>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.</p>`
        },
        {
          title: 'Pay-Per-Click',
          h: 'PPC',
          num: '06',
          img: 'services-6.jpg',
          text: `<p>Pay-Per-Clicknow Pay-Per-Click receives over 63,000 searches per second each day?</p><p>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.</p>`
        },
        {
          title: 'Graphic Design',
          h: 'GRAPHIC DESIGN',
          num: '07',
          img: 'services-7.jpg',
          text: `<p>Graphic Designhat Graphic Designs over 63,000 searches per second each day?</p><p>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.</p>`
        },
        {
          title: 'White Label',
          h: 'WHITE LABEL',
          num: '08',
          img: 'services-8.jpg',
          text: `<p>White Label White Label 63,000 searches per second each day?</p><p>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.</p>`
        },

      ]

    }
  },
  methods: {
    showCont(index) {

      if (this.show === false || this.show != index) {
        this.show = index;
      } else {
        this.show = false;
      }

    },
    isInViewport(elem) {

      var bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );

    }

  },
  mounted() {

  }

};

</script>
