import { connect, createStore, Store } from 'undux'
import { Language, Route } from '../datatypes'
import { withEffects } from './effects'
import { withHashSync } from './hashSync'

export type State = {
  language: Language
  route: [Route] | [Route, string]
}

let initialState: State = {
  language: 'JavaScript (ES6)',
  route: ['']
}

let initialStateFromLocalStorage = localStorage.getItem('undux-store')

if (initialStateFromLocalStorage) {
  initialState = {
    ...initialState,
    ...JSON.parse(initialStateFromLocalStorage)
  }
}

let store = withHashSync(withEffects(createStore(initialState)))

export let withStore = connect(store)

export type StoreProps = {
  store: Store<State>
}
