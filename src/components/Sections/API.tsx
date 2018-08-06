import * as React from 'react'
import APIConnect from '../../copy/APIConnect.md'
import APIConnectExport from '../../copy/APIConnectExport.md'
import APICreateConnectedStore from '../../copy/APICreateConnectedStore.md'
import APICreateStore from '../../copy/APICreateStore.md'
import APIGet from '../../copy/APIGet.md'
import APIOn from '../../copy/APIOn.md'
import APISet from '../../copy/APISet.md'
import APISetPartialApplication from '../../copy/APISetPartialApplication.md'
import EffectsModelUpdate from '../../copy/EffectsModelUpdate.md'
import EffectsRxSimple from '../../copy/EffectsRxSimple.md'
import { Deprecated } from '../Deprecated/Deprecated'
import { InlineCode } from '../InlineCode/InlineCode'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'

export function API() {
  return <>
    <SectionSubheading href='api/createConnectedStore'>
      <InlineCode>createConnectedStore(initialState, [effects])</InlineCode>
    </SectionSubheading>
    <p>Use <InlineCode>createConnectedStore</InlineCode> to create a new type of store with an initial value and, optionally, some effects. Be sure to define a key for each field on your store, even if it's <InlineCode>undefined</InlineCode> at first.</p>
    <PolyglotCode code={APICreateConnectedStore} filename='' />

    <p>Note that <InlineCode>createConnectedStore</InlineCode> doesn't create a store directly. Instead, it returns an object containing the two things you'll need to instantiate and use your store:</p>

    <ul>
      <li><InlineCode>withStore</InlineCode>: A <a href='https://reactjs.org/docs/higher-order-components.html' target='_blank'>Higher Order React Component</a> (HOC) that's connected to your store. Use it to wrap your own React components to connect them to the store too. The HOC will pass your store into every component you wrap it with as <InlineCode>props.store</InlineCode>. Connected components re-render automatically whenever the store updates.</li>
      <li><InlineCode>Container</InlineCode>: A React component that creates a new instance of your store. Put it at the root of your application, so it wraps any <InlineCode>withStore</InlineCode>-wrapped components. For each <InlineCode>{'<Container />'}</InlineCode> you render, Undux will create a new store instance and pass it to each of its descendents that's wrapped in the corresponding <InlineCode>withStore</InlineCode> function.</li>
    </ul>

    <SectionSubheading href='api/createStore'>
      <InlineCode>createStore(initialState)</InlineCode>
    </SectionSubheading>
    <Deprecated asOf='5.0.0' />
    <p>Use <InlineCode>createStore</InlineCode> to create a new store with an initial state. Be sure to define a key for each field on your store, even if it's <InlineCode>undefined</InlineCode> at first.</p>
    <PolyglotCode code={APICreateStore} filename='' />

    <SectionSubheading href='api/connect'>
      <InlineCode>connect(store)</InlineCode>
    </SectionSubheading>
    <Deprecated asOf='5.0.0' />

    <p><InlineCode>connect</InlineCode> creates a <a href='https://reactjs.org/docs/higher-order-components.html' target='_blank'>Higher Order React Component</a> (HOC) that's connected to your store. Use it to wrap your own React components to connect them to the store too. The HOC will pass your store into every component you wrap it with as <InlineCode>props.store</InlineCode>. Connected components re-render automatically whenever the store updates.</p>
    <PolyglotCode code={APIConnect} filename='' />
    <p>A common pattern is to assign the HOC returned by <InlineCode>connect</InlineCode> to a variable named <InlineCode>withStore</InlineCode>, and export it for other React components to use.</p>
    <PolyglotCode code={APIConnectExport} filename='' />

    <SectionSubheading href='api/get'><InlineCode>store.get(key)</InlineCode></SectionSubheading>
    <p>Use <InlineCode>get</InlineCode> to read the value of a field on your store.</p>
    <PolyglotCode code={APIGet} filename='' />
    <SectionSubheading href='api/set'><InlineCode>store.set(key)(value)</InlineCode></SectionSubheading>
    <p>Use <InlineCode>set</InlineCode> to write a value to a field on your store.</p>
    <PolyglotCode code={APISet} filename='' />
    <p><InlineCode>set</InlineCode> is auto-curried: call it with just a key, and get back a convenient setter function.</p>
    <PolyglotCode code={APISetPartialApplication} filename='' />
    <SectionSubheading href='api/on'><InlineCode>store.on(key)</InlineCode></SectionSubheading>
    <p>Undux automatically updates your model and re-renders your React components for you. To do anything more complex -- like send a network request, or update another field on the store in response to a field changing -- use the <InlineCode>on</InlineCode> API.</p>
    <p>We call anything that's subscribed to a field update with the <InlineCode>on</InlineCode> API an <em>Effect</em>. Effects are triggered anytime the field they're subscribed to changes.</p>
    <PolyglotCode code={APIOn} filename='' />
    <p>You can even use an Effect to trigger another model update.</p>
    <PolyglotCode code={EffectsModelUpdate} filename='' />
    <p><InlineCode>on</InlineCode> returns a full <a target='_blank' href='http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html'>RxJS Observable</a>, so you have fine control over how you react to a change. Effects have access to around 100 utility functions that are included with RxJS.</p>
    <PolyglotCode code={EffectsRxSimple} filename='' />
  </>
}
