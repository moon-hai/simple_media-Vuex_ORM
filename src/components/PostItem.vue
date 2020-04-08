<template>
  <div class="col-12">
    <div class="card">
      <div class="card__header">
        <input
          type="text"
          class="form-input form-input-lg"
          :value="post.title"
          placeholder="Post title"
          @input="e => { updatePost(post, 'title', e.target.value) }">
      </div>

      <div class="card__body">
        <input
          type="text"
          class="form-input form-input-lg"
          :value="post.description"
          placeholder="Post Body"
          @input="e => { updatePost(post, 'description', e.target.value) }">
      </div>

      <tag-select
        v-for="tag in tags"
        :key="tag.name"
        :tagSelected="tag.name" />

      <div class="card__info" v-if="post.author">
        <p><i>{{ post.author.name }}</i></p>
        <p><i>{{ post.createdAt }}</i></p>
      </div>
    </div>
  </div>
</template>

<script>
import TagSelect from './TagSelect'

export default {
  name: 'PostItem',

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  components: {
    TagSelect
  },

  computed: {
    tags () {
      return this.post.tags
    }
  },

  methods: {
    updatePost (post, target, value) {
      if (target === 'title') {
        post.$update({ data: { title: value } })
      } else {
        post.$update({ data: { description: value } })
      }
    }
  }
}
</script>

<style scoped>
  .form-input-lg {
    font-size: 20px !important;
  }
</style>
