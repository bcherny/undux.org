import * as React from 'react'
import { EXTENSIONS } from '../../constants'
import { StoreProps, withStore } from '../../services/store'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { Tabs } from '../Tabs/Tabs'
import './TabbedPolyglotCode.css'

type Props = StoreProps & {
  tabs: {
    code: any
    filename: string
  }[]
}

type State = {
  activeItem: string
}

class TabbedPolyglotCode extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      activeItem: props.tabs[0].filename
    }
  }
  render() {

    let activeTab = this.props.tabs.find(_ => _.filename === this.state.activeItem)
    if (!activeTab) {
      throw 'no tabs!'
    }

    let ext = '.' + EXTENSIONS[this.props.store.get('language')]

    return <div className='TabbedPolyglotCode'>
      <Tabs
        activeItem={activeTab.filename}
        getText={_ => _ + ext}
        items={this.props.tabs.map(_ => _.filename)}
        onClick={activeItem => this.setState({activeItem})}
      />
      <PolyglotCode {...activeTab} shouldShowFilename={false} />
    </div>
  }
}

export default withStore(TabbedPolyglotCode)
