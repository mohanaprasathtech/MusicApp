import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Musicplayer from './src/Musicplayer';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={"light-content"}/>
      <Musicplayer />
    </View>
  );
}
