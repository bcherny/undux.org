import * as React from 'react'
import ExampleApp from '../../copy/ExampleApp.md'
import ExampleComponent from '../../copy/ExampleComponent.md'
import ExampleComponentWithPropsApp from '../../copy/ExampleComponentWithPropsApp.md'
import ExampleStatefulComponentWithProps from '../../copy/ExampleStatefulComponentWithProps.md'
import ExampleStatelessComponentWithProps from '../../copy/ExampleStatelessComponentWithProps.md'
import ExampleStore from '../../copy/ExampleStore.md'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'
import TabbedPolyglotCode from '../TabbedPolyglotCode/TabbedPolyglotCode'

export function Examples() {
  return <>
    <SectionSubheading href='examples/basic-usage'>Basic usage</SectionSubheading>
    <TabbedPolyglotCode tabs={[
      {code: ExampleComponent, filename: 'MyComponent'},
      {code: ExampleApp, filename: 'MyApp'},
      {code: ExampleStore, filename: 'MyStore'}
    ]} />
    <SectionSubheading href='examples/stateless-component-with-props'>Stateless React component with extra props</SectionSubheading>
    <TabbedPolyglotCode tabs={[
      {code: ExampleStatelessComponentWithProps, filename: 'MyComponent'},
      {code: ExampleComponentWithPropsApp, filename: 'MyApp'},
      {code: ExampleStore, filename: 'MyStore'}
    ]} />
    <SectionSubheading href='examples/class-component-with-props'>React class component with extra props</SectionSubheading>
    <TabbedPolyglotCode tabs={[
      {code: ExampleStatefulComponentWithProps, filename: 'MyComponent'},
      {code: ExampleComponentWithPropsApp, filename: 'MyApp'},
      {code: ExampleStore, filename: 'MyStore'}
    ]} />
  </>
}
