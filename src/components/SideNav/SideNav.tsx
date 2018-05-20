import * as React from 'react'
import { ROUTES } from '../../constants'
import { withStore } from '../../services/store'
import { Logo } from '../Logo/Logo'
import './SideNav.css'

export let SideNav = withStore(({store}) =>
  <nav className='SideNav'>
    <a onClick={() => store.set('route')([''])}>
      <Logo />
    </a>
    <ul>
      {ROUTES.map(([route, text, subroutes]) =>
        <li key={route}>
          <a
            className={route === store.get('route')[0] ? '-Active' : ''}
            onClick={() => store.set('route')([route])}
          >{text}</a>
          <ul>
            {subroutes.map(([subroute, subtext]) =>
              <li key={subroute}>
                <a onClick={() => store.set('route')([route, subroute])}>{subtext}</a>
              </li>
            )}
          </ul>
        </li>
      )}
    </ul>
  </nav>
)
