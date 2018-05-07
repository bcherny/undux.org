import * as React from 'react'
import { Docs } from '../Docs/Docs'
import { Header } from '../Header/Header'
import './MainSection.css'

export function MainSection() {
  return <section className='MainSection'>
    <Header />
    <Docs />
  </section>
}
