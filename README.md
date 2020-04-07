# Simple Media using Vuex-ORM

## Stacks
```
Vue, Vue-cli
State management: Vuex, [Vuex-ORM](https://vuex-orm.org/)
```

## Structure
### Define models
```
models
|_____ post.js       // post model
|_____ user.js       // user model
|_____ tag.js        // tag model
|_____ post-tag.js   // post-tag model (many to many)
|_____ comment.js    // comment
```

### Register database
```js
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
```

### Create store with Vuex
```js
import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import database from '@/database'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
