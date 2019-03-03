import * as React from 'react'
import { Route } from '../../datatypes'
import { useStore } from '../../services/store'

type Props = {
  routes: Record<Route, React.ReactElement<any>>
}

export function Router({ routes }: Props) {
  let store = useStore()
  return routes[store.get('route')[0]] || routes['']
}
