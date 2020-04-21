import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Circle from './Circle';

const styles = require('../styles/styles');

const ForecastDetails = props => {
  return (
    <View style={style.container}>
      <View style={style.row}>
        <View style={style.column}>
          <Text style={style.title}>Details</Text>
        </View>
      </View>
      <View style={style.row}>
        <View style={style.column}>
          <View style={style.index_container}>
            <Text style={style.label}>Feels like</Text>
            <View style={style.indexes}>
              <Text style={style.index}>{props.data.feels_like}</Text>
              <Circle />
            </View>
          </View>
          <View style={style.image_container}>
            <Image
              source={require('../assets/details/temp.png')}
              style={style.image}
            />
          </View>
        </View>
        <View style={style.column}>
          <View style={style.index_container}>
            <Text style={style.label}>Clouds</Text>
            <View style={style.indexes}>
              <Text style={style.index}>{props.data.cloud}%</Text>
            </View>
          </View>
          <View style={style.image_container}>
            <Image
              source={require('../assets/details/cloud.png')}
              style={style.image}
            />
          </View>
        </View>
      </View>
      <View style={style.row}>
        <View style={style.column}>
          <View style={style.index_container}>
            <Text style={style.label}>Wind speed</Text>
            <View style={style.indexes}>
              <Text style={style.index}>{props.data.wind}m/s</Text>
            </View>
          </View>
          <View style={style.image_container}>
            <Image
              source={require('../assets/details/wind.png')}
              style={style.image}
            />
          </View>
        </View>
        <View style={style.column}>
          <View style={style.index_container}>
            <Text style={style.label}>Humidity</Text>
            <View style={style.indexes}>
              <Text style={style.index}>{props.data.humidity}%</Text>
            </View>
          </View>
          <View style={style.image_container}>
            <Image
              source={require('../assets/details/humidity.png')}
              style={style.image}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForecastDetails;

const style = StyleSheet.create(styles.details);
