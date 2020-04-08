<template>
  <li>{{ tag.name }}</li>
</template>

<script>
export default {
  name: 'TagItem',

  props: {
    tag: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  li {
    font-size: 14px;
    color: deepskyblue;
  }
</style>
