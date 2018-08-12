ts
```ts
import React from 'react'
import Store, { StoreProps } from './MyStore'

class MyComponent extends React.Component<StoreProps> {
  render() {
    return <>
      X = {this.props.store.get('x')}
      Y = {this.props.store.get('y')}
      X + Y = {this.props.store.get('derived/z')}
    </>
  }
}

export default Store.withStore(MyComponent)
```

flow
```js
import type { StoreProps } from './MyStore'
import React from 'react'
import Store from './MyStore'

class MyComponent extends React.Component<StoreProps> {
  render() {
    return <>
      X = {this.props.store.get('x')}
      Y = {this.props.store.get('y')}
      X + Y = {this.props.store.get('derived/z')}
    </>
  }
}

export default Store.withStore(MyComponent)
```

es6
```js
import React from 'react'
import Store from './MyStore'

class MyComponent extends React.Component {
  render() {
    return <>
      X = {this.props.store.get('x')}
      Y = {this.props.store.get('y')}
      X + Y = {this.props.store.get('derived/z')}
    </>
  }
}

export default Store.withStore(MyComponent)
```

es5
```js
var createReactClass = require('create-react-class')
var React = require('react')
var Store = require('./MyStore')

var MyComponent = createReactClass({
  render() {
    return <>
      X = {this.props.store.get('x')}
      Y = {this.props.store.get('y')}
      X + Y = {this.props.store.get('derived/z')}
    </>
  }
})

module.exports = Store.withStore(MyComponent)
```