<template>
  <div class="col-12">
    <div class="card">
      <div class="card__header">
        <h3 class="headline--lg">{{ post.title }}</h3>
      </div>
      <div class="card__body">
        <p>{{ post.description }}</p>
      </div>

       <ul class="card__body">
          <tag-item
            v-for="tag in tags"
            :key="tag.name"
            :tag="tag" />
        </ul>

      <div class="card__info">
        <p><i>{{ post.author.name }}</i></p>
        <p><i>{{ post.createdAt }}</i></p>
      </div>

      <comment-section
        :postId="post.id" />
    </div>
  </div>
</template>

<script>
import CommentSection from './CommentSection'
import TagItem from './TagItem'

export default {
  name: 'PostItem',

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  components: {
    CommentSection,
    TagItem
  },

  computed: {
    tags () {
      return this.post.tags
    }
  }
}
</script>
