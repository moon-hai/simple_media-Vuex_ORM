import { Model } from '@vuex-orm/core'
import User from './user'
import Post from './post'

class Comment extends Model {
  static entity = 'comments'

  static fields () {
    return {
      id: this.uid(),
      user_name: this.attr(),
      post_id: this.attr(),
      content: this.string(),
      createdAt: this.string(),
      commenter: this.belongsTo(User, 'user_name'),
      article: this.belongsTo(Post, 'post_id')
    }
  }
}

export default Comment
