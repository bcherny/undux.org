import * as React from 'react'
import './Tabs.css'

type Props<T extends React.ReactChild> = {
  activeItem: T | null
  getText?(item: T): string
  items: T[]
  onClick(item: T): void
}

export function Tabs<T extends React.ReactChild>(props: Props<T>) {
  return <ul className='Tabs'>
    {props.items.map(_ =>
      <li className={'Tab' + (_ === props.activeItem ? ' -Active' : '')} key={_.toString()}>
        <a href='#' onClick={e => {
          e.preventDefault()
          props.onClick(_)
        }}>{props.getText ? props.getText(_) : _}</a>
      </li>
    )}
  </ul>
}
