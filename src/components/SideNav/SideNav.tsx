import * as React from 'react'
import { ExternalLink, GitHub } from 'react-feather'
import { ROUTES } from '../../constants'
import { withStore } from '../../services/store'
import { DeprecatedSmall } from '../DeprecatedSmall/DeprecatedSmall'
import { Logo } from '../Logo/Logo'
import './SideNav.css'

export let SideNav = withStore(({store}) =>
  <nav className={'SideNav' + (store.get('isMenuOpen') ? ' -Open' : '')}>
    <a onClick={() => store.set('route')([''])}>
      <Logo />
    </a>
    <ul>
      {ROUTES.map(([route, text, subroutes]) =>
        <li key={route}>
          <a
            className={route === store.get('route')[0] && (!store.get('route')[1] || !subroutes.length) ? '-Active' : ''}
            href={'#' + route}
          >{text}</a>
          <ul>
            {subroutes.map(([subroute, subtext, deprecated]) => {
              let isActive = store.get('route')[1]
                && route === store.get('route')[0]
                && subroute === store.get('route')[1]
              return <li key={subroute}>
                <a
                  className={(isActive ? '-Active' : '') + (deprecated ? ' -Deprecated' : '')}
                  href={'#' + route + '/' + subroute}
                >
                  {subtext}
                  {deprecated && <DeprecatedSmall asOf={deprecated.asOf} />}
                </a>
              </li>
            })}
          </ul>
        </li>
      )}
      <li><a href='https://github.com/bcherny/undux'><GitHub />Github<ExternalLink className='Right' /></a></li>
    </ul>
  </nav>
)
