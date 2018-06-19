const { getBabelLoader } = require('react-app-rewired')
const rewireTypescript = require('react-app-rewire-typescript')
const remarkHighlight = require('remark-highlight.js')
const Prism = require('./prism')

module.exports = (config, env) => {
  const babelLoader = getBabelLoader(config.module.rules)

  config.module.rules.map(rule => {
    if (typeof rule.test !== 'undefined' || typeof rule.oneOf === 'undefined') {
      return rule
    }

    rule.oneOf.unshift({
      test: /\.md$/,
      use: [
        {
            loader: "html-loader"
        },
        {
          loader: "markdown-loader",
          options: {
            highlight(code, lang) {
              if (!lang) {
                lang = 'jsx'
              }
              return Prism.highlight(code, Prism.languages[lang], lang);
            },
            smartypants: true,
          }
        }
      ]
    })

    rule.oneOf.unshift({
      test: /\.mdx$/,
      // include: babelLoader.include,
      use: [
        {
          loader: babelLoader.loader,
          options: babelLoader.options
        },
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins: [remarkHighlight]
          }
        }
      ]
    })

    return rule
  })

  config = rewireTypescript(config, env)
  return config
}
