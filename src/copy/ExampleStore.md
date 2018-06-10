ts
```ts
import { connect, createStore, Plugin } from 'undux'

type State = {
  foo: number,
  bar: string[]
}

let store = createStore<State>({
  foo: 12,
  bar: []
})

export let withStore = connect(store)

export type StoreProps = {
  store: typeof store
}

export type StorePlugin = Plugin<State>
```

flow
```js
import { connect, createStore, Plugin } from 'undux'

type State = {|
  foo: number,
  bar: string[]
|}

let initialState: State = {
  foo: 12,
  bar: []
}

let store = createStore(initialState)

export let withStore = connect(store)

export type StoreProps = {
  store: typeof store
}

export type StorePlugin = Plugin<State>
```

es6
```js
import { connect, createStore } from 'undux'

let store = createStore({
  foo: 12,
  bar: []
})

export let withStore = connect(store)
```

es5
```js
var undux = require('undux')

var store = undux.createStore({
  foo: 12,
  bar: []
})

module.exports.withStore = undux.connect(store)
```