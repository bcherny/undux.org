import { createConnectedStore, Effects, Store as StoreType } from 'undux'
import { Language, Route } from '../datatypes'
import { withEffects } from './effects'
import { withHashSync } from './hashSync'

type State = {
  isMenuOpen: boolean
  language: Language
  route: [Route] | [Route, string]
}

let initialState: State = {
  isMenuOpen: false,
  language: 'TypeScript',
  route: ['']
}

let initialStateFromLocalStorage = localStorage.getItem('undux-store')

if (initialStateFromLocalStorage) {
  initialState = {
    ...initialState,
    ...JSON.parse(initialStateFromLocalStorage)
  }
}

export let {Container, withStore} = createConnectedStore(
  initialState,
  s => withHashSync(withEffects(s))
)

export type Store = StoreType<State>

export type StoreEffects = Effects<State>

export type StoreProps = {
  store: Store
}
