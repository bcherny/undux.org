import * as React from 'react'
import QuickStartStep1 from '../../copy/QuickStartStep1.md'
import QuickStartStep2 from '../../copy/QuickStartStep2.md'
import { Code } from '../Code/Code'
import { InlineCode } from '../InlineCode/InlineCode'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'
import './Docs.css'

export function Docs() {
  return <section className='Docs'>
    <SectionHeading text='Quick Start' />
    <SectionSubheading text='1. Create a store' />
    <Code code={QuickStartStep1} />
    <p><em>Be sure to define a key for each value in your model, even if the value is initially <InlineCode code='undefined' />.</em></p>
    <SectionSubheading text='2. Connect your React components' />
    <Code code={QuickStartStep2} />
  </section>
}
