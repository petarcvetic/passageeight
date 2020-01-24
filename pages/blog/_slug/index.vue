<template>
  <div>
    <h2>{{post}}</h2>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {

  data() {
    return {
     
    }
  },
     head () {
    return {
      title: this.post.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },
  async fetch({store, params}) {

    await store.dispatch('getPost', {postSlug: params.slug})
   
  },
  computed:{
    ...mapState({
       posts: 'posts', 
       post: 'post'
    })
  }


}

</script>
