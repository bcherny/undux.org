import * as React from 'react'
import './SectionSubheading.css'

export const SectionSubheading: React.StatelessComponent = props =>
  <h3 className='SectionSubheading'>{props.children}</h3>
