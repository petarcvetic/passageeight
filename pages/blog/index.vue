<template>
  <div>
    <nuxt-link v-for="(post, index) in posts" :to="`blog/${post.slug}`" :key="index">
      <h2>{{post.name}}</h2>
    </nuxt-link>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {

    }
  },
  async fetch({ store, from }) {
    
    let isFrom = !from;

    if (isFrom || store.state.posts.length === 0 ) {
      await store.dispatch('getPosts');
    }
  },
  computed: {
    ...mapState({
      posts: 'posts'
    })
  }
}

</script>
