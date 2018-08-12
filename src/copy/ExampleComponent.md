ts
```ts
import React from 'react'
import Store, { StoreProps } from './Store'

class Component extends React.Component<StoreProps> {
  render() {
    return <>
      Foo: {this.props.store.foo}
      Bar: {this.props.store.bar.join(', ')}
    </>
  }
}

export default Store.withStore(Component)
```

flow
```js
import type { StoreProps } from './Store'
import React from 'react'
import Store from './Store'

class Component extends React.Component<StoreProps> {
  render() {
    return <>
      Foo: {this.props.store.foo}
      Bar: {this.props.store.bar.join(', ')}
    </>
  }
}

export default Store.withStore(Component)
```

es6
```js
import React from 'react'
import Store from './Store'

class Component extends React.Component {
  render() {
    return <>
      Foo: {this.props.store.foo}
      Bar: {this.props.store.bar.join(', ')}
    </>
  }
}

export default Store.withStore(Component)
```

es5
```js
var createReactClass = require('create-react-class')
var React = require('react')
var Store = require('./Store')

var Component = createReactClass({
  render() {
    return <>
      Foo: {this.props.store.foo}
      Bar: {this.props.store.bar.join(', ')}
    </>
  }
})

module.exports = Store.withStore(Component)
```