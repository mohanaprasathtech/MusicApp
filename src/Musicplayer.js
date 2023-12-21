import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Slider from '@react-native-community/slider';

const Musicplayer = () => {
  return (
    <View style={styles.container}>
      <Text>Musicplayer</Text>
      <AntDesign name="stepforward" size={20} />
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="red"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Musicplayer;
