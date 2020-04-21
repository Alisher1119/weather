import React, {useState, Component} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  RefreshControl,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Header from './components/Header';
import Content from './components/Content';
import BackgroundImage from './components/BackgroundImage';
import {DataService} from './services/DataService';
const styles = require('./styles/styles');

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default class App extends Component {
  appid = '<your appid>';
  // appid = '';
  uri = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  // options = {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  // }
  dataService = new DataService();

  state = {
    refreshing: false,
    data: {},
    loading: true,
  };

  createAlert = message =>
    Alert.alert(
      message,
      'Check city name entered below!',
      [{text: 'OK', onPress: () => this.dataRequest('Samarkand')}],
      {cancelable: true},
    );

  async dataRequest(cityName) {
    try {
      this.setState({refreshing: false, data: this.state.data, loading: true});
      let response = await fetch(this.uri + cityName + '&appid=' + this.appid);
      let json = await response.json();
      this.setState({
        data: this.dataService.pritifyData(json),
        loading: false,
        refreshing: false,
      });
    } catch {
      error => {
        this.setState({
          data: this.state.data,
          loading: false,
          refreshing: false,
        });
        console.error(error);
      };
    }
  }

  componentDidMount() {
    this.dataRequest('Samarkand');
  }

  onRefresh() {
    this.setState({refreshing: true});
    wait(2000).then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    if (!this.state.loading) {
      if (this.state.data.error) {
        this.createAlert(this.state.data.error);
        return <ActivityIndicator size="large" color="#ffffff" />;
      } else {
        return (
          <View style={style.main}>
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh.bind(this)}
                />
              }>
              <StatusBar
                backgroundColor={styles.variables.transparent}
                hidden={true}
              />
              <BackgroundImage
                condition={this.state.data.current.main}
                time={this.state.data.current.time}
                content={
                  <View style={style.container}>
                    <FlatList
                      ListHeaderComponent={
                        <Header forwardInput={this.dataRequest.bind(this)} />
                      }
                      ListFooterComponent={<Content data={this.state.data} />}
                    />
                  </View>
                }
              />
            </ScrollView>
          </View>
        );
      }
    } else {
      return <ActivityIndicator size="large" color="#ffffff" />;
    }
  }
}

const style = StyleSheet.create(styles.app);
