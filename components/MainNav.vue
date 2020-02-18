<template>
  <div class="w-100">
 
    <div v-if="winWidth > 720" class="nav">
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
    <div v-else class="mob-menu">
      <div @click="active = !active" :class="{active: active}" class="hamburger">
        <div class="bar-1"></div>
        <div class="bar-2"></div>
      </div>
      <div class="mob-nav" :class="{active: active}">
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
    </div>
   
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'MainNav',
  data() {
    return {
      active: false
    }
  },
  computed: {
    ...mapState({
      winWidth: 'winWidth'
    })
  },
  mounted() {    
   this.$store.commit('SET_WIDTH', window.innerWidth);
}

};

</script>
