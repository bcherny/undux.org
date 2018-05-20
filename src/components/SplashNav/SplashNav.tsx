import * as React from 'react'
import { Hash, Sun, Zap } from 'react-feather'
import { withStore } from '../../services/store'
import './SplashNav.css'

export let SplashNav = withStore(({ store }) =>
  <nav className='SplashNav'>
    <ul>
      <li><a href='#quick-start'><Zap className='Icon' size={36} />Quick Start</a></li>
      <li><a href='#api'><Hash className='Icon' size={36} />API</a></li>
      <li><a href='#recipes'><Sun className='Icon' size={36} />Examples & Usage</a></li>
    </ul>
  </nav>
)
