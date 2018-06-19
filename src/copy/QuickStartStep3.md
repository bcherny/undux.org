ts
```tsx
import * as React from 'react'
import { StoreProps, withStore } from './MyStore'

class MyComponent extends React.Component<StoreProps> {
  render() {
    return <div>
      You clicked the button {store.get('clickCount')} times
      <button onClick={() =>
        store.set('clickCount')(store.get('clickCount') + 1)
      }>{store.get('buttonText')}</button>
    </div>
  }
}

// Update the component when the store updates
export default withStore(MyComponent)
```

flow
```jsx
import React from 'react'
import { StoreProps, withStore } from './MyStore'

class MyComponent extends React.Component<StoreProps> {
  render() {
    return <div>
      You clicked the button {store.get('clickCount')} times
      <button onClick={() =>
        store.set('clickCount')(store.get('clickCount') + 1)
      }>{store.get('buttonText')}</button>
    </div>
  }
}

// Update the component when the store updates
export default withStore(MyComponent)
```

es6
```js
import React from 'react'
import { withStore } from './MyStore'

class MyComponent extends React.Component {
  render() {
    return <div>
      You clicked the button {store.get('clickCount')} times
      <button onClick={() =>
        store.set('clickCount')(store.get('clickCount') + 1)
      }>{store.get('buttonText')}</button>
    </div>
  }
}

// Update the component when the store updates
export default withStore(MyComponent)
```

es5
```js
var store = require('./MyStore')

function MyComponent(props) {
  return <div>
    You clicked the button {store.get('clickCount')} times.
    <button onClick={function() {
      store.set('clickCount')(store.get('clickCount') + 1)
    }}>{store.get('buttonText')}</button>
  </div>
}

// Update the component when the store updates
module.exports = store.withStore(MyComponent)
```
