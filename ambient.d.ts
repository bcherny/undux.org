declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

declare module '*.md' {
  let s: string
  export default s
}

declare module '*.mdx' {
  let MDXComponent: () => JSX.Element
  export default MDXComponent
}

declare module 'react-feather'
