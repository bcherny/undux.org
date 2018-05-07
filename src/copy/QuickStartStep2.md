ts
```ts
import { withStore } from './store'

// Update the component when the store updates
const MyComponent = withStore(({ store }) =>
  <div>
    Hello! Today is {store.get('today')}
    <button onClick={() => store.set('today')(new Date)}>Update Date</button>
  </div>
)
```

flow
```js
import { withStore } from './store'

// Update the component when the store updates
const MyComponent = withStore(({ store }) =>
  <div>
    Hello! Today is {store.get('today')}
    <button onClick={() => store.set('today')(new Date)}>Update Date</button>
  </div>
)
```

es6
```js
import { withStore } from './store'

// Update the component when the store updates
const MyComponent = withStore(({ store }) =>
  <div>
    Hello! Today is {store.get('today')}
    <button onClick={() => store.set('today')(new Date)}>Update Date</button>
  </div>
)
```

es5
```js
var withStore = require('./store').withStore

// Update the component when the store updates
var MyComponent = withStore(function(props) {
  return <div>
    Hello! Today is {props.store.get('today')}
    <button onClick={
      function() { props.store.set('today')(new Date) }
    }>Update Date</button>
  </div>
})
```
