import 'highlight.js/styles/github.css'
import * as React from 'react'
import { LanguageToggler } from '../LanguageToggler/LanguageToggler'

type Props = {
  tsCode: string
}

export function Code(props: Props) {
  console.log(props.tsCode)
  return <div className='Code'>
    <LanguageToggler />
    <span dangerouslySetInnerHTML={{ __html: props.tsCode }} />
  </div>
}
