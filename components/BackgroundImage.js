import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

const styles = require('../styles/styles');

const BackgroundImage = props => {
  let res;
  const condition = {
    Drizzle: 1,
    Rain: 1,
    Thunderstorm: 1,
    Snow: 2,
    Mist: 3,
    Smoke: 3,
    Haze: 3,
    Dust: 3,
    Fog: 3,
    Sand: 3,
    Ash: 3,
    Squall: 3,
    Tornado: 3,
    Clear: 4,
    Clouds: 5,
  };
  if (props.time) {
    res = (
      <ImageBackground
        source={require('../assets/background/night.jpg')}
        style={style.image}>
        {props.content}
      </ImageBackground>
    );
  } else {
    switch (condition[props.condition]) {
      case 1:
        res = (
          <ImageBackground
            source={require('../assets/background/rainy.jpg')}
            style={style.image}>
            {props.content}
          </ImageBackground>
        );
        break;
      case 2:
        res = (
          <ImageBackground
            source={require('../assets/background/snow.jpg')}
            style={style.image}>
            {props.content}
          </ImageBackground>
        );
        break;
      case 3:
        res = (
          <ImageBackground
            source={require('../assets/background/foggy.jpg')}
            style={style.image}>
            {props.content}
          </ImageBackground>
        );
        break;
      case 4:
        res = (
          <ImageBackground
            source={require('../assets/background/sunny.jpg')}
            style={style.image}>
            {props.content}
          </ImageBackground>
        );
        break;
      case 5:
        res = (
          <ImageBackground
            source={require('../assets/background/cloudy.jpg')}
            style={style.image}>
            {props.content}
          </ImageBackground>
        );
        break;
      default:
        res = (
          <ImageBackground
            source={require('../assets/background/sunny.jpg')}
            style={style.image}>
            {props.content}
          </ImageBackground>
        );
        break;
    }
  }
  return res;
};

export default BackgroundImage;

const style = StyleSheet.create(styles.app);
