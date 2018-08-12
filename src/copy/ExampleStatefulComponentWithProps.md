ts
```ts
import React from 'react'
import Store, {StoreProps} from './MyStore'

type Props = StoreProps & {
  baz: number
}

class MyComponent extends React.Component<Props> {
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Baz: {this.props.baz}
    </>
  }
}

export default Store.withStore(MyComponent)
```

flow
```js
import React from 'react'
import type { StoreProps } from './MyStore'
import Store from './MyStore'

type Props = {|
  ...StoreProps,
  baz: number
|}

class MyComponent extends React.Component<Props> {
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Baz: {this.props.baz}
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
      Baz: {this.props.baz}
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

var Component = createReactClass({
  render() {
    return <>
      Foo: {this.props.store.get('foo')}
      Baz: {this.props.baz}
    </>
  }
})

module.exports = Store.withStore(MyComponent)
```
