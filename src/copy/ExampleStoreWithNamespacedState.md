ts
```ts
import { EffectsAs, Store, createConnectedStoreAs } from 'undux'
import effects from './MyEffects'

type Person = {
  id: string
  name: string
}

type Post = {
  creator: Person
  text: string
  time: Date
}

type FriendList = {
  lastUpdated: Date | undefined
  friends: Person[]
}

type Newsfeed = {
  lastUpdated: Date | undefined
  posts: Post[]
}

let initialFriendList: FriendList = {
  lastUpdated: undefined,
  friends: []
}

let initialNewsfeed: Newsfeed = {
  lastUpdated: undefined,
  posts: []
}

export default createConnectedStoreAs({
  friendList: initialFriendList,
  newsFeed: initialNewsfeed
}, effects)

export type StoreProps = {
  friendList: Store<FriendList>
  newsFeed: Store<Newsfeed>
}

export type StoreEffects = EffectsAs<{
  friendList: FriendList
  newsfeed: Newsfeed
}>
```

flow
```js
import type { EffectsAs, Store } from 'undux'
import { createConnectedStoreAs } from 'undux'
import effects from './MyEffects'

type Person = {|
  id: string,
  name: string
|}

type Post = {|
  creator: Person,
  text: string,
  time: Date
|}

type FriendList = {|
  lastUpdated: ?Date,
  friends: Person[]
|}

type Newsfeed = {|
  lastUpdated: ?Date
  posts: Post[]
|}

let initialFriendList: FriendList = {
  lastUpdated: undefined,
  friends: []
}

let initialNewsfeed: Newsfeed = {
  lastUpdated: undefined,
  posts: []
}

export default createConnectedStoreAs({
  friendList: initialFriendList,
  newsFeed: initialNewsfeed
}, effects)

export type StoreProps = {|
  friendList: Store<FriendList>,
  newsFeed: Store<Newsfeed>
|}

export type StoreEffects = EffectsAs<{|
  friendList: FriendList,
  newsfeed: Newsfeed
|}>
```

es6
```js
import { createConnectedStoreAs } from 'undux'
import effects from './MyEffects'

let initialFriendList = {
  lastUpdated: undefined,
  friends: []
}

let initialNewsfeed = {
  lastUpdated: undefined,
  posts: []
}

export default createConnectedStoreAs({
  friendList: initialFriendList,
  newsFeed: initialNewsfeed
}, effects)
```

es5
```js
var undux = require('undux')
var effects = require('./MyEffects')

var initialFriendList = {
  lastUpdated: undefined,
  friends: []
}

var initialNewsfeed = {
  lastUpdated: undefined,
  posts: []
}

module.exports = createConnectedStoreAs({
  friendList: initialFriendList,
  newsFeed: initialNewsfeed
}, effects)
```