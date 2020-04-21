import React from 'react';
import {StyleSheet, View} from 'react-native';

import TodayTemp from './TodayTemp';
import ForcastDetails from './ForecastDetails';
import Forecast from './Forecast';
const styles = require('../styles/styles');

const Content = props => {
  return (
    <View style={style.content}>
      <TodayTemp data={props.data.current} />
      <Forecast data={props.data.daily} />
      <ForcastDetails data={props.data.details} />
    </View>
  );
};

export default Content;

const style = StyleSheet.create(styles.content);
