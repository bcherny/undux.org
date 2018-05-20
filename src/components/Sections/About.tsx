import * as React from 'react'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'

export function About() {
  return <>

    <SectionHeading text='Design Philosophy' />
    <SectionSubheading href='about/goal-1'>Goal #1 is total type-safety.</SectionSubheading>

    <p>Getting, setting, reading, and listening on model updates is 100% type-safe: use a key that isn't defined in your model or set a key to the wrong type, and you'll get a compile-time error. And connected components are just as type-safe.</p>

    <SectionSubheading href='about/goal-2'>Goal #2 is letting you write as little boilerplate as possible.</SectionSubheading>

    <p>Define your model in a single place, and use it anywhere safely. No need to define tedious boilerplate for each field on your model. Container components and action creators are optional - most of the time you don't need them, and can introduce them only where needed as your application grows.</p>

    <SectionSubheading href='about/goal-3'>Goal #3 is familiar abstractions.</SectionSubheading>

    <p>No need to learn about Actions, Reducers, or any of that. Just call get and set, and everything works just as you expect.</p>

    <SectionHeading text='Inspiration' />

    <p>Undux was heavily inspired by one-way data flow frameworks like Redux and Flux. It was borne out of the realizations that:</p>

    <ol>
      <li>Redux and Flux's designs are often unfamiliar and opaque for engineers that don't specialize in functional programming on the frontend, and are unfamiliar with append-only databases and Event Sourcing.</li>
      <li>Redux and Flux depend on significant amounts of boilerplate spread across many files, which makes it hard to understand and debug even simple programs. This architecture is at odds with React's principle of colocating model, view, and controller code for ease of understanding.</li>
      <li>TypeScript and Flow's modern type systems make a lot of this boilerplate unnecessary.</li>
      <li>Event sourcing is overkill for the vast majority of applications.</li>
      <li>That said, one really useful facility that comes out of event sourcing is the ability to audit changes to an application's state, so you can see how the state changed over time and why. Undux implements Event Sourcing under the hood for this reason, and doesn't expose that implementation to users for reason (4).</li>
    </ol>

    <SectionHeading text='Undux vs. Redux' />

    <p>Undux is like Redux, but reducers are already baked-in. Undux automatically creates an action and a reducer for each key on your state, so you don't have to write tedious boilerplate. Undux still emits Actions under the hood (which you can listen on to produce effects), but gives you an incredibly simple get/set API that covers most use cases.</p>

    <p>If you're using Undux with the provided React connector, Undux will update your React component any time a reducer fires (just like React-Redux). You can optionally filter on specific state keys that you care about for more targeted updates.</p>

  </>
}
