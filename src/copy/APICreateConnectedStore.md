ts
```ts
import { createConnectedStore } from 'undux'

type State = {
  kittens: number,
  puppies: string[],
  rabbits: string[] | undefined
}

let initialState: State = {
  kittens: 12,
  puppies: ['babka', 'spot'],
  rabbits: undefined
}

let {withStore, Container} = createConnectedStore(initialState)

export {withStore, Container}
```

flow
```ts
import { createConnectedStore } from 'undux'

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

let {withStore, Container} = createConnectedStore(initialState)

export {withStore, Container}
```

es6
```js
import { createConnectedStore } from 'undux'

let {withStore, Container} = createConnectedStore({
  kittens: 12,
  puppies: ['babka', 'spot'],
  rabbits: undefined
})

export {withStore, Container}
```

es5
```js
var undux = require('undux')

var store = undux.createConnectedStore({
  kittens: 12,
  puppies: ['babka', 'spot'],
  rabbits: undefined
})

module.exports.withStore = store.withStore
module.exports.Container = store.Container
```
