import { Model } from '@vuex-orm/core'
import Post from './post'
import Comment from './comment'

class User extends Model {
  static entity = 'users'

  static primaryKey = 'name'

  static fields () {
    return {
      name: this.string(''),
      posts: this.hasMany(Post, 'user_name'),
      comments: this.hasMany(Comment, 'user_name')
    }
  }
}

export default User
