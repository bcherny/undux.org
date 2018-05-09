import * as React from 'react'
import { Hash, Sun, Zap } from 'react-feather'
import './SplashNav.css'

export function SplashNav() {
  return <nav className='SplashNav'>
    <ul>
      <li><a href='#quick-start'><Zap className='Icon' size={36} />Quick Start</a></li>
      <li><a href='#api'><Hash className='Icon' size={36} />API</a></li>
      <li><a href='#theory'><Sun className='Icon' size={36} />Theory</a></li>
    </ul>
  </nav>
}
