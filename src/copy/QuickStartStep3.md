ts
```tsx
import React from 'react'
import Store, { StoreProps } from './MyStore'

// Using React Hooks:
function MyComponentWithHooks() {
  // Update the component when the store updates
  const store = Store.useStore()
  return <>
    You clicked the button {store.get('clickCount')} times
    <button onClick={() =>
      store.set('clickCount')(store.get('clickCount') + 1)
    }>{store.get('buttonText')}</button>
  </>
}

export default MyComponentWithHooks

// Or, not using React Hooks:
class MyComponent extends React.Component<StoreProps> {
  render() {
    const {store} = this.props
    return <>
      You clicked the button {store.get('clickCount')} times
      <button onClick={() =>
        store.set('clickCount')(store.get('clickCount') + 1)
      }>{store.get('buttonText')}</button>
    </>
  }
}

// Update the component when the store updates
export default Store.withStore(MyComponent)
```

flow
```js
import type { StoreProps } from './MyStore'
import React from 'react'
import Store from './MyStore'

// Using React Hooks:
function MyComponentWithHooks() {
  // Update the component when the store updates
  const store = Store.useStore()
  return <>
    You clicked the button {store.get('clickCount')} times
    <button onClick={() =>
      store.set('clickCount')(store.get('clickCount') + 1)
    }>{store.get('buttonText')}</button>
  </>
}

export default MyComponentWithHooks

// Or, not using React Hooks:
class MyComponent extends React.Component<StoreProps> {
  render() {
    const {store} = this.props
    return <>
      You clicked the button {store.get('clickCount')} times
      <button onClick={() =>
        store.set('clickCount')(store.get('clickCount') + 1)
      }>{store.get('buttonText')}</button>
    </>
  }
}

// Update the component when the store updates
export default Store.withStore(MyComponent)
```

es6
```js
import React from 'react'
import Store from './MyStore'

// Using React Hooks:
function MyComponentWithHooks() {
  // Update the component when the store updates
  const store = Store.useStore()
  return <>
    You clicked the button {store.get('clickCount')} times
    <button onClick={() =>
      store.set('clickCount')(store.get('clickCount') + 1)
    }>{store.get('buttonText')}</button>
  </>
}

export default MyComponentWithHooks

// Or, not using React Hooks:
class MyComponent extends React.Component {
  render() {
    const {store} = this.props
    return <>
      You clicked the button {store.get('clickCount')} times
      <button onClick={() =>
        store.set('clickCount')(store.get('clickCount') + 1)
      }>{store.get('buttonText')}</button>
    </>
  }
}

// Update the component when the store updates
export default Store.withStore(MyComponent)
```

es5
```js
var React = require('react')
var Store = require('./MyStore')

// Using React Hooks:
function MyComponentWithHooks() {
  // Update the component when the store updates
  var store = Store.useStore()
  return <>
    You clicked the button {store.get('clickCount')} times
    <button onClick={function() {
      store.set('clickCount')(store.get('clickCount') + 1)
    }}>{store.get('buttonText')}</button>
  </>
}

module.exports = MyComponentWithHooks

// Or, not using React Hooks:
function MyComponent(props) {
  return <>
    You clicked the button {props.store.get('clickCount')} times
    <button onClick={function() {
      props.store.set('clickCount')(props.store.get('clickCount') + 1)
    }}>{props.store.get('buttonText')}</button>
  </>
}

// Update the component when the store updates
module.exports = Store.withStore(MyComponent)
```
