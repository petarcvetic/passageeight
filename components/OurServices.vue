<template>
  <div id="serviceAnime" class="container-full">
    <div class="container">
      <div class="header-box">
        <div class="wrap">
          <p><a href="#servicesBox">LEARN MORE</a></p>
          <img src="@/assets/img/arrow-right.png" alt="">
        </div>
        <h2 id="servText">OUR SERVICES</h2>
      </div>
    </div>
    <div id="servicesBox" class="grid">
      <div class="link-wrap">
        <div v-for="(service, index) in services" :class="{'active': show.id === index}" @mouseover="textHover(index)">{{service.title}}</div>
      </div>
      <transition name="slide-fade">
        <img :src="require(`@/assets/img/${show.img}`)" :key="show.id" alt="">
      </transition>
      <div class="text-area">
        <div class="head">
          <h3>{{show.h}}</h3>
          <span>{{show.num}}<span class="line"></span></span>
        </div>
        <div class="body">
          <p v-html="show.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OurServices',

  data() {
    return {

      show: {
        id: 0,
        title: 'SEO Optimization',
        h: 'SEO',
        num: '01',
        img: 'services-1.jpg',
        text: `Did you know that Google receives over 63,000 searches per second each day?<br><br>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.`

      },

      services: [{
          title: 'SEO Optimization',
          h: 'SEO',
          num: '01',
          img: 'services-1.jpg',
          text: `Did you know that Google receives over 63,000 searches per second each day? <br><br>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.`
        },
        {
          title: 'Web Development',
          h: 'WEB DEV',
          num: '02',
          img: 'services-2.jpg',
          text: `'Web Developmentw 'Web Developmentceives over 63,000 searches per second each day?<br><br>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.`
        },
        {
          title: 'IT Maintenance',
          h: 'IT MAINTENANCE',
          num: '03',
          img: 'services-3.jpg',
          text: `IT Maintenance thatIT Maintenanceeives over 63,000 searches per second each day?<br><br>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.`
        },
        {
          title: 'Content Marketing',
          h: 'CONTENT',
          num: '04',
          img: 'services-4.jpg',
          text: `Content Marketingw Content Marketingreceives over 63,000 searches per second each day? <br><br>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.`
        },
        {
          title: 'Social Media',
          h: 'SOCIAL MEDIA',
          num: '05',
          img: 'services-5.jpg',
          text: `Social Media thatSocial Mediaes over 63,000 searches per second each day?<br><br>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.`
        },
        {
          title: 'Pay-Per-Click',
          h: 'PPC',
          num: '06',
          img: 'services-6.jpg',
          text: `Pay-Per-Clicknow Pay-Per-Click receives over 63,000 searches per second each day? <br><br>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.`
        },
        {
          title: 'Graphic Design',
          h: 'GRAPHIC DESIGN',
          num: '07',
          img: 'services-7.jpg',
          text: `Graphic Designhat Graphic Designs over 63,000 searches per second each day? <br><br>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.`
        },
        {
          title: 'White Label',
          h: 'WHITE LABEL',
          num: '08',
          img: 'services-8.jpg',
          text: `White Label White Label 63,000 searches per second each day? <br><br>
            Search engine optimization is the best way to make your
            business stand out from your competition. Our SEO experts
            use goal-driven strategies to optimize your website and help 
            you show up on the first page of Google.`
        },

      ]

    }
  },
  methods: {
    textHover(i) {
      this.show.id = i;
      this.show.num = this.services[i].num;
      this.show.img = this.services[i].img;
      this.show.h = this.services[i].h;
      this.show.text = this.services[i].text;
    },
    isInViewport(elem) {
     
      var bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );

    }

  },
  mounted() {


    let h2 = document.getElementById('servText');
   

    window.addEventListener('scroll', () => {
      let lm = this;
      if (lm.isInViewport(h2)) {
        if(!h2.classList.contains('our-services-anime')){
             h2.classList.add('our-services-anime')
        }            
      } 
    });





    /*let anime = 
      let servText = document.getElementById('servText').getBoundingClientRect();
       

       console.log(servText.top, servText.left)

      const scrole = {
        curviness: 0,
        values: [
          { x:0 , y: -122, fontSize: 219 },
          { x: 30, y: -90, fontSize: 40 }   
        ]
      };

       const zoom = {
       
          curviness: 0,
          values: [
            { fontSize: 160 },
            { fontSize: 5000 }
          ]
        };


      let tween = new TimelineLite();

      tween.add(
        TweenLite.to("#servText", 1, {
          bezier: scrole,
          ease: Power1.easeInout
        })
      );
  

      const controller = new ScrollMagic.Controller();

      const scene = new ScrollMagic.Scene({
          triggerElement: "#serviceAnime",
          duration: 2000,
          triggerHook: 0
        })
        .setTween(tween)
        //.addIndicators()     
        .setPin('#serviceAnime')
        .addTo(controller)*/

  }


};

</script>
