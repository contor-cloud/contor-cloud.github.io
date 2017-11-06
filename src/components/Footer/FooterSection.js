import React from 'react'

const FooterSection = ({children}) => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '50%',
      paddingTop: 40,
    }}>
    {children}
  </div>
)

export default FooterSection
