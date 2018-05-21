ts
```ts
// MyComponent.js

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
```jsx
// MyComponent.js

import { StoreProps, withStore } from './store'

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
// MyComponent.js

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
```jsx
// MyComponent.js

var store = require('./store')

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
