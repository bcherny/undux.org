ts
```ts
// MyStore.ts
import { connect, createStore, Store } from 'undux'

type State = {..}

let store = createStore(..)

export let withStore = connect(store)
export type StoreProps = {
  store: Store<State>
}

// MyComponent.ts
import { Component } from 'react'
import { StoreProps, withStore } from './MyStore'

type Props = StoreProps & {..}

let MyComponent = withStore(
  class extends Component<Props> {..}
)
```

flow
```ts
// MyStore.js
import { connect, createStore, Store } from 'undux'

type State = {..}

let store = createStore(..)

export let withStore = connect(store)
export type StoreProps = {
  store: Store<State>
}

// MyComponent.js
import { Component } from 'react'
import { StoreProps, withStore } from './MyStore'

type Props = {|
  ...StoreProps,
  ..
|}

let MyComponent = withStore(
  class extends Component<Props> {..}
)
```

es6
```js
// MyStore.js
import { connect, createStore } from 'undux'

let store = createStore(..)
export let withStore = connect(store)

// MyComponent.js
import { Component } from 'react'
import { withStore } from './MyStore'

let MyComponent = withStore(
  class extends Component {..}
)
```

es5
```js
// MyStore.js
var undux = require('undux')

var store = undux.createStore(..)
module.exports.withStore = undux.connect(store)

// MyComponent.js
var React = require('react')
var MyStore = require('./MyStore')

var MyComponent = MyStore.withStore(
  React.createClass(..)
)
```