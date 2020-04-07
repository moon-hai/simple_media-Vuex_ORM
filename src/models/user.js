import { Model } from '@vuex-orm/core'
import Post from './post'

class User extends Model {
  static entity = 'users'

  static primaryKey = 'name'

  static fields () {
    return {
      name: this.string(''),
      posts: this.hasMany(Post, 'user_id')
    }
  }
}

export default User
