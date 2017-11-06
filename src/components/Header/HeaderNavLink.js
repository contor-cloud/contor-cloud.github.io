import React from 'react'
import Link from 'found/lib/Link'

import { colors, media } from '../config'

const style = {
  color: colors.white,
  transition: 'color 0.2s ease-out',
  fontWeight: 300,
  position: 'relative',
  paddingLeft: 15,
  paddingRight: 15,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  ':focus': {
    outline: 0,
    backgroundColor: colors.lighter,
    color: colors.white,
  },

  [media.lessThan('xsmall')]: {
    paddingLeft: 8,
    paddingRight: 8,
  },

  [media.between('small', 'medium')]: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  [media.greaterThan('xlarge')]: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
  },
}


// This is the css passed to Found's active link
const activeStyle = {
  color: colors.brand
}

// const activeAfterStyle = {
//   [media.greaterThan('small')]: {
//     position: 'absolute',
//     bottom: -1,
//     height: 4,
//     left: 0,
//     right: 0,
//     zIndex: 1,
//     background: colors.brand,
//   },
// }

// TODO: Fix Active Links & Sections
const HeaderNavLink = (props) => {
  return (
    <Link
      css={style}
      activeStyle={activeStyle}
      activeProp='isActive'
      to={props.to}
    >
      {props.title}
      {/*{{...props.isActive} && <span css={activeAfterStyle} />}*/}
    </Link>
  )
}

export default HeaderNavLink
