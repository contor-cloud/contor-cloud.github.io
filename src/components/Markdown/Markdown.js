import md from './mdRenderer'

const Markdown = (props) => {
 const { content } = props

 return md(content)
}

export default Markdown
