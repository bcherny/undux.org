ts
```ts
import React from 'react'
import { createConnectedStore, Store } from 'undux'

type State = {
  kittens: number
}

let initialState: State = {
  kittens: 12
}

// Start by creating a store.
let {withStore} = createConnectedStore(initialState)

// The type of your React component's props.
type StoreProps = {
  store: Store<State>
}

class MyComponent extends React.Component<StoreProps> {
  render() {
    // TypeScript inferred that the type of kittens is number.
    // You can write kittens to the store, which will automatically
    // re-render <MyComponent />.
    this.props.store.set('kittens')(13)

    // The store is totally covered with static types, so you can't
    // do illegal things like set a key that doesn't exist...
    this.props.store.set('kitenz')(13) // Compile Error: Argument of type
                        // '"kitenz"' is not assignable to parameter of
                        // type '"kittens"'.

    // ...Or set the wrong type of value.
    this.props.store.set('kittens')('one million') // Compile Error: Argument
                        // of type 'string' is not assignable to parameter
                        // of type 'number'.
  }
}

export default withStore(MyComponent)
```

flow
```js
import type { Store } from 'undux'
import React from 'react'
import { createConnectedStore } from 'undux'

type State = {|
  kittens: number
|}

let initialState: State = {
  kittens: 12
}

// Start by creating a store.
let {withStore} = createConnectedStore(initialState)

// The type of your React component's props.
type StoreProps = {|
  store: Store<State>
|}

class MyComponent extends React.Component<StoreProps> {
  render() {
    // Flow inferred that the type of kittens is number.
    // You can write kittens to the store, which will automatically
    // re-render <MyComponent />.
    this.props.store.set('kittens')(13)

    // The store is totally covered with static types, so you can't
    // do illegal things like set a key that doesn't exist...
    this.props.store.set('kitenz')(13) // Compile Error: Argument of type
                        // '"kitenz"' is not assignable to parameter of
                        // type '"kittens"'.

    // ...Or set the wrong type of value.
    this.props.store.set('kittens')('one million') // Compile Error: Argument
                        // of type 'string' is not assignable to parameter of
                        // type 'number'.
  }
}

export default withStore(MyComponent)
```

es6
```js
import React from 'react'
import { createConnectedStore } from 'undux'

// Start by creating a store.
let {withStore} = createConnectedStore({
  kittens: 12
})

class MyComponent extends React.Component {
  render() {
    this.props.store.set('kittens')(13)
  }
}

export default withStore(MyComponent)
```

es5
```js
var React = require('react')
var undux = require('undux')

// Start by creating a store.
var Store = undux.createConnectedStore({
  kittens: 12
})

function MyComponent(props) {
  props.store.set('kittens')(13)
}

module.exports = Store.withStore(MyComponent)
```