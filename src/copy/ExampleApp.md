ts
```ts
import React from 'react'
import Component from './Component'
import Store from './Store'

class App extends React.Component {
  render() {
    return <Store.Container>
      <Component />
    </Store.Container>
  }
}

export default App
```

flow
```js
import React from 'react'
import Component from './Component'
import Store from './Store'

class App extends React.Component {
  render() {
    return <Store.Container>
      <Component />
    </Store.Container>
  }
}

export default App
```

es6
```js
import React from 'react'
import Component from './Component'
import Store from './Store'

class App extends React.Component {
  render() {
    return <Store.Container>
      <Component />
    </Store.Container>
  }
}

export default App
```

es5
```js
var createReactClass = require('create-react-class')
var React = require('react')
var Store = require('./Store')

var App = createReactClass({
  render() {
    return <Store.Container>
      <Component />
    </Store.Container>
  }
})

module.export = App
```