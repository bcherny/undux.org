import * as React from 'react'
import QuickStartStep1 from '../../copy/QuickStartStep1.md'
import QuickStartStep2 from '../../copy/QuickStartStep2.md'
import QuickStartStep3 from '../../copy/QuickStartStep3.md'
import QuickStartStep4 from '../../copy/QuickStartStep4.md'
import { useStore } from '../../services/store'
import { FlashyHeading } from '../FlashyHeading/FlashyHeading'
import { InlineCode } from '../InlineCode/InlineCode'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'

export function QuickStart() {
  let store = useStore()
  return <>
    <blockquote>Welcome to Undux! Follow this guide to get up and running in a few minutes or less.</blockquote>
    <SectionSubheading href='quick-start/1'>1. Create a store</SectionSubheading>
    <p>Let's start by creating a store. Think of a store as an Object, or a Map from keys to values. Each key maps to exactly one value, and you can put as many keys as you want in your store. For this example, we'll create a store with two keys: <InlineCode>buttonText</InlineCode> and <InlineCode>clickCount</InlineCode>.</p>
    <p>We list all the keys that a store might have upfront, and assign them some initial values. You'll update your store's values over time, but you can't add keys after the store is created, so be sure to define a key for each value in your store, even if the value is initially <InlineCode>undefined</InlineCode>.</p>
    <PolyglotCode code={QuickStartStep1} filename='MyStore' playgroundLinks={{
      TypeScript: 'https://stackblitz.com/edit/undux-quick-start-typescript?file=MyStore.tsx',
      'JavaScript (ES6)': 'https://stackblitz.com/edit/undux-quick-start-es6?file=MyStore.js'
    }} />

    <SectionSubheading href='quick-start/2'>2. Optional: Add effects</SectionSubheading>
    <p>When your store updates, Undux will automatically re-render any React components that use that store. If you want to do something more complex when a field on the store updates — things like sending AJAX requests, logging, or updating another field on the store — use effects.</p>
    <PolyglotCode code={QuickStartStep2} filename='MyEffects' playgroundLinks={{
      TypeScript: 'https://stackblitz.com/edit/undux-quick-start-typescript?file=MyEffects.tsx',
      'JavaScript (ES6)': 'https://stackblitz.com/edit/undux-quick-start-es6?file=MyEffects.js'
    }} />

    <SectionSubheading href='quick-start/3'>3. Connect your React components</SectionSubheading>
    <p>Once you've created a store and hooked up some effects, it's time to connect your store to a React component. You can connect your store to as many React components as you want. Every time you connect a component with the <InlineCode>withStore</InlineCode> function, Undux will:</p>
    <ul>
      <li>Automatically re-render your component whenever your store updates.</li>
      <li>Pass your store to your component as a React prop, so it's available as <InlineCode>props.store</InlineCode>.</li>
    </ul>
    <p>If you're using <a href='https://reactjs.org/docs/hooks-intro.html'>React Hooks</a>, use Undux's <InlineCode>useStore</InlineCode> API instead of <InlineCode>withStore</InlineCode>. Like <InlineCode>withStore</InlineCode>, <InlineCode>useStore</InlineCode> will automatically re-render your component any time your store updates.</p>
    <PolyglotCode code={QuickStartStep3} filename='MyComponent' playgroundLinks={{
      TypeScript: 'https://stackblitz.com/edit/undux-quick-start-typescript?file=MyComponent.tsx',
      'JavaScript (ES6)': 'https://stackblitz.com/edit/undux-quick-start-es6?file=MyComponent.js'
    }} />

    <SectionSubheading href='quick-start/4'>4. Connect your Application</SectionSubheading>
    <p>Finally, wrap your whole application with the <InlineCode>Container</InlineCode> component you got back from <InlineCode>createConnectedStore</InlineCode>. Undux will create one store instance per <InlineCode>Container</InlineCode>, and pass that instance to each of the <InlineCode>withStore</InlineCode>-connected components in your <InlineCode>Container</InlineCode>-connected component.</p>
    <PolyglotCode code={QuickStartStep4} filename='MyApp' playgroundLinks={{
      TypeScript: 'https://stackblitz.com/edit/undux-quick-start-typescript?file=MyApp.tsx',
      'JavaScript (ES6)': 'https://stackblitz.com/edit/undux-quick-start-es6?file=MyApp.js'
    }} />

    <p><a href={store.get('language') === 'TypeScript'
      ? 'https://stackblitz.com/edit/undux-quick-start-typescript'
      : 'https://stackblitz.com/edit/undux-quick-start-es6'
    } target='_blank'>Run this code in the playground.</a></p>
    <FlashyHeading>That's all there is to it.</FlashyHeading>
  </>
}
