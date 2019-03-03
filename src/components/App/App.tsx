import * as React from 'react'
import { Container } from '../../services/store'
import { Page } from '../Page/Page'
import { Router } from '../Router/Router'
import { About } from '../Sections/About'
import { API } from '../Sections/API'
import { Examples } from '../Sections/Examples'
import { Install } from '../Sections/Install'
import { Plugins } from '../Sections/Plugins'
import { QuickStart } from '../Sections/QuickStart'
import { Scaling } from '../Sections/Scaling'
import { Testing } from '../Sections/Testing'
import { SplashPage } from '../SplashPage/SplashPage'
import './App.css'

let routes = {
  '': <SplashPage />,
  api: <Page><API /></Page>,
  install: <Page><Install /></Page>,
  plugins: <Page><Plugins /></Page>,
  'quick-start': <Page><QuickStart /></Page>,
  examples: <Page><Examples /></Page>,
  scaling: <Page><Scaling /></Page>,
  testing: <Page><Testing /></Page>,
  about: <Page><About /></Page>
}

export function App() {
  return <Container>
    <div className='App'>
      <Router routes={routes} />
    </div>
  </Container>
}
