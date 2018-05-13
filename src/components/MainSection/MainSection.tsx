import * as React from 'react'
import { UIEvent } from 'react'
import { StoreProps, withStore } from '../../store'
import './MainSection.css'

type Props = StoreProps

export const MainSection = withStore(class extends React.Component<Props> {

  onRender = (element: HTMLElement | null) => {
    if (!element) {
      return
    }
    element.scrollTop = this.props.store.get('scrollTop')

    this.props.store.on('scrollTop')
      .subscribe(_ => {
      element.scrollTop = _
    })
  }

  onScroll = (e: UIEvent<HTMLElement>) =>
    this.props.store.set('scrollTop')(e.currentTarget.scrollTop)

  render() {
    return <section
      className='MainSection'
      onScroll={this.onScroll}
      ref={this.onRender}
    >
      {this.props.children}
    </section >
  }
})
