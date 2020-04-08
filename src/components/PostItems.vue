<template>
  <div class="row">
    <div class="u-text-center">
      <button
        class="btn btn--primary"
        @click="addPost">Add</button>
    </div>

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
  },

  methods: {
    addPost () {
      Post.insert({
        data: {
          title: '',
          description: '',
          createdAt: 'just now'
        }
      })
    }
  }
}
</script>
