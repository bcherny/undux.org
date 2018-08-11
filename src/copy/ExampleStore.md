ts
```ts
import { Effects, Store, createConnectedStore } from 'undux'

type State = {
  foo: number
  bar: string[]
}

let initialState: State = {
  foo: 12,
  bar: []
}

export default createConnectedStore(initialState)

export type StoreProps = {
  store: Store<State>
}

export type StoreEffects = Effects<State>
```

flow
```js
import type { Effects, Store } from 'undux'
import { createConnectedStore } from 'undux'

type State = {|
  foo: number,
  bar: string[]
|}

let initialState: State = {
  foo: 12,
  bar: []
}

export default createConnectedStore(initialState)

export type StoreProps = {|
  store: Store<State>
|}

export type StoreEffects = Effects<State>
```

es6
```js
import { createConnectedStore } from 'undux'

let initialState = {
  foo: 12,
  bar: []
}

export default createConnectedStore(initialState)
```

es5
```js
var undux = require('undux')

var initialState = {
  foo: 12,
  bar: []
}

module.exports = undux.createConnectedStore(initialState)
```