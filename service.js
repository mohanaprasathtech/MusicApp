import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';
import songs from './data/data';

export async function setupPlayer() {
  console.log('coming');
  issetup = false;
  try {
    await TrackPlayer.getActiveTrackIndex();
    issetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    issetup = true;
  } finally {
    return issetup;
  }
}

export const addTrack = async () => {
  console.log('tracking');
  await TrackPlayer.add(songs);
  // await TrackPlayer.setRepeatMode(RepeatMode.Queue)
};

export async function playbackService() {
  try {
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
      TrackPlayer.play();
    });

    TrackPlayer.addEventListener(Event.RemotePause, () => {
      TrackPlayer.pause();
    });

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
      TrackPlayer.skipToNext();
    });

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
      TrackPlayer.skipToPrevious();
    });

    TrackPlayer.addEventListener(Event.RemoteStop, () => {
      TrackPlayer.destroy();
    });
  } catch (error) {}
}
