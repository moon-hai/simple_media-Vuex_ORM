<template>
  <div>
    <div class="d-flex">
      <h2 class="headline">Users</h2>
      <button
        class="btn btn--primary"
        @click="addUser">Add</button>
    </div>

    <user-item
      v-for="user in users"
      :key="user.name"
      :user="user" />
  </div>
</template>

<script>
import User from '@/models/user'
import UserItem from './UserItem'

export default {
  name: 'UserSection',

  components: {
    UserItem
  },

  computed: {
    users () {
      return User.query().with('posts').get()
    }
  },

  methods: {
    addUser () {
      const name = `name ${ this.users.length }`

      User.insert({
        data: { name }
      })
    }
  }
}
</script>
