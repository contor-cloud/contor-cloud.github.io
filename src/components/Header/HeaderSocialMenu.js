import React from 'react'

import { colors, fonts } from '../config'
import ExternalLinkSvg from '../svg/ExternalLinkSvg'

const HeaderSocialMenu = () => (
  <div
    css={{
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    }}>
    <a
      css={{
        ...fonts.small,
        whiteSpace: 'nowrap',
        padding: '5px 10px',
        marginLeft: 10,

        ':hover': {
          color: colors.brand,
        },

        ':focus': {
          outline: 0,
          backgroundColor: colors.lighter,
          borderRadius: 5,
        },
      }}
      href="https://github.com/contor-cloud/"
      target="_blank"
      rel="noopener noreferrer">
      GitHub
      <ExternalLinkSvg
        cssProps={{
          marginLeft: 5,
          verticalAlign: -2,
          color: colors.headerExternalLinkIcon,
        }}
      />
    </a>
  </div>
)

export default HeaderSocialMenu
