const visit = require('unist-util-visit')
const escapeGoat = require('escape-goat')
const Babel = require('babel-standalone')

let livePattern = /^\s*\/\/ @live/

module.exports = ({ markdownAST }) => {
  visit(markdownAST, `code`, node => {
    if (node.lang === 'jsx live') {
      throw new Error('something has jsx live')
    }
    if ( node.lang === 'jsx' && livePattern.test(node.value)) {
      let cleanValue = node.value.replace('// @live', '').trim()
      node.type = `html`
      node.value = escapeGoat.escapeTag`<live-code code="${cleanValue}" compiled="${
        Babel.transform(cleanValue, {
          presets: ['es2015', 'react', 'stage-1']
        }).code
      }"></live-code>`
    }
  })
}