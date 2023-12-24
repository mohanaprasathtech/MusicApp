import {Track} from 'react-native-track-player';
const songs: Track[] = [
  {
    id: 1,
    name: 'BadAss',
    image: require('../data/badass.jpeg'),
    artist: 'Anirudh Ravichander',
    url: require('../data/songs/Badass.mp3'),
  },
  {
    id: 2,
    name: 'Bloody Sweet',
    image: require('../data/bloody.jpeg'),
    artist: 'Anirudh Ravichander',
    url: require('../data/songs/Bloody.mp3'),
  },
  {
    id: 3,
    name: 'Na Ready',
    image: require('../data/ready.jpeg'),
    artist: 'Vijay',
    url: require('../data/songs/Ready.mp3'),
  },
];
export default songs;
