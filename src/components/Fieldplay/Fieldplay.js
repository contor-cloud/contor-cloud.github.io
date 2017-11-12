import React, { Component } from 'react'

import initScene from './lib/scene'

class Fieldplay extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    const canvas = this.canvas
    const ctxOptions = {antialiasing: false }

    const gl = canvas.getContext('webgl', ctxOptions) ||
                canvas.getContext('experimental-webgl', ctxOptions)

    if (gl) {
      window.webgGLEnabled = true
      var scene = initScene(gl)
      scene.start()
    } else {
      window.webgGLEnabled = false
    }
  }

  render() {
    return (
      <canvas ref={(c) => {this.canvas = c}} width={640} height={640} />
    )
  }
}

export default Fieldplay
