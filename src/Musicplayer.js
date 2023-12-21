import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Slider from '@react-native-community/slider';
import songs from '../data/data';

const {width, height} = Dimensions.get('window');

const Musicplayer = () => {
  const SongList = (item, index) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
        }}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
        <FlatList
          data={songs}
          renderItem={({item, index}) => SongList(item, index)}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          scrollEventThrottle={16}
        />

        <View>
          <Text style={styles.title}>Song name</Text>
          <Text style={styles.author}>Song autor</Text>
        </View>

        <Slider
          style={{
            width: 300,
            height: 40,
            marginTop: '10%',
            flexDirection: 'row',
          }}
          value={10}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="#FFD369"
          minimumTrackTintColor="#FFD369"
          maximumTrackTintColor="#FFF"
          onSlidingComplete={() => {}}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 300,
          }}>
          <Text style={{color: 'white'}}>0.00</Text>
          <Text style={{color: 'white'}}>3.00</Text>
          {/* <Text style={{color:'white',backgroundColor:'red'}}>{songs[0].name}</Text> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '50%',
            justifyContent: 'space-between',
            marginTop: '7%',
          }}>
          <TouchableOpacity>
            <Ionicons
              name="play-skip-back-outline"
              size={40}
              color="#FFD369"
              style={{marginTop: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="pause-circle-outline" size={60} color="#FFD369" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="play-skip-forward-outline"
              size={40}
              color="#FFD369"
              style={{marginTop: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.IconContainer}>
        <View style={styles.Iconstyles}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="repeat" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="sharealt" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconContainer: {
    borderTopColor: 'white',
    borderTopWidth: 1,
    paddingVertical: 15,
    alignItems: 'center',
    width: width,
  },
  Iconstyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  imageContainer: {
    width: 180,
    height: 180,
    marginBottom: '10%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  title: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18,
  },
  author: {
    color: 'white',
    fontWeight: '200',
    textAlign: 'center',
    fontSize: 16,
  },
});
export default Musicplayer;
