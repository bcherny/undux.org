ts
```tsx
// MyComponent.ts
import Store, {StoreProps} from './MyStore'

type Props = StoreProps & {
  foo: number
}

function MyComponent({ foo, store }: Props) {
  return <div>
    Today is {store.get('today')}
    Foo is {foo}
  </div>
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

function MyComponent({ foo, store }: Props) {
  return <div>
    Today is {store.get('today')}
    Foo is {foo}
  </div>
}

export default Store.withStore(MyComponent)

// MyConsumer.js
<MyComponent foo={3} />
```

es6
```js
// MyComponent.js
import Store from './MyStore'

function MyComponent({ foo, store }) {
  return <div>
    Today is {store.get('today')}
    Foo is {foo}
  </div>
})

export default Store.withStore(MyComponent)

// MyConsumer.js
<MyComponent foo={3} />
```

es5
```js
// MyComponent.js
var Store = require('./MyStore')

function MyComponent(props) {
  return <div>
    Today is {props.store.get('today')}
    Foo is {props.foo}
  </div>
}

module.exports = Store.withStore(MyComponent)

// MyConsumer.js
<MyComponent foo={3} />
```
