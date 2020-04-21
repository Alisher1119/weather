import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const styles = require('../styles/styles');

const Header = props => {
  const [input, setInput] = useState('');

  const getInput = inputText => {
    setInput(inputText);
  };
  return (
    <View style={style.header}>
      <View style={style.picker}>
        <TextInput
          style={style.input}
          placeholder="Type city name here"
          onChangeText={getInput}
        />
      </View>
      <View style={style.button}>
        <Button
          title="+"
          onPress={() => props.forwardInput(input)}
          color="#d2b48c60"
        />
      </View>
    </View>
  );
};

export default Header;

const style = StyleSheet.create(styles.header);
