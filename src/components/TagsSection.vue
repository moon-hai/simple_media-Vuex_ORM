<template>
  <div>
    <h2 class="headline--lg">Tags</h2>

    <ul>
      <tag-item
        v-for="tag in tags"
        :key="tag.name"
        :tag="tag" />
    </ul>
  </div>
</template>

<script>
import Tag from '@/models/tag'
import TagItem from './TagItem'

export default {
  name: 'TagsSection',

  components: {
    TagItem
  },

  computed: {
    tags () {
      return Tag.all()
    }
  }
}
</script>
