ts
```ts
import React from 'react'
import Store, {StoreProps} from './MyStore'

type Props = StoreProps & {
  baz: number
}

function MyComponent({ baz, store }: Props) {
  return <>
    Foo: {store.get('foo')}
    Baz: {baz}
  </>
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

function MyComponent({ baz, store }: Props) {
  return <>
    Foo: {store.get('foo')}
    Baz: {baz}
  </>
}

export default Store.withStore(MyComponent)
```

es6
```js
import React from 'react'
import Store from './MyStore'

function MyComponent({ baz, store }) {
  return <>
    Foo: {store.get('foo')}
    Baz: {baz}
  </>
})

export default Store.withStore(MyComponent)
```

es5
```js
var React = require('react')
var Store = require('./MyStore')

function MyComponent(props) {
  return <>
    Foo: {props.store.get('foo')}
    Baz: {props.baz}
  </>
}

module.exports = Store.withStore(MyComponent)
```
