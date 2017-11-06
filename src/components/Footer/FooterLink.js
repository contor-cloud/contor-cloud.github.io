import React from 'react'
import Link from 'found/lib/Link'

import { colors } from '../config'

const FooterLink = ({children, target, to}) => (
  <Link
    css={{
      whiteSpace: 'nowrap',
      lineHeight: 2,
      ':hover': {
        color: colors.brand,
      },
    }}
    to={to}
    target={target}>
    {children}
  </Link>
)

export default FooterLink
