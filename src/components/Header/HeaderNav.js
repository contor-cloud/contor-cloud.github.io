import React from 'react'

import { media } from '../config'
import HeaderNavLink from './HeaderNavLink'

const HeaderNav = () => (
  <nav
    css={{
      height: '100%',
      width: 'auto',
      display: 'flex',
      flexDirection: 'row',
      flexGrow: '1',
      alignItems: 'stretch',
      justifyContent: 'center',
      overflowX: 'auto',
      overflowY: 'hidden',
      WebkitOverflowScrolling: 'touch',
      
      [media.greaterThan('medium')]: {
        justifyContent: 'space-between',
      },
      // [media.lessThan('small')]: {
      //   maskImage:
      //     'linear-gradient(to right, transparent, white 20px, black 10%, transparent)',
      // },
    }}>
    <HeaderNavLink
      title="Blog"
      to="/blog/"
    />
  </nav>
)

export default HeaderNav
