import * as React from 'react'
import './DeprecatedSmall.css'

type Props = {
  asOf: string
}

export function DeprecatedSmall(props: Props) {
  return <span className='DeprecatedSmall'>
    Deprecated
  </span>
}
