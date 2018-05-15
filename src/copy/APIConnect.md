es6
```js
import { connect, createStore } from 'undux'

let store = createStore({
  kittens: 12,
  puppies: ['babka', 'spot'],
  rabbits: undefined
})

let withStore = connect(store)
```
