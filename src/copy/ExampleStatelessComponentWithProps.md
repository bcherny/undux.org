ts
```ts
import React from 'react'
import Store from './MyStore'

type Props = {
  baz: number
}

function MyComponent({ baz }: Props) {
  let store = Store.useStore()
  return <>
    Foo: {store.get('foo')}
    Baz: {baz}
  </>
}

export default MyComponent
```

flow
```js
import React from 'react'
import Store from './MyStore'

type Props = {|
  baz: number
|}

function MyComponent({ baz }: Props) {
  let store = Store.useStore()
  return <>
    Foo: {store.get('foo')}
    Baz: {baz}
  </>
}

export default MyComponent
```

es6
```js
import React from 'react'
import Store from './MyStore'

function MyComponent({ baz }) {
  let store = Store.useStore()
  return <>
    Foo: {store.get('foo')}
    Baz: {baz}
  </>
})

export default MyComponent
```

es5
```js
var React = require('react')
var Store = require('./MyStore')

function MyComponent(props) {
  var store = Store.useStore()
  return <>
    Foo: {store.get('foo')}
    Baz: {props.baz}
  </>
}

module.exports = MyComponent
```
