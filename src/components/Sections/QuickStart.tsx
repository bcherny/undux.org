import * as React from 'react'
import QuickStartStep1 from '../../copy/QuickStartStep1.md'
import QuickStartStep2 from '../../copy/QuickStartStep2.md'
import QuickStartStep3 from '../../copy/QuickStartStep3.md'
import { withStore } from '../../services/store'
import { FlashyHeading } from '../FlashyHeading/FlashyHeading'
import { InlineCode } from '../InlineCode/InlineCode'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'

export let QuickStart = withStore(({store}) =>
  <>
    <blockquote>Welcome to Undux! Follow this guide to get up and running in a few minutes or less.</blockquote>
    <SectionSubheading href='quick-start/1'>1. Create a store</SectionSubheading>
    <p>Let's start by creating a store. Think of a store as an Object, or a Map from keys to values. Each key maps to exactly one value, and you can put as many keys as you want in your store. For this example, we'll create a store with two keys: <InlineCode>buttonText</InlineCode> and <InlineCode>clickCount</InlineCode>.</p>
    <p>We list all the keys that a store might have upfront, and assign them some initial values. You'll update your store's values over time, but you can't add keys after the store is created, so be sure to define a key for each value in your store, even if the value is initially <InlineCode>undefined</InlineCode>.</p>
    <PolyglotCode code={QuickStartStep1} filename='MyStore' playgroundLinks={{
      TypeScript: 'https://stackblitz.com/edit/undux-quick-start-typescript?file=MyStore.tsx',
      'JavaScript (ES6)': 'https://stackblitz.com/edit/undux-quick-start-es6?file=MyStore.js'
    }} />

    <SectionSubheading href='quick-start/3'>2. Optional: Add effects</SectionSubheading>
    <p>When your store updates, Undux will automatically re-render any React components that use that store. If you want to do something more complex when a field on the store updates — things like sending AJAX requests, logging, or updating another field on the store — use effects.</p>
    <PolyglotCode code={QuickStartStep2} filename='MyEffects' playgroundLinks={{
      TypeScript: 'https://stackblitz.com/edit/undux-quick-start-typescript?file=MyEffects.tsx',
      'JavaScript (ES6)': 'https://stackblitz.com/edit/undux-quick-start-es6?file=MyEffects.js'
    }} />

    <SectionSubheading href='quick-start/2'>3. Connect your React components</SectionSubheading>
    <p>Once you've created a store and hooked up some effects, it's time to connect your store to a React component. You can connect your store to as many React components as you want. Every time you connect a component with the <InlineCode>withStore</InlineCode> function, Undux will:</p>
    <ul>
      <li>Automatically re-render your component whenever your store updates.</li>
      <li>Pass your store to your component as a prop, so it's available as <InlineCode>props.store</InlineCode>.</li>
    </ul>
    <PolyglotCode code={QuickStartStep3} filename='MyComponent' playgroundLinks={{
      TypeScript: 'https://stackblitz.com/edit/undux-quick-start-typescript?file=MyComponent.tsx',
      'JavaScript (ES6)': 'https://stackblitz.com/edit/undux-quick-start-es6?file=MyComponent.js'
    }} />
    <p><a href={store.get('language') === 'TypeScript'
      ? 'https://stackblitz.com/edit/undux-quick-start-typescript'
      : 'https://stackblitz.com/edit/undux-quick-start-es6'
    } target='_blank'>Run this code in the playground.</a></p>
    <FlashyHeading>That's all there is to it.</FlashyHeading>
  </>
)
