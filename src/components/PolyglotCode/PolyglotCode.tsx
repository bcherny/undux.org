import 'highlight.js/styles/github.css'
import * as React from 'react'
import { ExternalLink } from 'react-feather'
import { EXTENSIONS } from '../../constants'
import { Language } from '../../datatypes'
import { StoreProps, withStore } from '../../services/store'

type Props = StoreProps & {
  code: string
  filename?: string
  playgroundLinks?: Partial<Record<Language, string>>
  shouldShowFilename?: false
}

export let PolyglotCode = withStore<Props>(({
  code, filename, playgroundLinks, shouldShowFilename, store
}) => {
  let blocks = parse(code)
  let language = store.get('language')

  if (language in blocks) {
    let file = shouldShowFilename && filename ? `${filename}.${EXTENSIONS[language]}` : ''
    let playgroundLink = playgroundLinks && playgroundLinks[language]
      ? <a href={playgroundLinks[language]} target='_blank'>playground <ExternalLink /></a>
      : ''
    return <div className='Code'>
      {filename && <span className='Filename'>{file}{playgroundLink}</span>}
      <span className='CodeBlock' dangerouslySetInnerHTML={{ __html: blocks[language]!.innerHTML! }} />
    </div>
  }

  return <div className='Code'>
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
