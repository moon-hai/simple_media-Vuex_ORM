<template>
  <div>
    <h3 class="headline">Comments: </h3>

    <comment-item
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment" />
  </div>
</template>

<script>
import CommentItem from './CommentItem'
import Comment from '@/models/comment'

export default {
  name: 'CommentSection',

  props: ['postId'],

  components: {
    CommentItem
  },

  computed: {
    comments () {
      return Comment.query().whereHas('article', query => {
        query.where('id', this.postId)
      }).get()
    }
  }
}
</script>

<style lang="css" scoped>
  h3 {
    padding-left: 8px;
    padding-top: 24px;
  }
</style>
