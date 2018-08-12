ts
```ts
import React from 'react'
import MyComponent from './MyComponent'
import Store from './MyStore'

class MyApp extends React.Component {
  render() {
    return <Store.Container>
      <MyComponent baz={3} />
    </Store.Container>
  }
}

export default MyApp
```

flow
```js
import React from 'react'
import MyComponent from './MyComponent'
import Store from './MyStore'

class MyApp extends React.Component {
  render() {
    return <Store.Container>
      <MyComponent baz={3} />
    </Store.Container>
  }
}

export default MyApp
```

es6
```js
import React from 'react'
import MyComponent from './MyComponent'
import Store from './MyStore'

class MyApp extends React.Component {
  render() {
    return <Store.Container>
      <MyComponent baz={3} />
    </Store.Container>
  }
}

export default MyApp
```

es5
```js
var createReactClass = require('create-react-class')
var React = require('react')
var MyComponent = require('./MyComponent')
var Store = require('./MyStore')

var MyApp = createReactClass({
  render() {
    return <Store.Container>
      <MyComponent baz={3} />
    </Store.Container>
  }
})

module.exports = MyApp
```