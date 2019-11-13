ts
```ts
let setKittens = store.set('kittens')
useEffect(
  () => setKittens(value),
  [setKittens, value],
)
```

flow
```js
let setKittens = store.set('kittens')
useEffect(
  () => setKittens(value),
  [setKittens, value],
)
```

es6
```js
let setKittens = store.set('kittens')
useEffect(
  () => setKittens(value),
  [setKittens, value],
)
```

es5
```js
var setKittens = store.set('kittens')
useEffect(
  function() { setKittens(value) },
  [setKittens, value]
)
```
