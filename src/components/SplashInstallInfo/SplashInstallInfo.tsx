import * as React from 'react'
import '../Code/Code.css'
import './SplashInstallInfo.css'

export function SplashInstallInfo() {
  return <span className='Code SplashInstallInfo'>
    <span className='CodeBlock'>
      <input
        onClick={e => e.currentTarget.setSelectionRange(0, e.currentTarget.value.length)}
        readOnly={true}
        value='npm install undux rxjs'
      />
    </span>
  </span>
}
