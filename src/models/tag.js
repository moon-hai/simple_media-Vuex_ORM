import { Model } from '@vuex-orm/core'
import Post from './post'
import PostTag from './post-tag'

class Tag extends Model {
  static entity = 'tags'

  static primaryKey = 'name'

  static fields () {
    return {
      name: this.string(),
      posts: this.belongsToMany(Post, PostTag, 'tag_id', 'post_id')
    }
  }
}

export default Tag
