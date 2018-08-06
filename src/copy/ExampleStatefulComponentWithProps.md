ts
```ts
// MyComponent.ts
import Store, { StoreProps } from './MyStore'

type Props = StoreProps & {
  foo: number
}

class MyComponent extends React.Component<Props> {
  render() {
    return <div>
      Today is {this.props.store.get('today')}
      Foo is {this.props.foo}
    </div>
  }
}

export default Store.withStore(MyComponent)

// MyConsumer.ts
<MyComponent foo={3} />
```

flow
```js
// MyComponent.js
import type { StoreProps } from './MyStore'
import Store from './MyStore'

type Props = {|
  ...StoreProps,
  foo: number
|}

class MyComponent extends React.Component<Props> {
  render() {
    return <div>
      Today is {this.props.store.get('today')}
      Foo is {this.props.foo}
    </div>
  }
})

export default Store.withStore(MyComponent)

// MyConsumer.js
<MyComponent foo={3} />
```

es6
```js
// MyComponent.js
import Store from './MyStore'

class MyComponent extends React.Component {
  render() {
    return <div>
      Today is {this.props.store.get('today')}
      Foo is {this.props.foo}
    </div>
  }
})

export default Store.withStore(MyComponent)

// MyConsumer.js
<MyComponent foo={3} />
```

es5
```js
// MyComponent.js
var createReactClass = require('create-react-class')
var Store = require('./MyStore')

var MyComponent = Store.withStore(createReactClass({
  render() {
    return <div>
      Today is {this.props.store.get('today')}
      Foo is {this.props.foo}
    </div>
  }
}))

module.exports = MyComponent

// MyConsumer.js
<MyComponent foo={3} />
```
