import * as React from 'react'
import logo from '../../images/logo.png'
import './Logo.css'

type Props = {
  grayscale?: boolean
}

export function Logo(props: Props) {
  return <span className={'Logo' + (props.grayscale ? ' -Grayscale' : '')}>
    <img alt='Undux' src={logo} />
  </span>
}
