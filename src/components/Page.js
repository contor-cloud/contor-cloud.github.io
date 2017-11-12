import md from './Markdown/mdRenderer'
import Fieldplay from './Fieldplay'

// TODO:  Turn into CSS Grid
const Page = ({
  content,
}) => {
  return (
    <div>
      {md(content)}
      <Fieldplay />
    </div>
  )
}

export default Page
