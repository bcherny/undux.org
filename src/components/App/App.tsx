import * as React from 'react'
import { Header } from '../Header/Header'
import { MainSection } from '../MainSection/MainSection'
import { Page } from '../Page/Page'
import { Router } from '../Router/Router'
import { About } from '../Sections/About'
import { Docs } from '../Sections/Docs'
import { QuickStart } from '../Sections/QuickStart'
import { SplashInstallInfo } from '../SplashInstallInfo/SplashInstallInfo'
import { SplashNav } from '../SplashNav/SplashNav'
import './App.css'

let routes = {
  '': <div className='SplashPage'>
    <Header />
    <SplashInstallInfo />
    <SplashNav />
  </div>,
  docs: <Page><Docs /></Page>,
  'quick-start': <Page><QuickStart /></Page>,
  recipes: <Page><MainSection /></Page>,
  about: <Page><About /></Page>
}

export function App() {
  return <div className='App'>
    <Router routes={routes} />
  </div>
}
