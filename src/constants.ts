import { Route } from './datatypes'

type RouteWithSubroutes = [Route, string, [string, string, {asOf: string}?][]]

export const ROUTES: RouteWithSubroutes[] = [
  ['install', 'Install', []],
  ['quick-start', 'Quick Start', []],
  ['api', 'API', [
    ['createConnectedStore', 'createConnectedStore'],
    ['createStore', 'createStore', {asOf: '5.0.0'}],
    ['connect', 'connect', {asOf: '5.0.0'}],
    ['get', 'store.get'],
    ['set', 'store.set'],
    ['on', 'store.on']
  ]],
  ['plugins', 'Plugins', []],
  ['examples', 'Examples & Usage', []],
  // ['scaling', 'Scaling', []],
  // ['testing', 'Testing', []],
  ['about', 'About', []]
]
