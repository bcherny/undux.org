ts
```ts
import { createStore } from 'undux'

type State = {
  kittens: number,
  puppies: string[],
  rabbits: string[] | undefined
}

let store = createStore<State>({
  kittens: 12,
  puppies: ['babka', 'spot'],
  rabbits: undefined
})
```

flow
```ts
import { createStore } from 'undux'

type State = {|
  kittens: number,
  puppies: string[],
  rabbits: ?string[]
|}

let initialState: State = {
  kittens: 12,
  puppies: ['babka', 'spot'],
  rabbits: undefined
}

let store = createStore(initialState)
```

es6
```js
import { createStore } from 'undux'

let store = createStore({
  kittens: 12,
  puppies: ['babka', 'spot'],
  rabbits: undefined
})
```

es5
```js
var undux = require('undux')

var store = undux.createStore({
  kittens: 12,
  puppies: ['babka', 'spot'],
  rabbits: undefined
})
```
