es6
```js
// Listen on kittens
store.on('kittens').subscribe(kittens =>
  console.log('kittens changed to:', kittens)
)

// Trigger the listener
store.set('kittens')(1)
```