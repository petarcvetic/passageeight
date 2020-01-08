<template>
  <div>
    <nuxt-link v-for="(post, index) in posts" 
               :to="`blog/${post.slug}`" :key="index" >
       <h2 >{{post.name}}</h2>
    </nuxt-link>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      posts: []
    }
  }, 
    asyncData() {

     return  axios.get('http://cms.test/api/posts')
        .then(({ data }) => {
          return {posts: data.data};
        })
    }
 

}

</script>
