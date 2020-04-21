import React from 'react';
import {StyleSheet, Image} from 'react-native';

const styles = require('../styles/styles');

const Icon = props => {
  let res;
  if (props.name === '01d') {
    res = (
      <Image source={require('../assets/icons/01d.png')} style={style.icon} />
    );
  } else if (props.name === '01n') {
    res = (
      <Image source={require('../assets/icons/01n.png')} style={style.icon} />
    );
  } else if (props.name === '02d') {
    res = (
      <Image source={require('../assets/icons/02d.png')} style={style.icon} />
    );
  } else if (props.name === '02n') {
    res = (
      <Image source={require('../assets/icons/02n.png')} style={style.icon} />
    );
  } else if (props.name === '03d') {
    res = (
      <Image source={require('../assets/icons/03d.png')} style={style.icon} />
    );
  } else if (props.name === '03n') {
    res = (
      <Image source={require('../assets/icons/03n.png')} style={style.icon} />
    );
  } else if (props.name === '04d') {
    res = (
      <Image source={require('../assets/icons/04d.png')} style={style.icon} />
    );
  } else if (props.name === '04n') {
    res = (
      <Image source={require('../assets/icons/04n.png')} style={style.icon} />
    );
  } else if (props.name === '09d') {
    res = (
      <Image source={require('../assets/icons/09d.png')} style={style.icon} />
    );
  } else if (props.name === '09n') {
    res = (
      <Image source={require('../assets/icons/09n.png')} style={style.icon} />
    );
  } else if (props.name === '10d') {
    res = (
      <Image source={require('../assets/icons/10d.png')} style={style.icon} />
    );
  } else if (props.name === '10n') {
    res = (
      <Image source={require('../assets/icons/10n.png')} style={style.icon} />
    );
  } else if (props.name === '11d') {
    res = (
      <Image source={require('../assets/icons/11d.png')} style={style.icon} />
    );
  } else if (props.name === '11n') {
    res = (
      <Image source={require('../assets/icons/11n.png')} style={style.icon} />
    );
  } else if (props.name === '13d') {
    res = (
      <Image source={require('../assets/icons/13d.png')} style={style.icon} />
    );
  } else if (props.name === '13n') {
    res = (
      <Image source={require('../assets/icons/13n.png')} style={style.icon} />
    );
  } else if (props.name === '50d') {
    res = (
      <Image source={require('../assets/icons/50d.png')} style={style.icon} />
    );
  } else if (props.name === '50n') {
    res = (
      <Image source={require('../assets/icons/50n.png')} style={style.icon} />
    );
  }
  return res;
};

export default Icon;

const style = StyleSheet.create(styles.icon);
