<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-5 col-md--5 col-sm-12">

        </div>

        <div class="col-5 col-md--5 col-sm-12">
          <post-items />
        </div>

        <div class="col-2 col-md--2 col-sm-12">
          <tags-section />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import initData from './initData'
import Post from '@/models/post'
import PostItems from './components/PostItems'
import TagsSection from './components/TagsSection'

export default {
  name: 'App',

  components: {
    PostItems,
    TagsSection
  },

  created () {
    Post.create({ data: initData })
  }
}
</script>
