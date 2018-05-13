import * as React from 'react'
import APIGet from '../../copy/APIGet.md'
import APISet from '../../copy/APISet.md'
import APISetPartialApplication from '../../copy/APISetPartialApplication.md'
import EffectsModelUpdate from '../../copy/EffectsModelUpdate.md'
import EffectsRxSimple from '../../copy/EffectsRxSimple.md'
import EffectsSimple from '../../copy/EffectsSimple.md'
import Plugins from '../../copy/Plugins.md'
import { InlineCode } from '../InlineCode/InlineCode'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'

export function Docs() {
  return <>
    <SectionHeading text='API' />
    <SectionSubheading>Get</SectionSubheading>
    <p>Use <InlineCode>get</InlineCode> to read the value of a field on your store.</p>
    <PolyglotCode code={APIGet} />
    <SectionSubheading>Set</SectionSubheading>
    <p>Use <InlineCode>set</InlineCode> to write a value to a field on your store.</p>
    <PolyglotCode code={APISet} />
    <p>Under the hood, Undux serializes all writes (like Flux and Redux do with Actions), so you can implement things like logging and time travel in just a few lines of code.</p>
    <p><InlineCode>set</InlineCode> is auto-curried: if you call it with just a key, you get back a convenient setter function.</p>
    <PolyglotCode code={APISetPartialApplication} />
    <SectionSubheading>On</SectionSubheading>
    <p><InlineCode>on</InlineCode> is Undux's magic sauce ✨. Use it to listen to model updates in order to perform effects.</p>

    <SectionHeading text='Features' />
    <SectionSubheading>Effects</SectionSubheading>
    <p>Undux automatically updates your model and re-renders your React components for you. But you can also listen on and react to model updates directly.</p>
    <PolyglotCode code={EffectsSimple} />
    <p>You can even trigger a model update in response to a model update.</p>
    <PolyglotCode code={EffectsModelUpdate} />
    <p>Undux subscriptions are full <a target='_blank' href='http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html'>Rx Observables</a>, so you have fine control over how you react to a change.</p>
    <PolyglotCode code={EffectsRxSimple} />

    <SectionHeading text='Plugins' />
    <p>Undux is easy to modify with plugins (also called "higher order stores"). Just define a function that takes a store as an argument and returns a store, adding listeners along the way. For convenience, Undux supports two types of listeners for plugins.</p>
    <PolyglotCode code={Plugins} />
    <SectionHeading text='Undux vs. Redux & Flux' />
  </>
}
