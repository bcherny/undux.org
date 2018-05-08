import * as React from 'react'
import './InlineCode.css'

export const InlineCode: React.StatelessComponent = props =>
  <code className='InlineCode'>{props.children}</code>
