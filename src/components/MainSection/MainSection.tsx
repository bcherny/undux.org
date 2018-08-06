import * as React from 'react'
import { StoreProps, withStore } from '../../services/store'
import './MainSection.css'

type State = {
  subscriptions: {unsubscribe(): void}[]
}

export let MainSection = withStore(class extends React.Component<StoreProps, State> {
  div = React.createRef<HTMLDivElement>()
  state: State = {
    subscriptions: [
      this.props.store.on('route').subscribe(route => {
        let div = this.div.current
        let subroute = route[1]
        if (!div || subroute) {
          return
        }
        div.scrollTop = 0
      })
    ]
  }
  componentWillUnmount() {
    this.state.subscriptions.forEach(_ => _.unsubscribe())
  }
  render() {
    return <section className='MainSection' ref={this.div}>
      {this.props.children}
    </section>
  }
})
