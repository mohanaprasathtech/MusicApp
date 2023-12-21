import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Musicplayer = () => {
  return (
    <View style={styles.container}>
      <Text>Musicplayer</Text>
      <AntDesign name="stepforward" size={280}/>
    </View>
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
});
export default Musicplayer;
