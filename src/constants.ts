import { Route } from './datatypes'

export const ROUTES: [Route, string][] = [
  ['quick-start', 'Quick Start'],
  ['api', 'API'],
  ['docs', 'Documentation'],
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
  docs: [],
  'quick-start': [],
  recipes: [],
  about: []
}
