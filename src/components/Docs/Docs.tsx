import * as React from 'react'
import EffectsModelUpdate from '../../copy/EffectsModelUpdate.md'
import EffectsRxSimple from '../../copy/EffectsRxSimple.md'
import EffectsSimple from '../../copy/EffectsSimple.md'
import QuickStartStep1 from '../../copy/QuickStartStep1.md'
import QuickStartStep2 from '../../copy/QuickStartStep2.md'
import { Code } from '../Code/Code'
import { FlashyHeading } from '../FlashyHeading/FlashyHeading'
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
    <FlashyHeading>That's all there is to it.</FlashyHeading>

    <SectionHeading text='Features' />
    <SectionSubheading text='Effects' />
    <p>Undux automatically updates your model and re-renders your React components for you. But you can also listen on and react to model updates directly.</p>
    <Code code={EffectsSimple} />
    <p>You can even trigger a model update in response to a model update.</p>
    <Code code={EffectsModelUpdate} />
    <p>Undux subscriptions are full <a target='_blank' href='http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html'>Rx Observables</a>, so you have fine control over how you react to a change.</p>
    <Code code={EffectsRxSimple} />
  </section>
}
