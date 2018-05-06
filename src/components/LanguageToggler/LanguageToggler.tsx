import * as React from 'react'
import { Language } from '../../datatypes'
import { withStore } from '../../store'
import { Tabs } from '../Tabs/Tabs'

let languages: Language[] = [
  'TypeScript',
  'Flow',
  'JavaScript (ES6)',
  'JavaScript (ES5)'
]

export let LanguageToggler = withStore(({ store }) =>
  <Tabs
    activeItem={store.get('language')}
    items={languages}
    onClick={store.set('language')}
  />
)
