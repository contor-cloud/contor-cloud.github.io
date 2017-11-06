import md from './Markdown/mdRenderer'

// TODO:  Turn into CSS Grid
const Page = ({
  content,
}) => {
  return (
    <div>
      {md(content)}
    </div>
  )
}

export default Page
