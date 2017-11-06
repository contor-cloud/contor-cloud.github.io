import React from 'react'
import { colors } from '../src/components/config'

const LogoSvg = ({size = 10, cssProps = {}}: {
  size: number,
  cssProps: Object,
}) => (
  <svg
    style={{
      color: colors.white,
    }}
    css={cssProps}
    width={size}
    height={size}>
    <rect
      x="0px"
      y="0px"
      rx={size/4}
      ry={size/4}
      width={size}
      height={size}
    />
    <rect
      style={{
        color: colors.white,
      }}
      x={size/20}
      y={size/20}
      rx={(size-size/10)/4}
      ry={(size-size/10)/4}
      width={size-size/10}
      height={size-size/10}
    />
  </svg>
)

export default LogoSvg
