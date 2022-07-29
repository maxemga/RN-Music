import React, { useState } from 'react';
import TrackPlayer, { Capability, State, usePlaybackState } from 'react-native-track-player';
import { ITrack } from 'src/types/type';

export const useSound = () => {
    const setUpTrackPlayer = async (tracks: ITrack[]) => {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(tracks);
    };

    const playerState = usePlaybackState();
    const isPlaying = playerState === State.Playing;

    const trackPlay = () => {
        TrackPlayer.play();
    };

    const trackPause = () => {
        TrackPlayer.pause();
    };

    const trackNext = () => {
        TrackPlayer.skipToNext();
    };

    const trackPrevious = () => {
        TrackPlayer.skipToPrevious();
    };

    const trackChange = () => {};

    // useEffect(() => {
    //     toggle(playBackState);
    // }, [trackPlay, trackPause]);

    // const toggle = async (playBackState) => {
    //     const currentTrack = await TrackPlayer.getCurrentTrack();
    //     if (currentTrack != null) {
    //         if (playBackState == State.Paused) {
    //             setIsPlaying(false);
    //         } else {
    //             setIsPlaying(true);
    //         }
    //     }
    // };

    TrackPlayer.updateOptions({
        stopWithApp: false,
        capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
        ],
        compactCapabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
        ],
    });

    return {
        setUpTrackPlayer,
        trackPause,
        trackPlay,
        isPlaying,
        trackChange,
        trackNext,
        trackPrevious,
    };
};
