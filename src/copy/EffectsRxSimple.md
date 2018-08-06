ts
```ts
import {debounce, filter} from 'rxjs/operators'

store
  .on('today')
  .pipe(
    filter(_ => _.getTime() % 2 === 0), // only even timestamps
    debounceTime(100)                   // fire at most every 100 milliseconds
  )
  .subscribe(value =>
    alert(`Today changed to: ${value.toISOString()}`)
  )
```

flow
```js
import {filter, throttle} from 'rxjs/operators'

store
  .on('today')
  .pipe(
    filter(_ => _.getTime() % 2 === 0), // only even timestamps
    debounceTime(100)                   // fire at most every 100 milliseconds
  )
  .subscribe(value =>
    alert(`Today changed to: ${value.toISOString()}`)
  )
```

es6
```js
import {filter, throttle} from 'rxjs/operators'

store
  .on('today')
  .pipe(
    filter(_ => _.getTime() % 2 === 0), // only even timestamps
    debounceTime(100)                   // fire at most every 100 milliseconds
  )
  .subscribe(value =>
    alert(`Today changed to: ${value.toISOString()}`)
  )
```

es5
```js
var operators = require('rxjs/operators')

store
  .on('today')
  .pipe(
    operators.filter(function(_) {
      return _.getTime() % 2 === 0      // only even timestamps
    }),
    operators.debounceTime(100)         // fire at most every 100 milliseconds
  )
  .subscribe(function(value) {
    alert('Today changed to: ' + value.toISOString())
  })
```
