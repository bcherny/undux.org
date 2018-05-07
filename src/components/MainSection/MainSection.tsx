import * as React from 'react'
import { UIEvent } from 'react'
import { StoreProps, withStore } from '../../store'
import { Docs } from '../Docs/Docs'
import { Header } from '../Header/Header'
import './MainSection.css'

type Props = StoreProps

export const MainSection = withStore(class extends React.Component<Props> {

  onRender = (element: HTMLElement | null) => {
    if (!element) {
      return
    }
    element.scrollTop = this.props.store.get('windowScrollTop')
  }

  onScroll = (e: UIEvent<HTMLElement>) =>
    this.props.store.set('windowScrollTop')(e.currentTarget.scrollTop)

  render() {
    return <section
      className='MainSection'
      onScroll={this.onScroll}
      ref={this.onRender}
    >
      <Header />
      <Docs />
    </section >
  }
})
