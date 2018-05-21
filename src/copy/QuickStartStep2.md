ts
```ts
import { StorePlugin } from './MyStore'

export let withEffects: StorePlugin = store => {
  store
    .on('today')
    .subscribe(today =>
      console.log('today changed to', store)
    )
  return store
}
```

flow
```ts
import type { StorePlugin } from './MyStore'

export let withEffects: StorePlugin = store => {
  store
    .on('today')
    .subscribe(today =>
      console.log('today changed to', store)
    )
  return store
}
```

es6
```js
export function withEffects(store) {
  store
    .on('today')
    .subscribe(today =>
      console.log('today changed to', store)
    )
  return store
}
```

es5
```js
module.exports.withEffects = function(store) {
  store
    .on('today')
    .subscribe(function(today) {
      console.log('today changed to', store)
    })
  return store
}
```
