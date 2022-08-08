import React, { useEffect, useState } from 'react';
import TrackPlayer, {
    Capability,
    State,
    usePlaybackState,
    useProgress,
} from 'react-native-track-player';
import { ITrack } from 'src/types/type';
import { useActions } from './useActions';

export const useSound = () => {
    const { changeTrack, changeTrackPosition } = useActions();

    const setUpTrackPlayer = async (tracks: ITrack[]) => {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(tracks);
    };

    const playerState = usePlaybackState();
    const progress = useProgress();
    const isPlaying = playerState === State.Playing;
    const isBuffer = playerState === State.Buffering;

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

    const trackSkip = (position: number) => {
        TrackPlayer.skip(position);
    };

    const trackRewind = (value: number) => {
        TrackPlayer.seekTo(value);
    };

    const getCurrentTrack = async () => {
        return await TrackPlayer.getCurrentTrack();
    };

    const onClickPlay = async () => {
        let position = await TrackPlayer.getCurrentTrack();
        changeTrackPosition(position);

        if (isPlaying) {
            trackPause();
        } else {
            trackPlay();
        }
    };

    TrackPlayer.updateOptions({
        stopWithApp: false,
        capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.PlayFromId,
        ],
        compactCapabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.PlayFromId,
        ],
    });

    return {
        setUpTrackPlayer,
        trackPause,
        trackPlay,
        isPlaying,
        trackSkip,
        trackNext,
        trackPrevious,
        getCurrentTrack,
        onClickPlay,
        progress,
        trackRewind,
    };
};
