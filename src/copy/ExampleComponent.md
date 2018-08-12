ts
```ts
import React from 'react'
import Store, { StoreProps } from './MyStore'

class MyComponent extends React.Component<StoreProps> {
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Bar: {this.props.store.get('bar').join(', ')}
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
      Foo: {this.props.store.get('foo')}
      Bar: {this.props.store.get('bar').join(', ')}
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
      Foo: {this.props.store.get('foo')}
      Bar: {this.props.store.get('bar').join(', ')}
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
      Foo: {this.props.store.get('foo')}
      Bar: {this.props.store.get('bar').join(', ')}
    </>
  }
})

module.exports = Store.withStore(MyComponent)
```