import * as React from 'react'
import BannerExampleTS from '../../copy/BannerExample-ts.md'
import { Code } from '../Code/Code'
import { Header } from '../Header/Header'
import './MainSection.css'

console.log('ts', BannerExampleTS)

export function MainSection() {
  return <section className='MainSection'>
    <Header />
    <Code tsCode={BannerExampleTS} />
  </section>
}
