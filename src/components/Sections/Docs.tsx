import * as React from 'react'
import Plugins from '../../copy/Plugins.md'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionHeading } from '../SectionHeading/SectionHeading'

export function Docs() {
  return <>
    <SectionHeading text='Plugins' />
    <p>Undux is easy to modify with plugins (also called "higher order stores"). Just define a function that takes a store as an argument and returns a store, adding listeners along the way. For convenience, Undux supports two types of listeners for plugins.</p>
    <PolyglotCode code={Plugins} />
    <SectionHeading text='Undux vs. Redux & Flux' />
  </>
}
