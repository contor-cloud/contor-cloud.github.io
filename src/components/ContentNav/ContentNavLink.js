import React from 'react'
import Link from 'found/lib/Link'

import slugify from '../../utils/slugify'
import { colors, media } from '../config'
import ExternalLinkSvg from '../svg/ExternalLinkSvg'

const linkCss = {
  color: colors.text,
  borderBottom: '1px solid transparent',
  transition: 'border 0.2s ease',
  marginTop: 5,
  display: 'inline-block',

  '&:hover': {
    color: colors.subtle,
  },
}

const activeLinkCss = {
  fontWeight: 700,
}

const activeLinkBefore = {
  position: 'absolute',
  left: 0,
  width: 4,
  height: 25,
  borderLeft: `4px solid ${colors.brand}`,
  paddingLeft: 16,
  marginTop: -3,

  [media.greaterThan('largerSidebar')]: {
    left: 15,
  },
}

const ContentNavLink = ({isActive, item, section}) => {
  if (item.href) {
    return (
      <a css={[linkCss]} href={item.href} target="_blank" rel="noopener">
        {item.title}
        <ExternalLinkSvg
          cssProps={{
            color: colors.subtle,
            verticalAlign: -2,
            marginLeft: 5,
            display: 'inline-block',
          }}
        />
      </a>
    )
  }
  return (
    <Link
      css={[linkCss, isActive && activeLinkCss]}
      to={slugify(item.id, section.directory)}>
      {isActive && <span css={activeLinkBefore} />}
      {item.title}
    </Link>
  )
}

export default ContentNavLink
