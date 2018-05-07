import * as React from 'react'
import './SectionHeading.css'

type Props = {
  text: string
}

export function SectionHeading({ text }: Props) {
  let href = toHref(text)
  return <h2 className='SectionHeading'>
    <a href={'#' + href} id={href}>{text}</a>
  </h2>
}

function toHref(text: string) {
  return text.toLocaleLowerCase().replace(/\s+/g, '-')
}
