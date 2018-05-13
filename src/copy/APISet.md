es6
```js
import { createStore } from 'undux'

// Create a store
let store = createStore({
  kittens: 12
})

store.get('kittens') // 12
store.set('kittens')(99)
store.get('kittens') // 99
```