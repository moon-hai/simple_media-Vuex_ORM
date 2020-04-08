<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-3 col-md--3 col-sm-12">
          <user-section />
        </div>

        <div class="col-6 col-md--6 col-sm-12">
          <post-items />
        </div>

        <div class="col-3 col-md--3 col-sm-12">
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
import UserSection from './components/UserSection'

export default {
  name: 'App',

  components: {
    PostItems,
    TagsSection,
    UserSection
  },

  created () {
    Post.create({ data: initData })
  }
}
</script>
