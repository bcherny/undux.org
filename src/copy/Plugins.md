ts
```ts
import { Plugin } from 'undux'
import { State } from './exampleStore'

const withLocalStorage: Plugin<State> = store => {

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
```

flow
```ts
import type { Plugin } from 'undux'
import type { State } from './exampleStore'

const withLocalStorage: Plugin<State> = store => {

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
```

es6
```ts
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
```

es5
```ts
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
```
