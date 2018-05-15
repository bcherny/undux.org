es6
```js
// Register an effect on kittens
store.on('kittens').subscribe(kittens =>
  console.log('kittens changed to:', kittens)
)

// Trigger the effect
store.set('kittens')(1)
```