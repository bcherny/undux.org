import * as React from 'react'
import BannerExample from '../../copy/BannerExample.md'
import { Code } from '../Code/Code'
import { Header } from '../Header/Header'
import './MainSection.css'

export function MainSection() {
  return <section className='MainSection'>
    <Header />
    <Code code={BannerExample} />
  </section>
}
