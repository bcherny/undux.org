ts
```ts
import { StoreEffect } from './MyStore'

let effects: StoreEffect = store => {
  store
    .on('buttonText')
    .subscribe(buttonText =>
      console.log('The user updated buttonText to', buttonText)
    )
  return store
}

export default effects
```

flow
```ts
import type { StoreEffect } from './MyStore'

let effects: StoreEffect = store => {
  store
    .on('buttonText')
    .subscribe(buttonText =>
      console.log('The user updated buttonText to', buttonText)
    )
  return store
}

export default effects
```

es6
```js
let effects = store => {
  store
    .on('buttonText')
    .subscribe(buttonText =>
      console.log('The user updated buttonText to', buttonText)
    )
  return store
}

export default effects
```

es5
```js
function effects(store) {
  store
    .on('buttonText')
    .subscribe(function (buttonText) {
      console.log('The user updated buttonText to', buttonText)
    })
  return store
}

module.exports = effects
```
