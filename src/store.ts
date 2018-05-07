import { connect, createStore, Store } from 'undux'
import { Language } from './datatypes'

type State = {
  language: Language
}

let store = createStore<State>({
  language: 'TypeScript'
})

export let withStore = connect(store)

export type StoreProps = {
  store: Store<State>
}
