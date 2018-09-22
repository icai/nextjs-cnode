import React, { Component } from 'react'
import { View } from "ui";
import PropTypes from "prop-types";

import './index.scss'

export default class Loading extends Component {
  static defaultProps = {
    size: '18',
    color: '#fff'
  }

  static propTypes = {
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    color: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }

  render() {
    const { color, size } = this.props
    const sizeStyle = {
      width: `${size}px`,
      height: `${size}px`
    }
    const colorStyle = {
      'border': `1px solid ${color}`,
      'border-color': `${color} transparent transparent transparent`
    }
    const ringStyle = Object.assign({}, colorStyle, sizeStyle)

    return (
      <View className='at-loading' style={sizeStyle}>
        <View className='at-loading__ring' style={ringStyle}></View>
        <View className='at-loading__ring' style={ringStyle}></View>
        <View className='at-loading__ring' style={ringStyle}></View>
      </View>
    )
  }
}
