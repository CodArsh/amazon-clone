import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const Test = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: 19.08833217513456,
          longitude: 72.88893271466706,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
