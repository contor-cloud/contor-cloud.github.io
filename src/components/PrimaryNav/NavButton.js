import React from 'react' // eslint-disable-line
import styled, { css } from 'styled-components'

import { resetInput } from '../../utils/form'
import rem from '../../utils/rem'
import { navbarHeight } from '../../utils/sizes'

const NavButton = styled.button`
  ${resetInput}

  flex: 0 0 auto;
  min-width: ${rem(navbarHeight)};
  height: ${rem(navbarHeight)};
  text-align: center;
  vertical-align: middle;
  cursor: pointer;

  ${p => p.active && css`
    background: rgba(0, 0, 0, 0.07);
  `}

  &:focus {
    border: ${rem(2)} solid currentColor;
    border-radius: ${rem(2)};
  }
`

export default NavButton