// https://github.com/sindresorhus/strip-indent

const stripIndent = str => {
  const match = str.match(/^[ \t]*(?=\S)/gm)

  if (!match) {
    return str
  }

  const indent = Math.min(...match.map(x => x.length))
  const re = new RegExp(`^[ \\t]{${indent}}`, 'gm')

  return indent > 0 ? str.replace(re, '') : str
}

export default stripIndent
