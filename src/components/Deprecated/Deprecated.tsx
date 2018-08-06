import * as React from 'react'
import './Deprecated.css'

type Props = {
  asOf: string
}

export function Deprecated(props: Props) {
  return <span className='Deprecated'>
    Deprecated as of {props.asOf}
  </span>
}
