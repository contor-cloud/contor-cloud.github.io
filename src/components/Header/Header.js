import React from 'react'

import { colors, media } from '../config'
import HeaderNav from './HeaderNav'
import HeaderLogo from './HeaderLogo'
import HeaderSocialMenu from './HeaderSocialMenu'

// const Header = () => (
//   <header>
//     <HeaderLogo />
//     <HeaderNav />
//     <HeaderSocialMenu />
//   </header>
// )

const Header = () => (
  <header
    css={{
      backgroundColor: colors.headerBackground,
      color: colors.white,
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1,
      width: '100%',
      height: 42,
      paddingLeft: 10,
      paddingRight: 10,
      display: 'grid',
      gridTemplateColumns: '1fr 4fr 1fr',
      alignItems: 'center',
      [media.greaterThan('medium')]: {
        gridTemplateColumns: '1fr 3.25fr 1.75fr',
      },
    }}>
    <HeaderLogo />
    <HeaderNav />
    <HeaderSocialMenu />
  </header>
)

export default Header
