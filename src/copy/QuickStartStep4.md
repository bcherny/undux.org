ts
```tsx
import React from 'react'
import MyComponent from './MyComponent'
import Store from './MyStore'

class App extends React.Component {
  render() {
    return <Store.Container>
      <MyComponent />
    </Store.Container>
  }
}

export default App
```

flow
```js
import React from 'react'
import MyComponent from './MyComponent'
import Store from './MyStore'

class App extends React.Component {
  render() {
    return <Store.Container>
      <MyComponent />
    </Store.Container>
  }
}

export default App
```

es6
```js
import React from 'react'
import MyComponent from './MyComponent'
import Store from './MyStore'

class App extends React.Component {
  render() {
    return <Store.Container>
      <MyComponent />
    </Store.Container>
  }
}

export default App
```

es5
```js
var React = require('react')
var MyComponent = require('./MyComponent')
var Store = require('./MyStore')

function App() {
  return <Store.Container>
    <MyComponent />
  </Store.Container>
}

module.exports = App
```
