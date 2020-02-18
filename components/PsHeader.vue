<template>
  <div class="header">
   <main-nav />
    <div class="wrap">
      <div class="text-wrap">
        <h1 id="title">We Make Things Happen.</h1>
        <p>You have a great business idea
          that you want to present to the world?
          Passage 8 is here to help! </p>
      </div>
    </div>
  </div>
</template>
<script>
import MainNav from '../components/MainNav.vue';  
import { mapState } from 'vuex';
export default {
  components: {
    MainNav
  },
  name: 'PsHeader',
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

    let title = document.getElementById('title');
    let strText = title.textContent;
    let splitText = strText.split("");
    title.textContent = "";


    splitText.forEach((item) => {

      title.innerHTML += `<span class="fadeOut">${item}</span>`;
    });

    let char = 0;
    let timer = setInterval(onTick, 50);
    let span = document.querySelectorAll('.fadeOut');


    function onTick() {

      span[char].classList.add('fadeIn');
      char++;

      if (char === splitText.length) {
        complited();
        return;
      }
    }

    function complited() {
      clearInterval(timer);
      timer = null;
    }

  }

};

</script>
