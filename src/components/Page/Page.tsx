import * as React from 'react'
import { Menu } from 'react-feather'
import { ROUTES } from '../../constants'
import { useStore } from '../../services/store'
import { LanguageToggler } from '../LanguageToggler/LanguageToggler'
import { MainSection } from '../MainSection/MainSection'
import { PageHeading } from '../PageHeading/PageHeading'
import { SideNav } from '../SideNav/SideNav'
import './Page.css'

export function Page(props: {children: React.ReactNode}) {
  let store = useStore()
  function toggleMenu() {
    store.set('isMenuOpen')(!store.get('isMenuOpen'))
  }
  return (
    <div className='Page'>
      <a className='ToggleNav' onClick={toggleMenu}>
        <Menu />
      </a>
      <div className='PageTitle'>
        <PageHeading
          text={ROUTES.find(_ => _[0] === store.get('route')[0])![1]}
        />
        <LanguageToggler />
      </div>
      <SideNav />
      <MainSection>{props.children}</MainSection>
    </div>
  )
}
