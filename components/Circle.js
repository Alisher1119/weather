import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = require('../styles/styles');

const Circle = props => {
  return <Text style={style.content}>o</Text>;
};

export default Circle;

const style = StyleSheet.create(styles.circle);
