import * as React from 'react'
import { Language } from '../../datatypes'
import { withStore } from '../../services/store'
import { invert } from '../../utils'
import { Tabs } from '../Tabs/Tabs'
import './LanguageToggler.css'

let languages: Language[] = [
  'TypeScript',
  'Flow',
  'JavaScript (ES6)',
  'JavaScript (ES5)'
]

let shortLanguages = [
  'TS',
  'Flow',
  'ES6',
  'ES5'
]

let languageToShortLanguage: Record<Language, string> = {
  TypeScript: 'TS',
  Flow: 'Flow',
  'JavaScript (ES6)': 'ES6',
  'JavaScript (ES5)': 'ES5'
}

let shortLanguageToLanguage = invert(languageToShortLanguage)

export let LanguageToggler = withStore(({ store }) =>
  <div className='LanguageToggler'>
    <div className='HideOnMobile'>
      <Tabs
        activeItem={store.get('language')}
        items={languages}
        onClick={store.set('language')}
      />
    </div>
    <div className='ShowOnMobile'>
      <Tabs
        activeItem={languageToShortLanguage[store.get('language')]}
        items={shortLanguages}
        onClick={_ => store.set('language')(shortLanguageToLanguage[_])}
      />
    </div>
  </div>
)
