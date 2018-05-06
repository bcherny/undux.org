import * as React from 'react'
import logo from '../../images/logo.png'
import './Header.css'

export function Header() {
  return <header className='Header'>
    <img alt='Undux' className='Logo' src={logo} />
    <h2>Dead simple state management for React</h2>
  </header>
}
