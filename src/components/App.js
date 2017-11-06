import React from 'react'

import Header from './Header'
import Footer from './Footer'

// Import global styles
import 'glamor/reset'
import '../css/reset.css'

// Turn into CSS Grid
// const AppFrame = ({children, hasSidebar = false}) => {
//   return (
//     <div>
//       <Header />
//       <Flex
//         direction="column"
//         shrink="0"
//         grow="1"
//         valign="stretch"
//         css={{
//           flex: '1 0 auto',
//           position: 'relative',
//           marginTop: 42,
//         }}
//       >
//         {children}
//       </Flex>
//       <Footer hasSidebar={hasSidebar} />
//     </div>
//   )
// }
//
// export default AppFrame

const App = ({children}) => {
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateAreas: `
          "header"
          "content"
        `
    }}>
      <Header css={{ gridArea: 'header' }}/>
      {children}
      <Footer/>
    </div>
  )
}

export default App
