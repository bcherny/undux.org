ts
```ts
import { createConnectedStore, Effects } from 'undux'

type State = {
  userId: string | null
  friends: string[]
}

let initialState: State = {
  userId: null,
  friends: []
}

let effects: Effects<State> = store => {
  store
    .on('userId')
    .subscribe(async userId => {
      let friends = await fetch(`/api/friends?userId=${userId}`)
      store.set('friends')(friends)
    })
  return store
}

let {useStore, withStore, Container} = createConnectedStore(initialState, effects)

export {useStore, withStore, Container}
```

flow
```js
import type { Effects } from 'undux'
import { createConnectedStore } from 'undux'

type State = {|
  userId: string | null,
  friends: string[]
|}

let initialState: State = {
  userId: null,
  friends: []
}

let effects: Effects<State> = store => {
  store
    .on('userId')
    .subscribe(async userId => {
      let friends = await fetch(`/api/friends?userId=${userId}`)
      store.set('friends')(friends)
    })
  return store
}

let {useStore, withStore, Container} = createConnectedStore(initialState, effects)

export {useStore, withStore, Container}
```

es6
```js
import { createConnectedStore } from 'undux'

let initialState = {
  userId: null,
  friends: []
}

let effects = store => {
  store
    .on('userId')
    .subscribe(async userId => {
      let friends = await fetch(`/api/friends?userId=${userId}`)
      store.set('friends')(friends)
    })
  return store
}

let {useStore, withStore, Container} = createConnectedStore(initialState, effects)

export {useStore, withStore, Container}
```

es5
```js
var undux = require('undux')

var initialState = {
  userId: null,
  friends: []
}

function effects(store) {
  store
    .on('userId')
    .subscribe(function(userId) {
      fetch('/api/friends?userId=' + userId)
        .then(store.set('friends'))
    })
  return store
}

var store = undux.createConnectedStore(initialState, effects)

module.exports.useStore = store.useStore
module.exports.withStore = store.withStore
module.exports.Container = store.Container
```
