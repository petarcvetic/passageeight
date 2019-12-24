<template>
  <div class="header">
    <div class="nav">
      <ul>
        <li>
          <nuxt-link to='/'>HOME</nuxt-link>
        </li>
        <li>
          <nuxt-link to='/about'>ABOUT</nuxt-link>
        </li>
        <li>
          <nuxt-link to='/services'>SERVICES</nuxt-link>
        </li>
        <li>
          <nuxt-link to='/projects'>PROJECTS</nuxt-link>
        </li>
        <li>
          <nuxt-link to='/contact'>CONTACT</nuxt-link>
        </li>
        <p>LET'S TALK</p>
      </ul>
    </div>
    <div class="wrap">
      <div class="text-wrap">
        <h1>We Make Things Happen.</h1>
        <p>You have a great business idea
          that you want to present to the world?
          Passage 8 is here to help! </p>
      </div>
      <div class="header-box">
        <div class="wrap">
          <p>LEARN MORE</p>
          <img src="@/assets/img/arrow-right.png" alt="">
        </div>
        <h2>OUR SERVICES</h2>
      </div>
    </div>
    <div>
      <v-stage ref="stage" :config="stageSize">
        <v-layer ref="layer">
          <v-image :config="{
            image: image
          }" />
        </v-layer>
      </v-stage>
    </div>
  </div>
</template>
<script>


export default {

  name: 'PsHeader',
  data() {
    return {
      stageSize: {
        width: 1980,
        height: 1024
      },
      image: null
    };
  },
  mounted() {
/*
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.stageSize.width = width;
    this.stageSize.height = height;*/

   


    const image = new window.Image();
    image.src = require(`@/assets/img/vektor-50.svg`);

    console.log(image)
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    };

  }
};

</script>
