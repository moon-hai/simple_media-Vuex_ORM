<template>
  <div class="card">
    <div class="card__body">
      <p>{{ comment.content }}</p>
    </div>

    <div class="card__info">
      <p><i>{{ comment.user_name }}</i></p>
      <p><i>{{ comment.createdAt }}</i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',

  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>
