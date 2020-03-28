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
        text: `Did you know that Google receives over 63,000 searches per second each day?
            <br><br>
            Search engine optimization is the best way to make your business stand out from your competition. Our SEO experts use goal-driven strategies to optimize your website and help you show up on the first page of Google.`

      },

      services: [{
          title: 'SEO Optimization',
          h: 'SEO',
          num: '01',
          img: 'services-1.jpg',
          text: `Did you know that Google receives over 63,000 searches per second each day?
            <br><br>
            Search engine optimization is the best way to make your business stand out from your competition. Our SEO experts use goal-driven strategies to optimize your website and help you show up on the first page of Google.`
        },
        {
          title: 'Web Development',
          h: 'WEB DEV',
          num: '02',
          img: 'services-2.jpg',
          text: `Did you know that there are approximately 1.94 billion active websites in the world?<br><br>
            The websites we develop are SEO compliant, perform error-free, and provide an optimal user experience on any device your website’s being viewed from. Our developers provide custom programming solutions to visualize all your ideas and emphasize the authenticity of your brand, making it possible to generate more conversions and engage a wider audience.`
        },
        {
          title: 'IT Maintenance',
          h: 'IT MAINTENANCE',
          num: '03',
          img: 'services-3.jpg',
          text: `Did you know that every dollar spent on preventive maintenance will save you five dollars on other expenses?<br><br>
            IT maintenance and server support is vital for every internet-based business. We provide practical IT solutions and assistance in all issues related to information systems and computers. Our IT team will responsibly and securely repair and replace faltering technology, making sure that everything functions properly.`
        },
        {
          title: 'Content Marketing',
          h: 'CONTENT',
          num: '04',
          img: 'services-4.jpg',
          text: `Did you know that 84% of people expect brands to produce content that entertains? <br><br>
            Our <b>digital marketing specialists</b> create informative, engaging content so that your audience can learn about your brand, the services, and products you offer, as well as your expertise. Let us help you get your voice heard!`
        },
        {
          title: 'Social Media',
          h: 'SOCIAL MEDIA',
          num: '05',
          img: 'services-5.jpg',
          text: `Did you know that 42% of the world's population uses social media?<br><br>
            It is essential to implement an effective social media strategy that will engage your target audience and expand your reach. We know what makes your audience tick. Let us help you increase awareness of your brand.`
        },
        {
          title: 'Pay-Per-Click',
          h: 'PPC',
          num: '06',
          img: 'services-6.jpg',
          text: `Did you know that 75% of users click on ads as they help them find the information they need more easily? <br><br>
            PPC advertising is the most effective way to target your most qualified audience. Our Google Ads & Google Analytics certified team will help you increase conversions and revenue, and draw traffic to your website. PPC services we offer are tailored for your needs regardless of the size of your business; we work with small, medium, and large businesses.`
        },
        {
          title: 'Graphic Design',
          h: 'GRAPHIC DESIGN',
          num: '07',
          img: 'services-7.jpg',
          text: `Did you know that 92.6% of people say the visual aspect is the top factor that affects their purchase decision? <br><br>
            Visual identity of your brand is what promotes your business. Our designers utilize an innovative and creative approach to visualize your ideas; we create unique designs that will best represent your line of work and make your brand memorable. `
        },
        {
          title: 'White Label',
          h: 'WHITE LABEL',
          num: '08',
          img: 'services-8.jpg',
          text: `Did you know that white labeling your services saves money and time?
            <br><br>
            White labeling provides better growth opportunities for your business without having to commit to extensive investments of time and money, allowing you to focus on what you specialize in. Let our marketing strategists and content specialists take care of your clients under your brand.`
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
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );

    }

  },
  mounted() {

    if (window.innerWidth > 721) {
      let h2 = document.getElementById('servText');


      window.addEventListener('scroll', () => {
        let lm = this;
        if (lm.isInViewport(h2)) {

          console.log('adas');
          h2.classList.add('our-services-anime')

        }
      });

    }
  }

};

</script>
