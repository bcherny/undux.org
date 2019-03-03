import * as React from 'react'
import { useStore } from '../../services/store'
import './MainSection.css'

export function MainSection(props: {children: React.ReactNode}) {
  let div = React.useRef<HTMLElement>(null)
  let store = useStore()
  React.useEffect(() => {
    let sub = store.on('route').subscribe(([toproute, subroute]) => {
      if (subroute) {
        let e = document.getElementById(toproute + '/' + subroute)
        if (e) {
          e.scrollIntoView()
        }
        return
      }
      if (!div.current) {
        return
      }
      div.current.scrollTop = 0
    })
    return () => sub.unsubscribe()
  }, [div])
  return <section className='MainSection' ref={div}>
    {props.children}
  </section>
}
