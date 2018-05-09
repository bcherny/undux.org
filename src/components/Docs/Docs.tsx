import * as React from 'react'
import EffectsModelUpdate from '../../copy/EffectsModelUpdate.md'
import EffectsRxSimple from '../../copy/EffectsRxSimple.md'
import EffectsSimple from '../../copy/EffectsSimple.md'
import Plugins from '../../copy/Plugins.md'
import QuickStartStep1 from '../../copy/QuickStartStep1.md'
import QuickStartStep2 from '../../copy/QuickStartStep2.md'
import { FlashyHeading } from '../FlashyHeading/FlashyHeading'
import { InlineCode } from '../InlineCode/InlineCode'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'
import './Docs.css'

export function Docs() {
  return <section className='Docs'>

    <SectionHeading text='Jump to API' />

    <ul>
      <li><a href='#get'><InlineCode>#get(key)</InlineCode></a></li>
      <li><a href='#set'><InlineCode>#set(key, value)</InlineCode></a></li>
      <li><a href='#on'><InlineCode>#on(key)</InlineCode></a></li>
    </ul>

    <SectionHeading text='Quick Start' />
    <SectionSubheading>1. Create a store</SectionSubheading>
    <PolyglotCode code={QuickStartStep1} />
    <p><em>Be sure to define a key for each value in your model, even if the value is initially <InlineCode>undefined</InlineCode>.</em></p>

    <SectionSubheading>2. Connect your React components</SectionSubheading>
    <PolyglotCode code={QuickStartStep2} />
    <FlashyHeading>That's all there is to it.</FlashyHeading>

    <SectionHeading text='API' />
    <SectionSubheading>Get</SectionSubheading>

    <SectionSubheading>Set</SectionSubheading>
    <SectionSubheading>On</SectionSubheading>

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

    <SectionHeading text='Design Philosophy' />
    <SectionSubheading>Goal #1 is total type-safety.</SectionSubheading>

    <p>Getting, setting, reading, and listening on model updates is 100% type-safe: use a key that isn't defined in your model or set a key to the wrong type, and you'll get a compile-time error. And connected components are just as type-safe.</p>

    <SectionSubheading>Goal #2 is letting you write as little boilerplate as possible.</SectionSubheading>

    <p>Undux is like Redux, but reducers are already baked-in. Undux automatically creates an action and a reducer for each key on your state, so you don't have to write tedious boilerplate. Undux still emits Actions under the hood (which you can listen on to produce effects), but gives you an incredibly simple get/set API that covers most use cases.</p>

    <p>If you're using Undux with the provided React connector, Undux will update your React component any time a reducer fires (just like React-Redux). You can optionally filter on specific state keys that you care about for more targeted updates.</p>

    <SectionSubheading>Goal #3 is familiar abstractions.</SectionSubheading>

    <p>No need to learn about Actions, Reducers, or any of that. Just call get and set, and everything works just as you expect.</p>

    <SectionHeading text='Undux vs. Redux & Flux' />
  </section>
}
