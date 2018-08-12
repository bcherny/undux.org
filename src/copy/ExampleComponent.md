ts
```ts
import React from 'react'
import Store, { StoreProps } from './MyStore'

class Component extends React.Component<StoreProps> {
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Bar: {this.props.store.get('bar').join(', ')}
    </>
  }
}

export default Store.withStore(Component)
```

flow
```js
import type { StoreProps } from './MyStore'
import React from 'react'
import Store from './MyStore'

class Component extends React.Component<StoreProps> {
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Bar: {this.props.store.get('bar').join(', ')}
    </>
  }
}

export default Store.withStore(Component)
```

es6
```js
import React from 'react'
import Store from './MyStore'

class Component extends React.Component {
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Bar: {this.props.store.get('bar').join(', ')}
    </>
  }
}

export default Store.withStore(Component)
```

es5
```js
var createReactClass = require('create-react-class')
var React = require('react')
var Store = require('./MyStore')

var Component = createReactClass({
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Bar: {this.props.store.get('bar').join(', ')}
    </>
  }
})

module.exports = Store.withStore(Component)
```