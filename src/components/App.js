import React, { Component } from 'react'
import { Container, Content } from './Layout'
import Nav from './PrimaryNav'

class App extends Component {
  state = {
    isSideFolded: true,
    isMobileNavFolded: true
  }

  static defaultProps = {
    title: '',
    description: '',
  }

  onSideToggle = () => {
    this.setState({
      isSideFolded: !this.state.isSideFolded,
      isMobileNavFolded: true,
    })
  }

  onMobileNavToggle = () => {
    this.setState({
      isMobileNavFolded: !this.state.isMobileNavFolded,
      isSideFolded: true,
    })
  }

  onRouteChange = () => {
    this.setState({ isSideFolded: true, isMobileNavFolded: true })
  }

  render() {
    const { children } = this.props
    const { isSideFolded, isMobileNavFolded } = this.state

    return (
      <Container>
        <Nav
          isSideFolded={isSideFolded}
          isMobileNavFolded={isMobileNavFolded}
          onSideToggle={this.onSideToggle}
          onMobileNavToggle={this.onMobileNavToggle}
          onRouteChange={this.onRouteChange}
        />
        <Content moveRight={!isSideFolded}>
          {children}
        </Content>
      </Container>
    )
  }
}

export default App
