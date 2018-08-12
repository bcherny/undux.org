import * as React from 'react'
import ExampleApp from '../../copy/ExampleApp.md'
import ExampleComponent from '../../copy/ExampleComponent.md'
import ExampleStatefulComponentWithProps from '../../copy/ExampleStatefulComponentWithProps.md'
import ExampleStatelessComponentWithProps from '../../copy/ExampleStatelessComponentWithProps.md'
import ExampleStore from '../../copy/ExampleStore.md'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'
import TabbedPolyglotCode from '../TabbedPolyglotCode/TabbedPolyglotCode'

export function Examples() {
  return <>
    <SectionSubheading href='examples/basic-usage'>Basic usage</SectionSubheading>
    <TabbedPolyglotCode tabs={[
      {code: ExampleStore, filename: 'Store'},
      {code: ExampleComponent, filename: 'Component'},
      {code: ExampleApp, filename: 'App'}
    ]} />
    <SectionSubheading href='examples/stateless-component-with-props'>Stateless React component with extra props</SectionSubheading>
    <PolyglotCode code={ExampleStatelessComponentWithProps} filename='' />
    <SectionSubheading href='examples/class-component-with-props'>React class component with extra props</SectionSubheading>
    <PolyglotCode code={ExampleStatefulComponentWithProps} filename='' />
  </>
}
