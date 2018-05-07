import * as React from 'react'
import './SectionSubheading.css'

type Props = {
  text: string
}

export function SectionSubheading({ text }: Props) {
  return <h3 className='SectionSubheading'>{text}</h3>
}
