import {Track} from 'react-native-track-player';
const songs: Track[] = [
  {
    id: 1,
    title: 'BadAss',
    artwork: require('../data/badass.jpeg'),
    artist: 'Anirudh Ravichander',
    url: require('../data/songs/Badass.mp3'),
  },
  {
    id: 2,
    title: 'Bloody Sweet',
    artwork: require('../data/bloody.jpeg'),
    artist: 'Anirudh Ravichander',
    url: require('../data/songs/Bloody.mp3'),
  },
  {
    id: 3,
    title: 'Na Ready',
    artwork: require('../data/ready.jpeg'),
    artist: 'Vijay',
    url: require('../data/songs/Ready.mp3'),
  },
];
export default songs;
