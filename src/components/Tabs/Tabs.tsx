import * as React from 'react'
import './Tabs.css'

type Props<T extends React.ReactChild> = {
  activeItem: T | null
  items: T[]
  onClick(item: T): void
}

export function Tabs<T extends React.ReactChild>(props: Props<T>) {
  return <ul className='Tabs'>
    {props.items.map(_ =>
      <li className={'Tab' + (_ === props.activeItem ? ' -Active' : '')} key={_.toString()}>
        <a href='#' onClick={e => e.preventDefault() || props.onClick(_)}>{_}</a>
      </li>
    )}
  </ul>
}
