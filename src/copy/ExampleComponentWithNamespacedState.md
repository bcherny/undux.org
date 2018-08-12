ts
```ts
import React from 'react'
import Store, { StoreProps } from './MyStore'

class MyComponent extends React.Component<StoreProps> {
  render() {
    let {friendlist, newsfeed} = this.props
    return <>
      <h2>Latest Posts</h2>
      <h3>Updated on {newsfeed.get('lastUpdated').toLocaleString()}
      {newsfeed.get('posts').map(post =>
        post.text + ' by ' + post.creator
      )}
      <h2>Friends Online</h2>
      {friendlist.get('friends').map(friend =>
        friend.name
      )}
    </>
  }
}

export default Store.withStore(MyComponent)
```

flow
```js
import type { StoreProps } from './MyStore'
import React from 'react'
import Store from './MyStore'

class MyComponent extends React.Component<StoreProps> {
  render() {
    let {friendlist, newsfeed} = this.props
    return <>
      <h2>Latest Posts</h2>
      <h3>Updated on {newsfeed.get('lastUpdated').toLocaleString()}
      {newsfeed.get('posts').map(post =>
        post.text + ' by ' + post.creator
      )}
      <h2>Friends Online</h2>
      {friendlist.get('friends').map(friend =>
        friend.name
      )}
    </>
  }
}

export default Store.withStore(MyComponent)
```

es6
```js
import React from 'react'
import Store from './MyStore'

class MyComponent extends React.Component {
  render() {
    let {friendlist, newsfeed} = this.props
    return <>
      <h2>Latest Posts</h2>
      <h3>Updated on {newsfeed.get('lastUpdated').toLocaleString()}
      {newsfeed.get('posts').map(post =>
        post.text + ' by ' + post.creator
      )}
      <h2>Friends Online</h2>
      {friendlist.get('friends').map(friend =>
        friend.name
      )}
    </>
  }
}

export default Store.withStore(MyComponent)
```

es5
```js
var createReactClass = require('create-react-class')
var React = require('react')
var Store = require('./MyStore')

var MyComponent = createReactClass({
  render() {
    var friendlist = this.props.friendlist
    var newsfeed = this.props.newsfeed
    return <>
      <h2>Latest Posts</h2>
      <h3>Updated on {newsfeed.get('lastUpdated').toLocaleString()}
      {newsfeed.get('posts').map(function(post) {
        return post.text + ' by ' + post.creator
      })}
      <h2>Friends Online</h2>
      {friendlist.get('friends').map(function(friend) {
        return friend.name
      })}
    </>
  }
})

module.exports = Store.withStore(MyComponent)
```