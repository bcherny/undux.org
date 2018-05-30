import * as React from 'react'
import { Subscription } from 'rxjs'
import { StoreProps, withStore } from '../../services/store'
import './MainSection.css'

type State = {
  subscriptions: Subscription[]
}

export let MainSection = withStore(class extends React.Component<StoreProps, State> {
  div = React.createRef<HTMLDivElement>()
  state = {
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
