<template>
  <div class="footer">
    <div class="wrap">
      <div class="grid">
        <div id="col-0" class="col">
          <h2>Passage 8</h2>
          <p class="mt-0">Your Digital Solution</p>
        </div>
        <div id="col-1" class="col">
          <h3>About Us</h3>
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
              <li><nuxt-link to='/about'>About us</nuxt-link></li>
              <li>More Search</li>
              <li><nuxt-link to='/blog'>Blog</nuxt-link></li>
              <li>Testemonials</li>
              <li>Events</li>
            </ul>
          </div>
        </div>
        <div id="col-3" class="col">
          <div class="wrap">
            <h3>Helpful Links</h3>
            <ul>
              <li><nuxt-link to='/services'>Services</nuxt-link></li>
              <li>Supports</li>
              <li><nuxt-link to='/'>Terms & Conditions</nuxt-link></li>
              <li><nuxt-link to='/'>Privacy Policy</nuxt-link></li>
            </ul>
          </div>
        </div>
        <div id="col-4" class="col">
          <h3>Contact Us</h3>
          <a href="tel:123456789"><i class="fas fa-phone-alt"></i> 123456789</a>
          <a href="mail:passage8"><i class="fas fa-envelope"></i> passage8.com</a>
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

  data() {
    return {

      form: {
        text: '',
      }
    }
  }
};

</script>
