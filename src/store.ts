import { connect, createStore, Store } from 'undux'
import { Language, Route } from './datatypes'
import { withEffects } from './effects'

export type State = {
  language: Language
  route: Route
  windowScrollTop: number
}

let initialState: State = {
  language: 'JavaScript (ES6)',
  route: '',
  windowScrollTop: 0
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
