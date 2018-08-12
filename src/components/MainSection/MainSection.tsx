import * as React from 'react'
import { StoreProps, withStore } from '../../services/store'
import './MainSection.css'

type State = {
  subscriptions: {unsubscribe(): void}[]
}

class MainSection extends React.Component<StoreProps, State> {
  div = React.createRef<HTMLDivElement>()
  state: State = {
    subscriptions: [
      this.props.store.on('route').subscribe(([toproute, subroute]) => {
        let div = this.div.current
        if (subroute) {
          let e = document.getElementById(toproute + '/' + subroute)
          if (e) {
            e.scrollIntoView()
          }
          return
        }
        if (!div) {
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
}

export default withStore(MainSection)
