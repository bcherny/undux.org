ts
```ts
import { Plugin } from 'undux'
import { State } from './exampleStore'

const withLocalStorage: Plugin<State> = store => {

  // Listen on all events (fires after the model updates)
  store.onAll().subscribe(({ key, previousValue, value }) =>
    console.log(
      'changed', key,
      'from', previousValue,
      'to', value
    )
  )

  // Listen on all events (fires before the model updates)
  store.beforeAll().subscribe(({ key, previousValue, value }) =>
    localStorage.set(key, value)
  )

  return store

}
```

flow
```ts
import type { Plugin } from 'undux'
import type { State } from './exampleStore'

const withLocalStorage: Plugin<State> = store => {

  // Listen on all events (fires after the model updates)
  store.onAll().subscribe(({ key, previousValue, value }) =>
    console.log(
      'changed', key,
      'from', previousValue,
      'to', value
    )
  )

  // Listen on all events (fires before the model updates)
  store.beforeAll().subscribe(({ key, previousValue, value }) =>
    // Save the new state to localStorage
    localStorage.set(key, value)
  )

  return store

}
```

es6
```ts
function withLocalStorage(store) {

  // Listen on all events (fires after the model updates)
  store.onAll().subscribe(({ key, previousValue, value }) =>
    console.log(
      'changed', key,
      'from', previousValue,
      'to', value
    )
  )

  // Listen on all events (fires before the model updates)
  store.beforeAll().subscribe(({ key, previousValue, value }) =>
    // Save the new state to localStorage
    localStorage.set(key, value)
  )

  return store

}
```

es5
```ts
function withLocalStorage(store) {

  // Listen on all events (fires after the model updates)
  store.onAll().subscribe(function(change) {
    console.log(
      'changed', change.key,
      'from', change.previousValue,
      'to', change.value
    )
  })

  // Listen on all events (fires before the model updates)
  store.beforeAll().subscribe(function(change) {
    // Save the new state to localStorage
    localStorage.set(change.key, change.value)
  })

  return store

}
```