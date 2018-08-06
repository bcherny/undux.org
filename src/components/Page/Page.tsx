import * as React from 'react'
import { Menu } from 'react-feather'
import { ROUTES } from '../../constants'
import { StoreProps, withStore } from '../../services/store'
import { LanguageToggler } from '../LanguageToggler/LanguageToggler'
import MainSection from '../MainSection/MainSection'
import { PageHeading } from '../PageHeading/PageHeading'
import { SideNav } from '../SideNav/SideNav'
import './Page.css'

class Page extends React.Component<StoreProps> {
  toggleMenu = () =>
    this.props.store.set('isMenuOpen')(
      !this.props.store.get('isMenuOpen')
    )
  render() {
    return <div className='Page'>
      <a className='ToggleNav' onClick={this.toggleMenu}><Menu /></a>
      <div className='PageTitle'>
        <PageHeading text={ROUTES.find(_ => _[0] === this.props.store.get('route')[0])![1]} />
        <LanguageToggler />
      </div>
      <SideNav />
      <MainSection>
        {this.props.children}
      </MainSection>
    </div>
  }
}

export default withStore(Page)
