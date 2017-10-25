import React, { Component } from 'react'
import styled from 'styled-components'

import LinkItem, { StyledLink } from '../LinkItem'
import rem from '../../utils/rem'
import titleToDash from '../../utils/titleToDash'
// import { lightGrey } from '../../utils/colors'
// import { mobile } from '../../utils/media'

import { sections } from '../../../static/blogSections.json'

const MenuInner = styled.div`
  display: block;
  box-sizing: border-box;
  height: 100%;
  padding-top: ${rem(25)};
`

const Section = styled.div`
  margin-bottom: ${rem(20)};
`

const SectionTitle = styled.h4`
  display: block;
  margin: ${rem(10)} ${rem(40)};
  font-weight: normal;
`

const SubSection = styled.h5`
  display: block;
  margin: ${rem(10)} ${rem(40)} ${rem(10)} ${rem(55)};
  font-size: 0.9rem;
  font-weight: normal;
`

class Folder extends Component {
  state = {
    isOpen: false,
  }

  toggleSubSections = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  componentWillMount() {
    this.setState({ isOpen: this.props.isOpenDefault })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpenDefault })
  }

  render() {
    // eslint-disable-next-line
    const { children, isOpenDefault, ...props } = this.props
    const { isOpen } = this.state

    return typeof children === 'function'
      ? children({ rootProps: props, toggleSubSections: this.toggleSubSections, isOpen })
      : null
  }
}

const SidebarMenu = ({ onRouteChange }) => (
  <MenuInner>
    {
      sections.map(({ title, pathname, subsections }) => (
          <Folder
            key={title}
            isOpenDefault={
              typeof window !== 'undefined' &&
                (window.location.pathname === `/blog/${pathname}`)
            }
          >
            {({
              rootProps,
              toggleSubSections,
              isOpen,
            }) => (
              <Section {...rootProps} onClick={onRouteChange}>
                <SectionTitle onClick={toggleSubSections}>
                  <LinkItem to={`/blog/${pathname}`}>
                    {title}
                  </LinkItem>
                </SectionTitle>

                {
                  isOpen && subsections.map(({ title }) => (
                    <SubSection key={title}>
                      <StyledLink to={`/blog/${pathname}#${titleToDash(title)}`}>
                        {title}
                      </StyledLink>
                    </SubSection>
                  ))
                }
                </Section>
            )}
          </Folder>
      ))
    }
  </MenuInner>
)

export default (SidebarMenu)
