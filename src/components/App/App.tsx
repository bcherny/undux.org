import * as React from 'react'
import { Header } from '../Header/Header'
import { Page } from '../Page/Page'
import { Router } from '../Router/Router'
import { About } from '../Sections/About'
import { API } from '../Sections/API'
import { Install } from '../Sections/Install'
import { Plugins } from '../Sections/Plugins'
import { QuickStart } from '../Sections/QuickStart'
import { Recipes } from '../Sections/Recipes'
import { Scaling } from '../Sections/Scaling'
import { Testing } from '../Sections/Testing'
import { SplashInstallInfo } from '../SplashInstallInfo/SplashInstallInfo'
import { SplashNav } from '../SplashNav/SplashNav'
import './App.css'

let routes = {
  '': <div className='SplashPage'>
    <Header />
    <SplashInstallInfo />
    <SplashNav />
  </div>,
  api: <Page><API /></Page>,
  install: <Page><Install /></Page>,
  plugins: <Page><Plugins /></Page>,
  'quick-start': <Page><QuickStart /></Page>,
  recipes: <Page><Recipes /></Page>,
  scaling: <Page><Scaling /></Page>,
  testing: <Page><Testing /></Page>,
  about: <Page><About /></Page>
}

export function App() {
  return <div className='App'>
    <Router routes={routes} />
  </div>
}
