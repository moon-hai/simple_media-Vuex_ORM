<template>
  <div id="app">
    <h1>Hello</h1>
  </div>
</template>

<script>
import initData from './initData'
import Post from '@/models/post'

export default {
  name: 'App',

  computed: {
    posts () {
      return Post.query().whereHas('tags', query => {
        query.where('name', 'lorem')
      }).get()
    }
  },

  created () {
    Post.create({ data: initData })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
