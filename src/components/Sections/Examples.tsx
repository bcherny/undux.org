import * as React from 'react'
import ExampleStatefulComponentWithProps from '../../copy/ExampleStatefulComponentWithProps.md'
import ExampleStatelessComponentWithProps from '../../copy/ExampleStatelessComponentWithProps.md'
import ExampleStore from '../../copy/ExampleStore.md'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'

export function Examples() {
  return <>
    <SectionSubheading href='examples/basic-store'>Basic store</SectionSubheading>
    <PolyglotCode code={ExampleStore} filename='' />
    <SectionSubheading href='examples/stateless-component-with-props'>Stateless React component with extra props</SectionSubheading>
    <PolyglotCode code={ExampleStatelessComponentWithProps} filename='' />
    <SectionSubheading href='examples/class-component-with-props'>React class component with extra props</SectionSubheading>
    <PolyglotCode code={ExampleStatefulComponentWithProps} filename='' />
  </>
}
