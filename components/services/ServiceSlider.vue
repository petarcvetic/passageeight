<template>
  <div class="service-slider">
     <div class="width-50">
       <div class="wrap">
         <h3></h3>
       </div>
     </div>
  </div>
</template>
<script>
export default {
  name: 'ServiceSlider',
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
};

</script>