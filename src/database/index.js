import { Database } from '@vuex-orm/core'

import User from '@/models/user'
import Post from '@/models/post'
import Tag from '@/models/tag'
import Comment from '@/models/comment'
import PostTag from '@/models/post-tag'

const database = new Database()

database.register(User)
database.register(Post)
database.register(Tag)
database.register(Comment)
database.register(PostTag)

export default database
