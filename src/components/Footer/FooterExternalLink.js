import React from 'react'

import { colors } from '../config'
import ExternalLinkSvg from '../svg/ExternalLinkSvg'

const FooterExternalLink = ({children, href, target, rel}) => (
  <a
    css={{
      whiteSpace: 'nowrap',
      lineHeight: 2,
      ':hover': {
        color: colors.brand,
      },
    }}
    href={href}
    target={target}
    rel={rel}>
    {children}
    <ExternalLinkSvg
      cssProps={{
        verticalAlign: -2,
        display: 'inline-block',
        marginLeft: 5,
        color: colors.footerExternalLinkIcon,
      }}
    />
  </a>
)

export default FooterExternalLink
