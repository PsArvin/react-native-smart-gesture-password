import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Utils from './Utils';

export default class Arrow extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._borderWidth = props.width / 3 * 2
    this._transform = Utils.getArrowTransform(props.start, props.end, props.width, this._borderWidth, props.vertexDeg)
  }

  static propTypes = {
    vertexDeg: PropTypes.number,
    start: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
    end: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
    width: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }

  static defaultProps = {
    vertexDeg: 90,
  }

  render() {
    return (
      <View
        style={[styles.container, {
          borderWidth: this._borderWidth,
          borderLeftColor: this.props.color,
          borderRightColor: 'transparent',
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
          left: this._transform.origin.x,
          top: this._transform.origin.y,
          transform: [{ translateX: this._transform.translateX },
          { translateY: this._transform.translateY },
          { rotateZ: this._transform.rotateRad + 'rad' }]
        }]} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  }
});