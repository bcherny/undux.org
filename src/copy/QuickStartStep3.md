ts
```ts
import { withStore } from './MyStore'

// Update the component when the store updates
const MyComponent = withStore(({ store }) =>
  <div>
    Hello! Today is {store.get('today')}
    <button onClick={() => store.set('today')(new Date)}>Update Date</button>
  </div>
)
```

flow
```jsx
import { StoreProps, withStore } from './MyStore'

// Update the component when the store updates
const MyComponent = withStore(({ store }: StoreProps) =>
  <div>
    Hello! Today is {store.get('today')}
    <button onClick={() => store.set('today')(new Date)}>Update Date</button>
  </div>
)
```

es6
```jsx
import { withStore } from './MyStore'

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
var store = require('./MyStore')

// Update the component when the store updates
var MyComponent = store.withStore(function(props) {
  return <div>
    Hello! Today is {props.store.get('today')}
    <button onClick={
      function() { props.store.set('today')(new Date) }
    }>Update Date</button>
  </div>
})
```
