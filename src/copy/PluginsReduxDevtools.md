ts
```ts
import { createConnectedStore, withReduxDevtools } from 'undux'

let {withStore, Container} = createConnectedStore(initialState, withReduxDevtools)
```

flow
```js
import { createConnectedStore, withReduxDevtools } from 'undux'

let {withStore, Container} = createConnectedStore(initialState, withReduxDevtools)
```

es6
```js
import { createConnectedStore, withReduxDevtools } from 'undux'

let {withStore, Container} = createConnectedStore(initialState, withReduxDevtools)
```

es5
```js
var undux = require('undux')

var Store = undux.createConnectedStore(initialState, undux.withReduxDevtools)
```
