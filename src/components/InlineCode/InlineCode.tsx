import * as React from 'react'
import './InlineCode.css'

type Props = {
  code: string
}

export function InlineCode({ code }: Props) {
  return <code className='InlineCode'>{code}</code>
}
