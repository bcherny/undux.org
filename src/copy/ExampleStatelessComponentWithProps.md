ts
```ts
import { withStore } from './store'

type Props = {
  foo: number
}

let MyComponent = withStore<Props>(({ foo, store }) =>
  <div>
    Today is {store.get('today')}
    Foo is {foo}
  </div>
)

<MyComponent foo={3} />
```

flow
```js
import { StoreProps, withStore } from './store'

type Props = {|
  ...StoreProps,
  foo: number
|}

let MyComponent = withStore(({ foo, store }: Props) =>
  <div>
    Today is {store.get('today')}
    Foo is {foo}
  </div>
)

<MyComponent foo={3} />
```

es6
```js
import { withStore } from './store'

let MyComponent = withStore(({ foo, store }) =>
  <div>
    Today is {store.get('today')}
    Foo is {foo}
  </div>
)

<MyComponent foo={3} />
```

es5
```js
var store = require('./store')

var MyComponent = store.withStore(function(props) {
  return <div>
    Today is {props.store.get('today')}
    Foo is {props.foo}
  </div>
})

<MyComponent foo={3} />
```