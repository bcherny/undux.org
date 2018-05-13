import * as React from 'react'
import { Hash, Sun, Zap } from 'react-feather'
import { withStore } from '../../store'
import './SplashNav.css'

export let SplashNav = withStore(({ store }) =>
  <nav className='SplashNav'>
    <ul>
    <li><a onClick={() => store.set('route')('quick-start')}><Zap className='Icon' size={36} />Quick Start</a></li>
      <li><a onClick={() => store.set('route')('docs')}><Hash className='Icon' size={36} />Docs</a></li>
      <li><a onClick={() => store.set('route')('recipes')}><Sun className='Icon' size={36} />Examples & Usage</a></li>
    </ul>
  </nav >
)