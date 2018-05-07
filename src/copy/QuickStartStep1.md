ts
```ts
import { connect, createStore } from 'undux'

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

export const withStore = connect(store)
```

flow
```ts
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

export const withStore = connect(store)
```

es6
```ts
import { connect, createStore } from 'undux'

// Create a store with an initial value.
const store = createStore({
  today: new Date,
  users: []
})

export const withStore = connect(store)
```

es5
```ts
var undux = require('undux')

// Create a store with an initial value.
var store = undux.createStore({
  today: new Date,
  users: []
})

module.exports.withStore = undux.connect(store)
```