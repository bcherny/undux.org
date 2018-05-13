import * as React from 'react'
import APIGet from '../../copy/APIGet.md'
import APIOn from '../../copy/APIOn.md'
import APISet from '../../copy/APISet.md'
import APISetPartialApplication from '../../copy/APISetPartialApplication.md'
import EffectsModelUpdate from '../../copy/EffectsModelUpdate.md'
import EffectsRxSimple from '../../copy/EffectsRxSimple.md'
import EffectsSimple from '../../copy/EffectsSimple.md'
import { InlineCode } from '../InlineCode/InlineCode'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'

export function API() {
  return <>
    <SectionSubheading><InlineCode>createStore(initialState)</InlineCode></SectionSubheading>
    <SectionSubheading><InlineCode>connect(store)</InlineCode></SectionSubheading>
    <SectionSubheading><InlineCode>store.get(key)</InlineCode></SectionSubheading>
    <p>Use <InlineCode>get</InlineCode> to read the value of a field on your store.</p>
    <PolyglotCode code={APIGet} />
    <SectionSubheading><InlineCode>store.set(key)(value)</InlineCode></SectionSubheading>
    <p>Use <InlineCode>set</InlineCode> to write a value to a field on your store.</p>
    <PolyglotCode code={APISet} />
    <p>Under the hood, Undux serializes all writes (like Flux and Redux do with Actions), so you can implement things like logging and time travel in just a few lines of code.</p>
    <p><InlineCode>set</InlineCode> is auto-curried: call it with just a key, and get back a convenient setter function.</p>
    <PolyglotCode code={APISetPartialApplication} />
    <SectionSubheading><InlineCode>store.on(key)</InlineCode></SectionSubheading>
    <p><InlineCode>on</InlineCode> is Undux's magic sauce ✨. Undux automatically updates your model and re-renders your React components for you. But to do anything more complex -- like send a network request, or update another field on the store in response to a field changing -- use the <InlineCode>on</InlineCode> API.</p>
    <PolyglotCode code={APIOn} />
    <p>You can even trigger a model update in response to a model update.</p>
    <PolyglotCode code={EffectsModelUpdate} />
    <p><InlineCode>on</InlineCode> returns a full <a target='_blank' href='http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html'>RxJS Observable</a>, so you have fine control over how you want to react to a change.</p>
    <PolyglotCode code={EffectsRxSimple} />
    <p> But you can also listen on and react to model updates directly.</p>

    <SectionHeading text='Features' />
    <SectionSubheading>Effects</SectionSubheading>
    <PolyglotCode code={EffectsSimple} />
    <p>Undux subscriptions are full </p>

  </>
}
