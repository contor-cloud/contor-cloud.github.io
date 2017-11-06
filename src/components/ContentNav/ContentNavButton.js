import React from 'react'

import { colors, media } from '../config'
import ChevronSvg from '../svg/ChevronSvg'

const ContentNavButton = ({ isOpen, openParentMenu }) => {

  const iconOffset = isOpen ? 11.75 : -2.5

  return (
    <div
      css={{
        height: '62px',
        width: '62px',
        backgroundColor: colors.darker,
        color: colors.brand,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '25%',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
        position: 'fixed',
        bottom: 44, // iOS Safari's inert "bottom 44px"
        right: 20,
        zIndex: 3,
        cursor: 'pointer',
        display: 'none', // gets overriden at small screen sizes

        [media.lessThan('small')]: {
          display: 'inline-block',
        },
      }}
      onClick={openParentMenu}
      role="button"
      tabIndex={0}>
        <div
          css={{
            color: colors.brand,
            height: 60,
            overflow: 'hidden',
            display: 'flex',
            flex: "0 1 auto",
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <ChevronSvg
              size={17}
              cssProps={{
                transform: `translate(${iconOffset}px, 0px) rotate(90deg)`,
                transition: 'transform 0.2s ease',
              }}
            />
            <ChevronSvg
              size={17}
              cssProps={{
                transform: `translate(${0 - iconOffset}px, 0px) rotate(-90deg)`,
                transition: 'transform 0.2s ease',
              }}
            />
        </div>
    </div>
  )
}


export default ContentNavButton
