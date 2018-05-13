import * as React from 'react'
import { ROUTES, SUBROUTES } from '../../constants'
import { withStore } from '../../store'
import { Logo } from '../Logo/Logo'
import './SideNav.css'

export let SideNav = withStore(({store}) =>
  <nav className='SideNav'>
    <a onClick={() => store.set('route')('')}>
      <Logo />
    </a>
    <ul>
      {ROUTES.map(([route, text]) =>
        <li key={route}>
          <a
            className={route === store.get('route') ? '-Active' : ''}
            onClick={() => store.set('route')(route)}
          >{text}</a>
          <ul>
            {SUBROUTES[route].map(([subroute, subtext]) =>
              <li key={subroute}>
                <a onClick={() => store.set('route')(route)}>{subtext}</a>
              </li>
            )}
          </ul>
        </li>
      )}
    </ul>
  </nav>
)
