import React from 'react'
import Link from 'found/lib/Link'

import { colors, media } from '../config'
import LogoSvg from '../../../static/LogoSvg'

const HeaderLogo = () => (
  <Link
    css={{
      color: colors.brand,
      height: '100%',
      marginRight: 10,
      display: 'flex',
      alignItems: 'center',

      ':focus': {
        outline: 0,
        color: colors.white,
      },

    }}
    to="/">
    <LogoSvg
      size={25}
      css={{
        color: colors.white,
      }}
    />
    <span
      css={{
        color: 'inherit',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: '20px',
        marginLeft: 10,

        [media.lessThan('small')]: {
          display: 'none',
        },
      }}>
      Contor
    </span>
  </Link>
)

export default HeaderLogo
