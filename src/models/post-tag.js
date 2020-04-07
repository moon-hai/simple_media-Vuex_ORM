import { Model } from '@vuex-orm/core'

class PostTag extends Model {
  static entity = 'postTag'

  static primaryKey = ['post_id', 'tag_name']

  static fields () {
    return {
      post_id: this.attr(null),
      tag_name: this.attr(null)
    }
  }
}

export default PostTag
