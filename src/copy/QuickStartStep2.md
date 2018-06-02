ts
```ts
import { StorePlugin } from './MyStore'

export let withEffects: StorePlugin = store => {
  store
    .on('buttonText')
    .subscribe(buttonText =>
      console.log('The user updated buttonText to', buttonText)
    )
  return store
}
```

flow
```ts
import type { StorePlugin } from './MyStore'

export let withEffects: StorePlugin = store => {
  store
    .on('buttonText')
    .subscribe(buttonText =>
      console.log('The user updated buttonText to', buttonText)
    )
  return store
}
```

es6
```js
export function withEffects(store) {
  store
    .on('buttonText')
    .subscribe(buttonText =>
      console.log('The user updated buttonText to', buttonText)
    )
  return store
}
```

es5
```js
module.exports.withEffects = function(store) {
  store
    .on('buttonText')
    .subscribe(function (buttonText) {
      console.log('The user updated buttonText to', buttonText)
    })
  return store
}
```
