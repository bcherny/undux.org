ts
```ts
import { createConnectedStore, Effect } from 'undux'
import effects from './MyEffects'

// Declare your store's types.
type State = {
  buttonText: string
  clickCount: number
}

// Declare your store's initial state.
const initialState: State = {
  buttonText: 'Click Me',
  clickCount: 0
}

// Create & export a store with an initial value.
export default createConnectedStore(initialState, effects)

// Export prop types for React.
export type StoreProps = {
  store: typeof store
}

// Export a concrete Effect type for effects.
export type StoreEffect = Effect<State>
```

flow
```ts
import type { Effect, Store } from 'undux'
import { createConnectedStore } from 'undux'
import effects from './MyEffects'

// Declare your store's types.
type State = {|
  buttonText: string,
  clickCount: number
|}

// Declare your store's initial state.
const initialState: State = {
  buttonText: 'Click Me',
  clickCount: 0
}

// Create & export a store with an initial value.
export default createConnectedStore(initialState, effects)

// Export prop types for React.
export type StoreProps = {|
  store: Store<State>
|}

// Export a concrete Effect type for effects.
export type StoreEffect = Effect<State>
```

es6
```js
import { createConnectedStore } from 'undux'
import effects from './MyEffects'

// Declare your store's initial state.
const initialState = {
  buttonText: 'Click Me',
  clickCount: 0
}

// Create & export a store with an initial value.
export default createConnectedStore(initialState, effects)
```

es5
```js
var undux = require('undux')
var effects = require('./MyEffects')

// Declare your store's initial state.
var initialState = {
  buttonText: 'Click Me',
  clickCount: 0
}

// Create & export a store with an initial value.
module.exports = undux.createConnectedStore(
  initialState,
  effects
)
```