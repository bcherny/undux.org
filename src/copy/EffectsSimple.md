ts
```ts
store
  .on('today')
  .subscribe(value =>
    alert('Today changed to: ' + value.toISOString())
  )
```

flow
```js
store
  .on('today')
  .subscribe(value =>
    alert('Today changed to: ' + value.toISOString())
  )
```

es6
```js
store
  .on('today')
  .subscribe(value =>
    alert('Today changed to: ' + value.toISOString())
  )
```

es5
```js
store
  .on('today')
  .subscribe(function(value) {
    alert('Today changed to: ' + value.toISOString())
  })
```
