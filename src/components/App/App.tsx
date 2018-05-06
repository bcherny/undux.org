import * as React from 'react'
import { MainSection } from '../MainSection/MainSection'
import { SideNav } from '../SideNav/SideNav'
import './App.css'

export function App() {
  return <div className='App'>
    <SideNav />
    <MainSection />
  </div>
}
