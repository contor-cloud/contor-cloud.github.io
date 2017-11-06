import React, { Component } from 'react'

import { media, colors } from '../config'
import SidebarScrollSection from './SidebarScrollSection'
import ContentNavSection from './ContentNavSection'

class ContentNavMenu extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      activeSection: props.defaultActiveSection,
    }
  }

  render() {
    const {
      isOpen,
      closeParentMenu,
      enableScrollSync,
      location,
      sectionList,
    } = this.props
    const { activeSection } = this.state

    const menuOpacity = isOpen ? 1 : 0
    const menuOffset = isOpen ? 0 : 42
    const SectionComponent = enableScrollSync ? SidebarScrollSection : ContentNavSection

    return (
      <nav
        style={{

        }}
        css={{
          opacity: menuOpacity,
          transform: `translate(${menuOffset}px, 0px)`,
          transition: 'opacity 0.35s ease, transform 0.33s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          width: '100%',
          paddingLeft: 20,
          position: 'fixed',
          height: 'calc(100vh - 42px)',
          marginTop: 42,
          WebkitOverflowScrolling: 'touch',

          [media.lessThan('small')]: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 2,
            backgroundColor: colors.white,
            overflowY: 'auto',
            pointerEvents: isOpen ? 'auto' : 'none',
          },

          [media.greaterThan('small')]: {
            height: '100%',
            zIndex: 0,
            overflowY: 'auto',
            backgroundColor: '#f7f7f7',
            borderLeft: '1px solid #ececec',
            opacity: '1 !important',
            transform: 'none !important',
          },
        }}>
        {sectionList.map((section, index) => (
          <SectionComponent
            isActive={activeSection === section || sectionList.length === 1}
            key={index}
            location={location}
            onLinkClick={closeParentMenu}
            onSectionTitleClick={() => this._toggleSection(section)}
            section={section}
          />
        ))}
      </nav>
    )
  }

  _toggleSection(section) {
    this.setState(state => ({
      activeSection: state.activeSection === section ? null : section,
    }))
  }
}

export default ContentNavMenu
