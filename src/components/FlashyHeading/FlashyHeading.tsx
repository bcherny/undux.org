import * as React from 'react'
import './FlashyHeading.css'

export let FlashyHeading: React.StatelessComponent = ({ children }) =>
  <span className='FlashyHeading'>
    <h3>{children}</h3>
  </span>
