import { Route } from './datatypes'

export const ROUTES: [Route, string][] = [
  ['quick-start', 'Quick Start'],
  ['api', 'API'],
  ['plugins', 'Plugins'],
  ['recipes', 'Examples & Recipes'],
  ['about', 'About']
]

export const SUBROUTES: Record<Route, [string, string][]> = {
  '': [],
  api: [
    ['createStore', 'createStore'],
    ['connect', 'connect'],
    ['get', 'store.get'],
    ['set', 'store.set'],
    ['on', 'store.on'],
    ['before', 'store.before'],
    ['onAll', 'store.onAll']
  ],
  plugins: [],
  'quick-start': [],
  recipes: [],
  about: []
}
