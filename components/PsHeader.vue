<template>
  <div class="header">
    <div id="particles-js"></div>
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
import { mapState } from 'vuex';
export default {
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
    this.$store.commit('SET_WIDTH', window.innerWidth);

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




    function initParticles() {
      window.particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 700
            }
          },
          "color": {
            "value": "#ff5f88"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#ff5f88"
            },
            "polygon": {
              "nb_sides": 5
            },
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ff5f88",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      })
    }
    initParticles()

  }

};

</script>
