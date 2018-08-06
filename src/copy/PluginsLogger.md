ts
```ts
import { createConnectedStore, withLogger } from 'undux'

let {withStore, Container} = createConnectedStore(
  initialState,
  withLogger
)
```

flow
```js
import { createConnectedStore, withLogger } from 'undux'

let {withStore, Container} = createConnectedStore(
  initialState,
  withLogger
)
```

es6
```js
import { createConnectedStore, withLogger } from 'undux'

let {withStore, Container} = createConnectedStore(
  initialState,
  withLogger
)
```

es5
```js
var undux = require('undux')

var Store = undux.createConnectedStore(
  initialState,
  undux.withLogger
)
```
