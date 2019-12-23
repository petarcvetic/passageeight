<template>
  <div class="why-container">
    <div class="wrap">
      <div class="text-wrap">
        <h2>Why choose us<span>?</span></h2>
        <p>Your brand is what makes you unique and we are here to present your authenticity to the right people.
          Passage Eight is a full-service digital marketing agency that utilizes various digital marketing tools to create compelling,
          goal-driven strategies that will help you establish your business’ online presence.
        </p>
      </div>
      <div class="hover-wrap">
        <div class="single" v-for="(service, index) in services">
          <span  @mouseover="textHover(index)"></span>          
        </div>
        <p >{{show.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WhyVue',

  data() {
    return {

      show: {
        id: 0,
        text: 'We work as a part of your team.'
      },
      services: [{
          text: 'We work as a part of your team.'
        },
        {
          text: 'The results of our digital marketing efforts are exceptional, and we have years of experience in using various tactics and strategies to our client’s advantage. We understand what your audience is searching for online and what type of content they wish to consume. Rely on Passage Eight to help you establish yourself as an expert in your field, increase your audience, and expand your reach.'
        },
        {
          text: 'Our aim is to assist you in accomplishing your professional success.'
        },
        {
          text: 'Our team delivers online marketing solutions that you can shape according to your wants and needs. We will devote our time to get to know you and develop strategies with your mission statement in mind. '
        },
        {
          text: 'We believe in transparency and collaboration.'
        }
      ]

    }
  },
  methods: {
    textHover(i) {
      this.show.id = i;    
      this.show.text = this.services[i].text;    }

  }
};

</script>
