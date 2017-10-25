import md from './md'

const MdPage = (props) => {
 const { content } = props

 return md(content)
}

export default MdPage
