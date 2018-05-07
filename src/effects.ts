import { Plugin } from 'undux'
import { State } from './store'

export let withEffects: Plugin<State> = store => {

  // Save store to localStorage
  store.onAll().subscribe(() =>
    localStorage.setItem('undux-store', JSON.stringify(store.getState()))
  )

  return store
}
