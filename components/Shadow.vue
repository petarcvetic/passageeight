<template>
  <div id="shadowWrap" class="shadow">
    <div class="wrap">
      <div class="text-wrap">
        <h2>Get the best digital marketing</h2>
        <p>The impact of Internet marketing is best shown in the
          revenue and progress of your business.
          With a fitting, customized digital marketing plan,
          your business can expand and you can achieve great accomplishments
          in your industry.
          We know what it takes to build and grow a successful business online and provide services that drive real results.</p>
      </div>
    </div>
    <img id="eight" src="@/assets/img/osmica-cr.png" alt="">
    <img id="shadow" src="@/assets/img/osmica-senka.png" alt="">
  </div>
</template>
<script>
export default {
  name: 'ShadowVue',

  mounted() {
    let shadow = document.getElementById("shadow");
    let shadowWrap = document.getElementById("shadowWrap");
    let width = shadowWrap.offsetWidth;
    let height = shadowWrap.offsetHeight;
    let strech = 100;
    let strechX = shadow.offsetWidth;
    let x;
    let y;


    shadowWrap.addEventListener('mousemove', (e) => {

      x = e.clientX;
      y = e.clientY     
     
     let xStrech = Math.round((x/ width * strech) - (strech  / 20));
     let yStrech = Math.round((y/ height * strech) - (strech  / 2));


     console.log(xStrech)
      
      shadow.style.right = xStrech + 'px';
      shadow.style.top = yStrech + 'px';



   
    })
  }
};

</script>
