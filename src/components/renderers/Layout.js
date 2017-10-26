import styled, { css } from 'styled-components'
import rem from '../utils/rem'
import { mobile } from '../utils/media'
import { sidebarWidth } from '../utils/sizes'
import { bodyFont, headerFont } from '../utils/fonts'

export const Title = styled.h1`
  display: block;
  text-align: left;
  width: 100%;
  color: rgb(243, 182, 97);
  font-size: ${rem(42)};
  font-weight: bold;
  font-family: ${headerFont};
`

export const Header = styled.h2`
  font-size: ${rem(32)};
  font-weight: 500;
  font-family: ${headerFont};
`

export const SubHeader = styled.h3`
  display: block;
  margin: ${rem(35)} 0 ${rem(22)} 0;
  font-size: ${rem(24)};
  font-weight: 500;
  font-family: ${headerFont};
`
