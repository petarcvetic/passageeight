<template>
  <div class="header">
     <div id="particles-js"></div>
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
    
    </div>

    
  
  
  </div>
</template>
<script>

export default {


  name: 'PsHeader',
    mounted() {
    

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

