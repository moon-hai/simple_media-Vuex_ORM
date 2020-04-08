<template>
  <select>
    <option>Choose tag</option>
    <option
      :value="tag.name"
      v-for="tag in tags"
      :selected="tagSelected === tag.name"
      :key="tag.name">{{ tag.name }}</option>
  </select>
</template>

<script>
import Tag from '@/models/tag'

export default {
  name: 'TagSelect',

  props: ['tagSelected'],

  computed: {
    tags () {
      return Tag.all()
    }
  }
}
</script>

<style>
