import React from 'react'

import { colors } from './config'

// eslint-disable-next-line
const NavSectionTitle = ({children, title, cssProps = {}}) => (
  <div
    css={{
      color: colors.navSectionTitle,
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 3,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      ...cssProps,
    }}>
    {children}
  </div>
)

export default NavSectionTitle
