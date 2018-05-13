ts
```ts
import { createStore } from 'undux'

// Start by creating a store.
let store = createStore({
  kittens: 12
})

// TypeScript inferred that the type of kittens is number.
// You can read kittens back from the store.
store.get('kittens') // 12

// The store is totally covered with static types, so you can't
// do illegal things like read a key that doesn't exist...
store.get('oranges') // Compile Error: Argument of type '"oranges"'
                     // is not assignable to parameter of type '"kittens"'.

// ...Or do something invalid with a value.
store.get('kittens').push(2)
// Compile Error: Property 'push' does not exist on type 'number'.
```

flow
```js
import { createStore } from 'undux'

// Start by creating a store.
let store = createStore({
  kittens: 12
})

// Flow inferred that the type of kittens is number.
// You can read kittens back from the store.
store.get('kittens') // 12

// The store is totally covered with static types, so you can't
// do illegal things like read a key that doesn't exist...
store.get('oranges') // Compile Error: Argument of type '"oranges"'
                     // is not assignable to parameter of type '"kittens"'.

// ...Or do something invalid with a value.
store.get('kittens').push(2)
// Compile Error: Property 'push' does not exist on type 'number'.
```

es6
```js
import { createStore } from 'undux'

// Create a store
let store = createStore({
  kittens: 12
})

store.get('kittens') // 12
store.get('oranges') // undefined
```

es5
```js
var undux = require('undux')

// Create a store
var store = undux.createStore({
  kittens: 12
})

store.get('kittens') // 12
store.get('oranges') // undefined
```