<template>
  <div>
    about
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  components: {

  },
  head() {
    return {
      title: 'About Us | Passage 8'

    }
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      winWidth: 'winWidth'
    })
  },
  mounted() {

  }

};

</script>
