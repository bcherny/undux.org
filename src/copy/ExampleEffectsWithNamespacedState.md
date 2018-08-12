ts
```ts
import { map } from 'rxjs/operators'
import { StoreEffects } from './MyStore'

let effects: StoreEffects = ({ friendList, newsfeed }) => {

  friendList
    .on('friends')
    .pipe(map(() => new Date))
    .subscribe(friendList.set('lastUpdated'))

  newsfeed
    .on('posts')
    .pipe(map(() => new Date))
    .subscribe(newsfeed.set('lastUpdated'))

  return { friendList, newsfeed }
}

export default effects
```

flow
```js
import { map } from 'rxjs/operators'
import type { StoreEffects } from './MyStore'

let effects: StoreEffects = ({ friendList, newsfeed }) => {

  friendList
    .on('friends')
    .pipe(map(() => new Date))
    .subscribe(friendList.set('lastUpdated'))

  newsfeed
    .on('posts')
    .pipe(map(() => new Date))
    .subscribe(newsfeed.set('lastUpdated'))

  return { friendList, newsfeed }
}

export default effects
```

es6
```js
import { map } from 'rxjs/operators'

let effects = ({ friendList, newsfeed }) => {

  friendList
    .on('friends')
    .pipe(map(() => new Date))
    .subscribe(friendList.set('lastUpdated'))

  newsfeed
    .on('posts')
    .pipe(map(() => new Date))
    .subscribe(newsfeed.set('lastUpdated'))

  return { friendList, newsfeed }
}

export default effects
```

es5
```js
var ops = require('rxjs/operators')

function effects(stores) {

  stores.friendList
    .on('friends')
    .pipe(ops.map(function() {
      return new Date
    }))
    .subscribe(stores.friendList.set('lastUpdated'))

  stores.newsfeed
    .on('posts')
    .pipe(ops.map(function() {
      return new Date
    }))
    .subscribe(stores.newsfeed.set('lastUpdated'))

  return stores
}

module.exports = effects
```
