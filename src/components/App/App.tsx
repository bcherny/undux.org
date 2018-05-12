import * as React from 'react'
import { Header } from '../Header/Header'
import { MainSection } from '../MainSection/MainSection'
import { Router } from '../Router/Router'
import { SplashInstallInfo } from '../SplashInstallInfo/SplashInstallInfo'
import { SplashNav } from '../SplashNav/SplashNav'
import './App.css'

let routes = {
  '': <div className='SplashPage'>
    <Header />
    <SplashInstallInfo />
    <SplashNav />
  </div>,
  api: <MainSection />,
  'quick-start': <MainSection />,
  theory: <MainSection />
}

export function App() {
  return <div className='App'>
    <Router routes={routes} />
  </div>
}
