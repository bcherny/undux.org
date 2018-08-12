ts
```ts
import { Effects, Store, createConnectedStore } from 'undux'
import effects from './MyEffects'

type State = {
  x: number
  y: number
  'derived/z': number
}

let initialState: State = {
  x: 0,
  y: 0,
  'derived/z': 0
}

export default createConnectedStore(initialState, effects)

export type StoreProps = {
  store: Store<State>
}

export type StoreEffects = Effects<State>
```

flow
```js
import type { Effects, Store } from 'undux'
import { createConnectedStore } from 'undux'
import effects from './MyEffects'

type State = {|
  x: number,
  y: number,
  'derived/z': number
|}

let initialState: State = {
  x: 0,
  y: 0,
  'derived/z': 0
}

export default createConnectedStore(initialState, effects)

export type StoreProps = {|
  store: Store<State>
|}

export type StoreEffects = Effects<State>
```

es6
```js
import { createConnectedStore } from 'undux'
import effects from './MyEffects'

let initialState = {
  x: 0,
  y: 0,
  'derived/z': 0
}

export default createConnectedStore(initialState, effects)
```

es5
```js
var undux = require('undux')
var effects = require('./MyEffects')

var initialState = {
  x: 0,
  y: 0,
  'derived/z': 0
}

module.exports = undux.createConnectedStore(initialState, effects)
```