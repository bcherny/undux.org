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
    // You can read kittens back from the store.
    this.props.store.get('kittens') // 12

    // The store is totally covered with static types, so you can't
    // do illegal things like read a key that doesn't exist...
    this.props.store.get('oranges') // Compile Error: Argument of type '"oranges"'
                        // is not assignable to parameter of type '"kittens"'.

    // ...Or do something invalid with a value.
    this.props.store.get('kittens').push(2)
    // Compile Error: Property 'push' does not exist on type 'number'.
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
    // You can read kittens back from the store.
    this.props.store.get('kittens') // 12

    // The store is totally covered with static types, so you can't
    // do illegal things like read a key that doesn't exist...
    this.props.store.get('oranges') // Compile Error: Argument of type '"oranges"'
                        // is not assignable to parameter of type '"kittens"'.

    // ...Or do something invalid with a value.
    this.props.store.get('kittens').push(2)
    // Compile Error: Property 'push' does not exist on type 'number'.
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
    this.props.store.get('kittens') // 12
    this.props.store.get('oranges') // undefined
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
  props.store.get('kittens') // 12
  props.store.get('oranges') // undefined
}

module.exports = Store.withStore(MyComponent)
```