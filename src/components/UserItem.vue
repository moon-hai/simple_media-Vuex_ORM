<template>
  <div class="d-flex">
    <p>{{ user.name }}</p>
    <p>{{ postLength }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserItem',

  props: {
    user: {
      type: Object,
      required: true
    }
  },

  computed: {
    postLength () {
      return this.user.posts.length
    }
  }
}
</script>

<style>
  .d-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  .d-flex + .d-flex {
    margin-top: 10px;
  }
</style>
