import * as React from 'react'
import RecipeStatefulComponentWithProps from '../../copy/RecipeStatefulComponentWithProps.md'
import RecipeStatelessComponentWithProps from '../../copy/RecipeStatelessComponentWithProps.md'
import RecipeStore from '../../copy/RecipeStore.md'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'

export function Recipes() {
  return <>
    <SectionSubheading href='recipes/store'>Creating a store</SectionSubheading>
    <PolyglotCode code={RecipeStore} filename='' />
    <SectionSubheading href='recipes/stateless-component-with-props'>Stateless React component with extra props</SectionSubheading>
    <PolyglotCode code={RecipeStatelessComponentWithProps} filename='' />
    <SectionSubheading href='recipes/class-component-with-props'>React class component with extra props</SectionSubheading>
    <PolyglotCode code={RecipeStatefulComponentWithProps} filename='' />
  </>
}
