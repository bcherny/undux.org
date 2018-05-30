import { Route } from './datatypes'

type RouteWithSubroutes = [Route, string, [string, string][]]

export const ROUTES: RouteWithSubroutes[] = [
  ['install', 'Install', []],
  ['quick-start', 'Quick Start', []],
  ['api', 'API', [
    ['createStore', 'createStore'],
    ['connect', 'connect'],
    ['get', 'store.get'],
    ['set', 'store.set'],
    ['on', 'store.on']
  ]],
  ['plugins', 'Plugins', []],
  ['recipes', 'Examples & Recipes', []],
  // ['scaling', 'Scaling', []],
  // ['testing', 'Testing', []],
  ['about', 'About', []]
]
