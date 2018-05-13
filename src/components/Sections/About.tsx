import * as React from 'react'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'

export function About() {
  return <>
    <SectionHeading text='Design Philosophy' />
    <SectionSubheading>Goal #1 is total type-safety.</SectionSubheading>

    <p>Getting, setting, reading, and listening on model updates is 100% type-safe: use a key that isn't defined in your model or set a key to the wrong type, and you'll get a compile-time error. And connected components are just as type-safe.</p>

    <SectionSubheading>Goal #2 is letting you write as little boilerplate as possible.</SectionSubheading>

    <p>Undux is like Redux, but reducers are already baked-in. Undux automatically creates an action and a reducer for each key on your state, so you don't have to write tedious boilerplate. Undux still emits Actions under the hood (which you can listen on to produce effects), but gives you an incredibly simple get/set API that covers most use cases.</p>

    <p>If you're using Undux with the provided React connector, Undux will update your React component any time a reducer fires (just like React-Redux). You can optionally filter on specific state keys that you care about for more targeted updates.</p>

    <SectionSubheading>Goal #3 is familiar abstractions.</SectionSubheading>

    <p>No need to learn about Actions, Reducers, or any of that. Just call get and set, and everything works just as you expect.</p>
  </>
}
