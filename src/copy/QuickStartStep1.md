ts
```ts
import { connect, createStore, Plugin, Store } from 'undux'
import { withEffects } from './effects'

// Declare your store's types.
type State = {
  today: Date
  users: string[]
}

// Create a store with an initial value.
const store = withEffects(createStore<State>({
  today: new Date,
  users: []
}))

// Export a connector function for React.
export const withStore = connect(store)

// Export prop types for React.
export type StoreProps = {
  store: Store<State>
}

// Export a concrete Plugin type for effects.
export type StorePlugin = Plugin<State>
```

flow
```ts
import { connect, createStore, Plugin, Store } from 'undux'
import { withEffects } from './effects'

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
const store = withEffects(createStore(initialState))

// Export a connector function for React.
export const withStore = connect(store)

// Export prop types for React.
export type StoreProps = {|
  store: Store<State>
|}

// Export a concrete Plugin type for effects.
export type StorePlugin = Plugin<State>
```

es6
```js
import { connect, createStore } from 'undux'
import { withEffects } from './effects'

// Create a store with an initial value.
const store = withEffects(createStore({
  today: new Date,
  users: []
}))

export const withStore = connect(store)
```

es5
```js
var undux = require('undux')
var effects = require('./effects')

// Create a store with an initial value.
var store = effects.withEffects(undux.createStore({
  today: new Date,
  users: []
}))

module.exports.withStore = undux.connect(store)
```