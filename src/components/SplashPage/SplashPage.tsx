import * as React from 'react'
import { Header } from '../Header/Header'
import { SplashInstallInfo } from '../SplashInstallInfo/SplashInstallInfo'
import { SplashNav } from '../SplashNav/SplashNav'
import './SplashPage.css'

export function SplashPage() {
  return <div className='SplashPage'>
    <Header />
    <div className='About'>
      <h3>Undux is a simple & typesafe alternative to <a href='https://facebook.github.io/flux/'>Flux</a> and <a href='https://redux.js.org/'>Redux</a>. Use it to manage state and data for ReactJS applications of all sizes.</h3>
    </div>
    <SplashInstallInfo />
    <SplashNav />
  </div>
}
