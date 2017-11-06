import styled from 'styled-components'

import rem from '../../utils/rem'
import { headerFont } from '../../utils/fonts'

const Title = styled.h1`
  display: block;
  text-align: left;
  width: 100%;
  color: rgb(243, 182, 97);
  font-size: ${rem(42)};
  font-weight: bold;
  font-family: ${headerFont};
`
export default Title
