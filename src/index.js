import React, { PureComponent } from 'react'
import { Motion, spring } from 'react-motion'

import document from 'global/document'

export class ImageLoader extends PureComponent {
  state = {
    isImgLoaded: false
  }

  componentDidMount () {
    const { url } = this.props

    const img = document.createElement('img')

    img.onload = () => this.setState({ isImgLoaded: true })

    img.src =url
  }

  render () {
      const { url, className, opacity } = this.props
      const { isImgLoaded } = this.state

      return (
        <Motion style={{
            imgSpring: spring(isImgLoaded ? 1 : 0.7),
            imgOpa: spring(opacity !== false ? (isImgLoaded ? 1 : 0) : 1)
          }}
        >
          {({ imgSpring, imgOpa }) => (
            <img className={className} src={url} style={{transform: `scale(${imgSpring})`, opacity: imgOpa}}/>
          )}
        </Motion>
      )
  }
}

export default ImageLoader
