import styled from 'styled-components'
import Link from 'found/lib/Link'
import React from 'react'

import rem from '../utils/rem'
import { violetRed, lightGrey } from '../utils/colors'

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  padding: ${rem(2)} ${rem(8)};
  margin: ${rem(-2)} ${rem(-8)};

  @media (min-width: ${1000 / 16}em) {
    border-radius: ${rem(3)};

    &:hover {
      background: ${lightGrey};
    }
  }
`

export const ExternalInlineLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener'
})`
  color: ${p => p['data-white'] ? 'white' : violetRed};
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
`

export const InlineLink = styled(Link).attrs({
  target: '_blank',
  rel: 'noopener'
})`
  color: ${p => p['data-white'] ? 'white' : violetRed};
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
`

const LinkItem = ({ children, className, inline, unstyled, external, white, ...rest }) => {
  let Child = StyledLink
  if (inline && external) {
    Child = ExternalInlineLink
  } else if (inline) {
    Child = InlineLink
  } else if (unstyled) {
    Child = Link
  } else if (external) {
    Child = 'a'
  }

  let dataAttrs
  if (white) {
    dataAttrs = { 'data-white': white }
  }

  if (external) {
    return (
      <Child href={rest.href} className={className} {...dataAttrs}>
        {children}
      </Child>
    )
  } else {
    return (
      <Child to={rest.to} className={className} {...dataAttrs}>
        {children}
      </Child>
    )
  }
}

export default LinkItem
