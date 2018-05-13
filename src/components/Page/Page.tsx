import * as React from 'react'
import { ROUTES } from '../../constants'
import { withStore } from '../../store'
import { LanguageToggler } from '../LanguageToggler/LanguageToggler'
import { MainSection } from '../MainSection/MainSection'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { SideNav } from '../SideNav/SideNav'
import './Page.css'

export let Page = withStore(props =>
  <div className='Page'>
    <div className='PageTitle'>
      <SectionHeading text={ROUTES.find(_ => _[0] === props.store.get('route'))![1]} />
      <LanguageToggler />
    </div>
    <SideNav />
    <MainSection>
      {props.children}
    </MainSection>
  </div>
)
