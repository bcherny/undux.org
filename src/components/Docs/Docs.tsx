import * as React from 'react'
import BannerExample from '../../copy/BannerExample.md'
import { Code } from '../Code/Code'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import './Docs.css'

export function Docs() {
  return <section className='Docs'>
    <SectionHeading text='Quick Start' />
    <Code code={BannerExample} />
  </section>
}
