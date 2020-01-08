<template>
  <div>
    <h2>{{$route.params.slug}}</h2>
  </div>
</template>
<script>
import axios from 'axios';
export default {

  data() {
    return {
      post: []
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
  asyncData(context) {

    return axios.get(`http://cms.test/api/post/${context.params.slug}`)
      .then(({ data }) => {
        return { post: data.data };
      })
  }


}

</script>
