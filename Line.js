import React, {
  Component,
} from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import PropTypes from 'prop-types';
import * as Utils from './Utils'

export default class Line extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {
    color: PropTypes.string.isRequired,
    lineWidth: PropTypes.number,
    start: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
    end: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
  }

  //static defaultProps = {
  //    lineWidth: 1,
  //}

  render() {
    let transform = Utils.getLineTransform(this.props.start, this.props.end)
    return (
      <View
        style={[styles.container, {
          backgroundColor: this.props.color,
          width: transform.distance,
          height: this.props.lineWidth,
          left: this.props.start.x,
          top: this.props.start.y - this.props.lineWidth / 2,
          transform: [{ translateX: transform.translateX },
          { translateY: transform.translateY },
          { rotateZ: transform.rotateRad + 'rad' }]
        }]} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  }
})