import * as React from 'react'
import './SectionSubheading.css'

type Props = {
  href: string
}

export let SectionSubheading: React.StatelessComponent<Props> = ({ children, href }) =>
  <h2 className='SectionSubheading'>
    <a href={'#' + href} id={href}>{children}</a>
  </h2>
