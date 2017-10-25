import React from 'react'
import { Parser } from 'commonmark'
import Renderer from 'commonmark-react-renderer'

const Page = (props) => {
 const { content } = props
 const parser = new Parser()
 const ast = parser.parse(content)
 console.log('ast: ' + ast)
 const renderer = new Renderer()

 return (
   <div>
     {renderer.render(ast)}
   </div>
 )
}

export default Page
