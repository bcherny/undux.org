ts
```ts
import { StoreEffects } from './MyStore'

let effects: StoreEffects = store => {
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
import type { StoreEffects } from './MyStore'

let effects: StoreEffects = store => {
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
