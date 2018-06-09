ts
```ts
import { StoreProps, withStore } from './store'

type Props = StoreProps & {
  foo: number
}

let MyComponent = withStore(class extends React.Component<Props> {
  render() {
    return <div>
      Today is {this.props.store.get('today')}
      Foo is {this.props.foo}
    </div>
  }
})

<MyComponent foo={3} />
```

flow
```js
import { StoreProps, withStore } from './store'

type Props = {|
  ...StoreProps,
  foo: number
|}

let MyComponent = withStore(class extends React.Component<Props> {
  render() {
    return <div>
      Today is {this.props.store.get('today')}
      Foo is {this.props.foo}
    </div>
  }
})

<MyComponent foo={3} />
```

es6
```js
import { withStore } from './store'

let MyComponent = withStore(class extends React.Component {
  render() {
    return <div>
      Today is {this.props.store.get('today')}
      Foo is {this.props.foo}
    </div>
  }
})

<MyComponent foo={3} />
```

es5
```js
var createReactClass = require('create-react-class')
var store = require('./store')

var MyComponent = store.withStore(createReactClass({
  render() {
    return <div>
      Today is {this.props.store.get('today')}
      Foo is {this.props.foo}
    </div>
  }
}))

<MyComponent foo={3} />
```