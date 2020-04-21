import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Circle from './Circle';
import Icon from './Icon';

const styles = require('../styles/styles');

const Item = ({props}) => {
  return (
    <View style={style.item}>
      <View style={style.time}>
        <Icon name={props.icon} />
        <Text style={style.title}>
          {props.week_day} - {props.main}
        </Text>
      </View>
      <View style={style.degree}>
        <Text style={style.title}>{props.day}</Text>
        <Circle />
        <Text style={style.title}>/{props.night}</Text>
        <Circle />
      </View>
    </View>
  );
};

const Forecast = props => {
  return (
    <View style={style.container}>
      <FlatList
        data={props.data.days}
        renderItem={({item}) => <Item props={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Forecast;

const style = StyleSheet.create(styles.forecast);
