import { Plugin } from 'undux'
import { State } from './store'

export let withEffects: Plugin<State> = store => {

  // Save store to localStorage
  store.onAll().subscribe(() =>
    localStorage.setItem('undux-store', JSON.stringify(store.getState()))
  )

  let w: any = window
  // Work in Progress
  if (w.__REDUX_DEVTOOLS_EXTENSION__) {

    let devTools = w.__REDUX_DEVTOOLS_EXTENSION__.connect()
    // let isStarted = false

    devTools.subscribe((message: any) => {
      if (message.type === 'START') {
        // isStarted = true
        w.__REDUX_DEVTOOLS_EXTENSION__.send(null, store.getState())
      } else if (message.type === 'STOP') {
        // isStarted = false
      } else if (message.type === 'DISPATCH' && message.payload.type !== 'JUMP_TO_STATE') {
        console.log('DISPATCH', message)
        let newState = JSON.parse(message.state)
        for (let key in newState) {
          store.set(key as any)(newState[key])
        }
      } else if (message.type === 'ACTION') {
        console.log('ACTION', message)
      }
    })

    store.onAll().subscribe(({ key }) => {
      w.__REDUX_DEVTOOLS_EXTENSION__.send(key, store.getState())
    })
  }

  return store
}
