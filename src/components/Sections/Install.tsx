import * as React from 'react'
import InstallRxJS4 from '../../copy/InstallRxJS4.md'
import InstallRxJS5 from '../../copy/InstallRxJS5.md'
import InstallRxJS6 from '../../copy/InstallRxJS6.md'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'

export function Install() {
  return <>
    <p>Undux is compatible with RxJS versions 4 and up. If you're not sure which version to use, use 6 (the latest version).</p>
    <SectionSubheading>Using RxJS 6 (recommended)</SectionSubheading>
    <PolyglotCode code={InstallRxJS6} />
    <SectionSubheading>Using RxJS 5 (legacy)</SectionSubheading>
    <PolyglotCode code={InstallRxJS5} />
    <SectionSubheading>Using RxJS 4 (legacy)</SectionSubheading>
    <PolyglotCode code={InstallRxJS4} />
  </>
}
