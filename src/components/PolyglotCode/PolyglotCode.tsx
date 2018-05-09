import 'highlight.js/styles/github.css'
import * as React from 'react'
import { Language } from '../../datatypes'
import { StoreProps, withStore } from '../../store'
import { LanguageToggler } from '../LanguageToggler/LanguageToggler'
import './PolyglotCode.css'

type Props = StoreProps & {
  code: string
}

export let PolyglotCode = withStore<Props>(({ code, store }) => {
  let blocks = parse(code)
  let language = store.get('language')

  if (language in blocks) {
    return <div className='Code'>
      <LanguageToggler />
      <span className='CodeBlock' dangerouslySetInnerHTML={{ __html: blocks[language]!.innerHTML! }} />
    </div>
  }

  return <div className='Code'>
    <LanguageToggler />
    <h3 className='Missing'>Not written yet</h3>
    {/* TODO: Exact link*/}
    <h4 className='MissingSub'><a href='https://github.com/bcherny/undux.org/tree/master/src/copy'>Submit a Pull Request 🙏</a></h4>
  </div>
})

type LanguageAnnotation = 'ts' | 'flow' | 'es5' | 'es6'

let languageAnnotations: Record<LanguageAnnotation, Language> = {
  ts: 'TypeScript',
  flow: 'Flow',
  es5: 'JavaScript (ES5)',
  es6: 'JavaScript (ES6)'
}

function parse(blocks: string): Partial<Record<Language, HTMLPreElement>> {
  let parser = new DOMParser
  let document = parser.parseFromString(blocks, 'text/html')
  return fromPairs(Array
    .from(document.querySelectorAll('pre'))
    .map(pre => {
      if (!pre.previousElementSibling) {
        return null
      }
      let language = pre.previousElementSibling.innerHTML
      if (!(language in languageAnnotations)) {
        throw TypeError(`Language annotation must be one of: ts, flow, es5, es6. Found: "${language}".`)
      }
      return [languageAnnotations[language as LanguageAnnotation], pre]
    })
    .filter(Boolean) as any)
}

function fromPairs<T extends string, U>(array: [T, U][]): Record<T, U> {
  let o: Record<T, U> = {} as any
  array.forEach(([t, u]) => o[t] = u)
  return o
}
