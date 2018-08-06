import { StoreEffect } from './store'

export let withEffects: StoreEffect = store => {

  // Save language to localStorage
  store.on('language').subscribe(language =>
    localStorage.setItem('undux-store', JSON.stringify({ language }))
  )

  store.on('route').subscribe(() =>
    store.set('isMenuOpen')(false)
  )

  return store
}
