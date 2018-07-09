import { Plugin } from 'undux'
import { State } from './store'

export let withEffects: Plugin<State> = store => {

  // Save language to localStorage
  store.on('language').subscribe(language =>
    localStorage.setItem('undux-store', JSON.stringify({ language }))
  )

  store.on('route').subscribe(() =>
    store.set('isMenuOpen')(false)
  )

  return store
}
