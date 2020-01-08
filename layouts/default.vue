<template>
  <div class="main">
<client-only>
   <!-- <ps-header /> -->
  </client-only>  
    <nuxt />
    <ps-footer />

  </div>
</template>
<script>
import PsHeader from '../components/PsHeader.vue';
import PsFooter from '../components/PsFooter.vue';

export default {
  components: {
    PsHeader,
    PsFooter
  }
}

</script>
