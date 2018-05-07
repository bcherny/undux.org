ts
```ts
store
  .on('today')
  .subscribe(value => {
    const tomorrow = new Date(value)
    tomorrow.setDate(value.getDate() + 1)
    store.set('tomorrow')(tomorrow)
  })
```

flow
```js
store
  .on('today')
  .subscribe(value => {
    const tomorrow = new Date(value)
    tomorrow.setDate(value.getDate() + 1)
    store.set('tomorrow')(tomorrow)
  })
```

es6
```js
store
  .on('today')
  .subscribe(value => {
    const tomorrow = new Date(value)
    tomorrow.setDate(value.getDate() + 1)
    store.set('tomorrow')(tomorrow)
  })
```

es5
```js
store
  .on('today')
  .subscribe(function(value) {
    var tomorrow = new Date(value)
    tomorrow.setDate(value.getDate() + 1)
    store.set('tomorrow')(tomorrow)
  })
```
