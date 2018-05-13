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
  api: [['createStore', 'createStore'], ['connect', 'connect'], ['get', 'get'], ['set', 'set'], ['on', 'on'], ['before', 'before'], ['onAll', 'onAll']],
  docs: [],
  'quick-start': [],
  recipes: [],
  about: []
}
