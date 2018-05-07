import { connect, createStore, Store } from 'undux'
import { Language } from './datatypes'
import { withEffects } from './effects'

export type State = {
  language: Language
}

let initialState: State = {
  language: 'JavaScript (ES6)'
}

let initialStateFromLocalStorage = localStorage.getItem('undux-store')

if (initialStateFromLocalStorage) {
  initialState = {
    ...initialState,
    ...JSON.parse(initialStateFromLocalStorage)
  }
}

let store = withEffects(createStore(initialState))

export let withStore = connect(store)

export type StoreProps = {
  store: Store<State>
}
