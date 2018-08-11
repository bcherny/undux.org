ts
```ts
import { Effects } from 'undux'
import { State } from './ExampleStore'

const withLocalStorage: Effects<State> = store => {

  // Listen on all events
  store.onAll().subscribe(({ key, previousValue, value }) =>
    console.log(
      'changed', key,
      'from', previousValue,
      'to', value
    )
  )

  return store
}

export default withLocalStorage
```

flow
```js
import type { Effects } from 'undux'
import type { State } from './ExampleStore'

const withLocalStorage: Effects<State> = store => {

  // Listen on all events
  store.onAll().subscribe(({ key, previousValue, value }) =>
    console.log(
      'changed', key,
      'from', previousValue,
      'to', value
    )
  )

  return store
}

export default withLocalStorage
```

es6
```js
function withLocalStorage(store) {

  // Listen on all events
  store.onAll().subscribe(({ key, previousValue, value }) =>
    console.log(
      'changed', key,
      'from', previousValue,
      'to', value
    )
  )

  return store
}

export default withLocalStorage
```

es5
```js
function withLocalStorage(store) {

  // Listen on all events
  store.onAll().subscribe(function(change) {
    console.log(
      'changed', change.key,
      'from', change.previousValue,
      'to', change.value
    )
  })

  return store
}

module.exports = withLocalStorage
```
