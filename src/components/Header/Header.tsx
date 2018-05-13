import * as React from 'react'
import { Logo } from '../Logo/Logo'
import './Header.css'

export function Header() {
  return <header className='Header'>
    <Logo />
    <h2>Dead simple state management for ReactJS</h2>
  </header>
}
