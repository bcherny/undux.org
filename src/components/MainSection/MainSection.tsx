import * as React from 'react'
import './MainSection.css'

export let MainSection: React.StatelessComponent = props =>
  <section className='MainSection'>
    {props.children}
  </section >
