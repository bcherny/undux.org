import * as React from 'react'
import QuickStartStep1 from '../../copy/QuickStartStep1.md'
import QuickStartStep2 from '../../copy/QuickStartStep2.md'
import { Code } from '../Code/Code'
import { FlashyHeading } from '../FlashyHeading/FlashyHeading'
import { InlineCode } from '../InlineCode/InlineCode'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'

export function QuickStart() {
  return <>
    <SectionSubheading>1. Install Undux</SectionSubheading>
    <Code><code>
      // Using Yarn:<br />
      yarn add undux rxjs<br /><br />

      // Or, using NPM:<br />
      npm install undux rxjs --save</code></Code>
    <SectionSubheading>2. Create a store</SectionSubheading>
    <PolyglotCode code={QuickStartStep1} />
    <p>Be sure to define a key for each value in your model, even if the value is initially <InlineCode>undefined</InlineCode>.</p>

    <SectionSubheading>3. Connect your React components</SectionSubheading>
    <PolyglotCode code={QuickStartStep2} />
    <FlashyHeading>That's all there is to it.</FlashyHeading>
  </>
}
