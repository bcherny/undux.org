import { Route } from './datatypes'

export const ROUTES: [Route, string][] = [
  ['install', 'Install'],
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
    ['on', 'store.on']
  ],
  install: [],
  plugins: [],
  'quick-start': [],
  recipes: [],
  about: []
}
