import { Language, Route } from './datatypes'

type RouteWithSubroutes = [Route, string, [string, string, {asOf: string}?][]]

export const ROUTES: RouteWithSubroutes[] = [
  ['install', 'Install', []],
  ['quick-start', 'Quick Start', []],
  ['api', 'API', [
    ['createConnectedStore', 'createConnectedStore'],
    ['get', 'store.get'],
    ['set', 'store.set'],
    ['on', 'store.on'],
    ['createStore', 'createStore', {asOf: '5.0.0'}],
    ['connect', 'connect', {asOf: '5.0.0'}]
  ]],
  ['plugins', 'Plugins', []],
  ['examples', 'Examples & Usage', []],
  // ['scaling', 'Scaling', []],
  // ['testing', 'Testing', []],
  ['about', 'About', []]
]

export const EXTENSIONS: Record<Language, string> = {
  Flow: 'js',
  'JavaScript (ES6)': 'js',
  'JavaScript (ES5)': 'js',
  TypeScript: 'ts'
}
