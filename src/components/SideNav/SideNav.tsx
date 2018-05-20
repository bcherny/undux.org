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
            className={route === store.get('route')[0] && (!store.get('route')[1] || !subroutes.length) ? '-Active' : ''}
            onClick={() => store.set('route')([route])}
          >{text}</a>
          <ul>
            {subroutes.map(([subroute, subtext]) =>
              <li key={subroute}>
                <a
                  className={store.get('route')[1] && route === store.get('route')[0] && subroute === store.get('route')[1] ? '-Active' : ''}
                  onClick={() => store.set('route')([route, subroute])}
                >{subtext}</a>
              </li>
            )}
          </ul>
        </li>
      )}
    </ul>
  </nav>
)
