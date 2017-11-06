import ContentNav from './ContentNav'
import Markdown from './Markdown'

const sections = [
  {
    title: "Blog",
    items: [
      {
        id: "first",
        title: "First",
        subitems: [
          {
            id: "subitem1.1",
            title: "Subitem 1-1"
          },
          {
            id: "subitem1.2",
            title: "Subiten 1-2"
          },
        ]
      },
      {
        id: "second",
        title: "Second",
        subitems: [
          {
            id: "subitem2.1",
            title: "Subitem 2-1"
          },
          {
            id: "subitem",
            title: "Subitem 2-2"
          },
        ]
      },
    ]
  }
]


// TODO:  Turn into CSS Grid
const BlogPage = ({
  enableScrollSync = false,
  content,
  location,
  sectionList = sections,
}) => {
  return (
    <div>
      <Markdown content={content} />
      <ContentNav
        enableScrollSync={enableScrollSync}
        location={location}
        sectionList={sectionList}
        defaultActiveSection='first'
      />
    </div>
  )
}

export default BlogPage
