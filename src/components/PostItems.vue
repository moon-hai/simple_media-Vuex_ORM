<template>
  <div class="row">
    <post-item
     v-for="post in posts"
     :key="post.id"
     :post="post" />
  </div>
</template>

<script>
import Post from '@/models/post'
import PostItem from './PostItem'

export default {
  name: 'PostItems',

  components: {
    PostItem
  },

  computed: {
    posts () {
      return Post.query().with(['author', 'tags']).get()
    }
  }
}
</script>
