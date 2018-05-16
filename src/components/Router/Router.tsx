import * as React from 'react'
import { Route } from '../../datatypes'
import { StoreProps, withStore } from '../../store'

type Props = StoreProps & {
  routes: Record<Route, React.ReactElement<any>>
}

export let Router = withStore(({ routes, store }: Props) =>
  routes[store.get('route')] || routes['']
)
