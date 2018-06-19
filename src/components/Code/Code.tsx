import * as React from 'react'
import './Code.css'

export let Code: React.StatelessComponent = props =>
  <div className='Code'>
    <span className='CodeBlock'>{props.children}</span>
  </div>
