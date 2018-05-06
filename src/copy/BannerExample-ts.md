```ts
import { connect, createStore } from 'undux'

// If you're using Undux with TypeScript or Flow, declare your store's types.
type Store = {
  today: Date,
  users: string[]
}

// Create a store with an initial value.
let store = createStore<Store>({
  today: new Date,
  users: []
})

export let withStore = connect(store)
```
