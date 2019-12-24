<template>
  <div class="footer">
    <div class="wrap">
      <div class="grid">
        <div id="col-1" class="col">
          <h3>Passage 8</h3>
          <p class="mt-0">Your Digital Solution</p>
          <h4>About Us</h4>
          <p>Our mission is to make your brand
            stand out by creating and implementing
            custom marketing strategies
            that will increase your sales
            and grow organic traffic,
            while you focus on running your business.</p>
        </div>
        <div id="col-2" class="col">
          <div class="wrap">
            <h3>Information</h3>
            <ul>
              <li>About us</li>
              <li>More Search</li>
              <li>Blog</li>
              <li>Testemonials</li>
              <li>Events</li>
            </ul>
          </div>
        </div>
        <div id="col-3" class="col">
          <div class="wrap">
            <h3>Helpful Links</h3>
            <ul>
              <li>Services</li>
              <li>Supports</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div id="col-4" class="col">
          <h3>Subscribe For More Info</h3>
          <div class="input">
            <input v-model="form.text" type="text">
            <div v-if="!form.text" class="icon">
              <i  class="fas fa-envelope"></i>
              <span>Enter Your Email</span>
            </div>
          </div>
          <div class="btn">SUBSCRIBE</div>
        </div>
        <div id="col-5" class="col">
            <h4>Contact Us</h4>
            <a href="tel:123456789"><i class="fas fa-phone-alt"></i> 123456789</a>
            <a href="mail:passage8"><i  class="fas fa-envelope"></i> passage8.com</a>
        </div>
        <div class="social-wrap">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-behance"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PsFooter',

  data(){
    return{
          
       form:{          
          text: '',
       }
    }
  }
};

</script>
