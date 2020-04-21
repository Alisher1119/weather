import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Circle from './Circle';

const styles = require('../styles/styles');

const TodayTemp = props => {
  return (
    <View style={style.today_temp}>
      <View style={style.temperature}>
        <View>
          <Text style={style.temp_indicator}>{props.data.temp}</Text>
          <Text style={style.sup}>{props.data.main}</Text>
        </View>
        <Circle />
        <Text style={style.sup}>C</Text>
      </View>
      <View style={style.current_city}>
        <Text style={style.city} color="white">
          {props.data.city}
        </Text>
      </View>
    </View>
  );
};

export default TodayTemp;

const style = StyleSheet.create(styles.today_forecast);
