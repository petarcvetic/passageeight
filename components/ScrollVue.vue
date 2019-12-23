<template>
  <div>
    <div id="animation" class="section">
      <div id="box">
        <div id="innerBox">
          <h2>How Can Passage 8 Help You Grow Your Business<span> ?</span></h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ScrollVue',

  mounted() {
    let anime = document.getElementById('animation');


    const scrole = {
      curviness: 0,
      values: [
        { x: 0, y: anime.innerHeight / 2 },
        { x: -window.innerWidth * 2.2, y: anime.innerHeight / 2 }
      ]
    };


    const tween = new TimelineLite();

    tween.add(
      TweenLite.to("#box", 1, {
        bezier: scrole,
        ease: Power1.easeInout
      })
    );

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
        triggerElement: "#animation",
        duration: 5000,
        triggerHook: 0
      })
      .setTween(tween)
      .addIndicators()     
      .setPin('#animation')
      .addTo(controller)

    }
};

</script>
<style>
/*
.section {
  height: 100vh;
  width: 100%;
}

#animation {
  position: relative;
  overflow: hidden;
  background: yellow;
}

#section1 {
  background: red;
}

#section2 {
  background: blue;
}

#box {
  width: 50px;
  height: 50px;
  display: block;
  border: 1px solid #000;
  background: #000;
  position: absolute;
  top: 50%;
  left: 0%;
}

#innerBox {
  width: 50px;
  height: 50px;
  display: block;
  border: 1px solid #fff;
  background: #fff;
  position: absolute;
  left: 72px;

}*/

</style>
