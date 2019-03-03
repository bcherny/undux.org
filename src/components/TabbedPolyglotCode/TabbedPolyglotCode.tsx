import * as React from 'react'
import { EXTENSIONS } from '../../constants'
import { useStore } from '../../services/store'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { Tabs } from '../Tabs/Tabs'
import './TabbedPolyglotCode.css'

type Props = {
  tabs: {
    code: any
    filename: string
  }[]
}

export function TabbedPolyglotCode(props: Props) {
  let store = useStore()
  let [activeItem, setActiveItem] = React.useState(props.tabs[0].filename)

  let activeTab = props.tabs.find(_ => _.filename === activeItem)
  if (!activeTab) {
    throw 'no tabs!'
  }

  let ext = '.' + EXTENSIONS[store.get('language')]

  return (
    <div className='TabbedPolyglotCode'>
      <Tabs
        activeItem={activeTab.filename}
        getText={_ => _ + ext}
        items={props.tabs.map(_ => _.filename)}
        onClick={activeItem => setActiveItem(activeItem)}
      />
      <PolyglotCode {...activeTab} shouldShowFilename={false} />
    </div>
  )
}
