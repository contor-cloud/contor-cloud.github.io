import React, { Component } from 'react'

import ContentNavMenu from './ContentNavMenu'
import ContentNavButton from './ContentNavButton'

class ContentNav extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      open: false,
    }
    this._openNavMenu = this._openNavMenu.bind(this)
    this._closeNavMenu = this._closeNavMenu.bind(this)
  }

  _openNavMenu() {
    this.setState({open: !this.state.open})
  }

  _closeNavMenu() {
    this.setState({open: false})
  }

  render() {
    const { open } = this.state

    return (
      <div>
        <ContentNavMenu isOpen={open} closeParentMenu={this._closeNavMenu} {...this.props} />
        <ContentNavButton isOpen={open} openParentMenu={this._openNavMenu} />
      </div>
    )
  }
}

export default ContentNav
