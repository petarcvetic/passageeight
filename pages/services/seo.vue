<template>
  <div>
    <div class="header services-template">
      <main-nav />
      <div class="wrap">
        <div class="text-wrap">
          <h1 id="title">Seo<span class="text-red">.</span></h1>
        </div>
      </div>
    </div>
    <div class="sekcija1 container-full">
      <div class="w-50 ">
        <img class="services-img" src="@/assets/img/services-1.jpg" alt="">
      </div>
      <div class="w-50">
        <div class="text-wrap">
          <h2>Lorem ipsum
            dolor sit amet.
          </h2>
          <div class="border-red"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis, dui non vestibulum gravida, diam nibh bibendum sem, et congue mauris diam eu purus. Mauris ut porttitor nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec non enim non nulla </p>
          <div class="link-contact-wrap ">
            <p>REQUEST AN AUDIT</p>
            <img src="@/assets/img/arrow-red.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainNav from '../../components/MainNav.vue';
import { mapState } from 'vuex';
export default {
  components: {
    MainNav
  },

  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {

  }

};

</script>
