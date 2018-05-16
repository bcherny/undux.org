import * as React from 'react'
import PluginsCode from '../../copy/Plugins.md'
import PluginsLogger from '../../copy/PluginsLogger.md'
import PluginsReduxDevtools from '../../copy/PluginsReduxDevtools.md'
import Logger from '../../images/logger.png'
import ReduxLogger from '../../images/redux-logger.png'
import { InlineCode } from '../InlineCode/InlineCode'
import { PolyglotCode } from '../PolyglotCode/PolyglotCode'
import { SectionSubheading } from '../SectionSubheading/SectionSubheading'

const CHROME_LINK = 'https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd'
const FIREFOX_LINK = 'https://addons.mozilla.org/firefox/addon/remotedev/'
const REACT_NATIVE_LINK = 'https://github.com/zalmoxisus/remote-redux-devtools'

export function Plugins() {
  return <>
    <SectionSubheading>Redux Devtools</SectionSubheading>
    <p>Undux works out of the box with the Redux Devtools browser extension (download: <a href={CHROME_LINK}>Chrome</a>, <a href={FIREFOX_LINK}>Firefox</a>, <a href={REACT_NATIVE_LINK}>React Native</a>). To enable it, just wrap your store with the Redux Devtools plugin:</p>
    <PolyglotCode code={PluginsReduxDevtools} />
      <p>Redux Devtools has an inspector, a time travel debugger, and jump-to-state built in. All of these features are enabled for Undux as well. It looks like this in Chrome Devtools:</p>
    <img src={ReduxLogger} />
    <SectionSubheading>Built-in Logger</SectionSubheading>
    <p>Alternatively, use Undux's simple console-based logger. Just create your store with the <InlineCode>withLogger</InlineCode> higher order store, and all model updates (which key was updated, previous value, and new value) will be logged to the console.</p>
    <p>To enable the logger, simply import <InlineCode>withLogger</InlineCode> and wrap your store with it:</p>
    <PolyglotCode code={PluginsLogger} />
    <p>The logger will produce logs that look like this:</p>
    <img src={Logger} />
    <SectionSubheading>Write your own plugin</SectionSubheading>
    <p>Undux is easy to modify with your own plugins (also called "higher order stores"). Just define a function that takes a store as an argument and returns a store, adding listeners along the way. For convenience, Undux supports a special type of listener for plugins: <InlineCode>onAll</InlineCode>.</p>
    <PolyglotCode code={PluginsCode} />
  </>
}
