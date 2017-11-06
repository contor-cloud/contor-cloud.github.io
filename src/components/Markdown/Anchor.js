import React from 'react'
import styled, { css } from 'styled-components'
import LinkIcon from 'react-octicons-svg/dist/LinkIcon'

import { mobile } from '../../utils/media'
import rem from '../../utils/rem'
import { headerFont } from '../../utils/fonts'

const Header = styled.h2`
  font-size: ${rem(32)};
  font-weight: 500;
  font-family: ${headerFont};
`

const SubHeader = styled.h3`
  display: block;
  margin: ${rem(35)} 0 ${rem(22)} 0;
  font-size: ${rem(24)};
  font-weight: 500;
  font-family: ${headerFont};
`

const InvisibleAnchor = styled.div.attrs({
  'aria-hidden': true
})`
  position: relative;
  display: block;
  visibility: hidden;
  height: 0;

  top: ${rem(-70)};

  ${mobile(css`
    top: ${rem(-90)};
  `)}
`

const Anchor = styled.a`
  display: none;
  position: absolute;
  left: 0;
  color: inherit;
`

const AnchorIcon = styled(LinkIcon).attrs({
  width: null,
  height: null
})`
  width: ${rem(20)};
  opacity: 0.7;
  margin-top: ${rem(-5)};

  &:hover {
    opacity: 0.9;
  }
`

const AnchorHeader = styled(Header)`
  position: relative;
  margin-left: ${rem(-30)};
  padding-left: ${rem(30)};

  ${mobile(css`
    margin-left: 0;

    /* stylelint-disable-next-line */
    ${Anchor} {
      display: inline-block;
    }
  `)}

  &:hover ${Anchor} {
    display: inline-block;
  }
`

const AnchorSubHeader = AnchorHeader.withComponent(SubHeader)

const Link = ({ children, id, sub }) => {
  const Child = sub ? AnchorSubHeader : AnchorHeader

  return (
    <Child>
      <InvisibleAnchor id={id} />

      <Anchor href={`#${id}`}>
        <AnchorIcon />
      </Anchor>

      {children}
    </Child>
  )
}

export default Link
