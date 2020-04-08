import { Model } from '@vuex-orm/core'
import User from './user'
import Tag from './tag'
import PostTag from './post-tag'
import Comment from './comment'

class Post extends Model {
  static entity = 'posts'

  static fields () {
    return {
      id: this.uid(),
      user_name: this.string(),
      title: this.string(''),
      description: this.string(''),
      createdAt: this.string(),
      author: this.belongsTo(User, 'user_name'),
      tags: this.belongsToMany(Tag, PostTag, 'tag_name', 'post_id'),
      comments: this.hasMany(Comment, 'post_id')
    }
  }
}

export default Post
