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
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Slider from '@react-native-community/slider';
import songs from '../data/data';

const {width, height} = Dimensions.get('window');

const Musicplayer = () => {
  const [songIndex, setsongIndex] = useState(0);
  const ScrollX = useRef(new Animated.Value(0)).current;
  const songslider = useRef(null);

  useEffect(() => {
    ScrollX.addListener(({value}) => {
      // console.log(value,"values");
      // console.log(width,"Dwid");
      // console.log(ScrollX,"SX");
      let indexvalue = Math.round(value / width);
      setsongIndex(indexvalue);
    });

    return () => {
      ScrollX.removeAllListeners();
    };
  }, []);

  const skipNext = () => {
    songslider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };
  const skipBack = () => {
    songslider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };
  const SongList = (item, index) => {
    return (
      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
        }}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
      </Animated.View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maincontainer}>
        <View style={{width: width}}>
          <Animated.FlatList
            ref={songslider}
            data={songs}
            renderItem={({item, index}) => SongList(item, index)}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: ScrollX},
                  },
                },
              ],
              {useNativeDriver: true},
            )}
          />
        </View>

        <View>
          <Text style={styles.title}>{songs[songIndex].name}</Text>
          <Text style={styles.author}>{songs[songIndex].artist}</Text>
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
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '50%',
            justifyContent: 'space-between',
            marginTop: '7%',
          }}>
          <TouchableOpacity onPress={skipBack}>
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
          <TouchableOpacity onPress={skipNext}>
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
    marginBottom: '5%',
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
