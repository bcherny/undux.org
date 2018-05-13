import * as React from 'react'
import './PageHeading.css'

type Props = {
  text: string
}

export function PageHeading({ text }: Props) {
  let href = toHref(text)
  return <h2 className='PageHeading'>
    <a href={'#' + href} id={href}>{text}</a>
  </h2>
}

function toHref(text: string) {
  return text.toLocaleLowerCase().replace(/\s+/g, '-')
}
