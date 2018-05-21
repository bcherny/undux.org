ts
```ts
// myStore.ts

import { connect, createStore, Store } from 'undux'

// Declare your store's types.
type State = {
  today: Date
  users: string[]
}

// Create a store with an initial value.
const store = createStore<State>({
  today: new Date,
  users: []
})

// Export a connector function for React.
export const withStore = connect(store)

// Export prop types for React.
export type StoreProps = {
  store: Store<State>
}
```

flow
```ts
// myStore.js

import { connect, createStore } from 'undux'

// Declare your store's types.
type Store = {|
  today: Date,
  users: Array<string>
|}

const initialState: State = {
  today: new Date,
  users: []
}

// Create a store with an initial value.
const store = createStore(initialState)

// Export a connector function for React.
export const withStore = connect(store)

// Export prop types for React.
export type StoreProps = {|
  store: typeof Store
|}
```

es6
```js
// myStore.js

import { connect, createStore } from 'undux'

// Create a store with an initial value.
const store = createStore({
  today: new Date,
  users: []
})

export const withStore = connect(store)
```

es5
```js
// myStore.js

var undux = require('undux')

// Create a store with an initial value.
var store = undux.createStore({
  today: new Date,
  users: []
})

module.exports.withStore = undux.connect(store)
```