import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'
import { Plugin, Store } from 'undux'
import { Route } from '../datatypes'
import { State } from './store'

type ParsedHash = [undefined, undefined] | [Route, undefined] | [Route, string]

export let withHashSync: Plugin<State> = store => {

  // Route -> URL hash
  store.on('route').subscribe(_ =>
    window.location.hash = _.join('/')
  )

  // URL hash -> Route
  observeHash().subscribe(_ =>
    syncHashToStore(store, _)
  )

  // URL hash -> Route (initial sync)
  syncHashToStore(store, parseHash(window.location.hash))

  return store
}

function syncHashToStore(store: Store<State>, [route, subroute]: ParsedHash) {
  let current = store.get('route')
  if (route !== undefined && subroute !== undefined && (route !== current[0] || subroute !== current[1])) {
    return store.set('route')([route, subroute])
  }
  if (route !== undefined && route !== current[0]) {
    return store.set('route')([route])
  }
}

function parseHash(hash: string): ParsedHash {
  return hash.replace('#', '').split('/') as ParsedHash
}

function observeHash() {
  return fromEvent(window, 'hashchange')
    .pipe(
      map(() => window.location.hash),
      map(parseHash)
    )
}
