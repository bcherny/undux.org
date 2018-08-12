ts
```ts
import { combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'
import { StoreEffects } from './MyStore'

let effects: StoreEffects = store => {

  combineLatest(store.on('x'), store.on('y'))
    .pipe(
      map(([x, y]) => x + y)
    )
    .subscribe(store.set('derived/z'))

  return store
}

export default effects
```

flow
```js
import { combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'
import type { StoreEffects } from './MyStore'

let effects: StoreEffects = store => {

  combineLatest(store.on('x'), store.on('y'))
    .pipe(
      map(([x, y]) => x + y)
    )
    .subscribe(store.set('derived/z'))

  return store
}

export default effects
```

es6
```js
import { combineLatest } from 'rxjs'
import { map } from 'rxjs/operators'

let effects = store => {

  combineLatest(store.on('x'), store.on('y'))
    .pipe(
      map(([x, y]) => x + y)
    )
    .subscribe(store.set('derived/z'))

  return store
}

export default effects
```

es5
```js
var rxjs = require('rxjs')
var ops = require('rxjs/operators')

function effects(store) {

  rxjs
    .combineLatest(
      store.on('x'),
      store.on('y')
    )
    .pipe(
      ops.map(([x, y]) => x + y)
    )
    .subscribe(store.set('derived/z'))

  return store
}

module.exports = effects
```
