import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { LupaIcon } from 'src/components/icons/HeaderIcons/LupaIcon';
import { colors } from 'src/theme/config';
import styled from 'styled-components/native';
import { TracksContainer } from './TracksContainer';
import TrackPlayer, { useProgress, Capability } from 'react-native-track-player';
import { Text, TouchableOpacity, View } from 'react-native';

export const TracksComponent = () => {
    const [value, setValue] = useState<string>('');
    const navigation = useNavigation();

    const setUpTrackPlayer = async () => {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(tracks);
    };

    const tracks = [
        {
            id: 1,
            url: require('src/components/theWeekend.mp3'),
            title: 'Save Your Tears',
        },
        {
            id: 2,
            url: require('src/components/problems.mp3'),
            title: '99 problems',
        },
    ];

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

    useEffect(() => {
        setUpTrackPlayer();

        return () => TrackPlayer.destroy();
    }, []);

    const arr = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ];

    return (
        <TracksBlock contentOffset={{ y: 40 }}>
            <TracksBlockContent>
                <Wrapper>
                    <TouchableOpacity onPress={() => TrackPlayer.play()}>
                        <Text>PLAY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => TrackPlayer.pause()}>
                        <Text>PAUSE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                        <Text>NEXT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
                        <Text>PREVIOUS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => TrackPlayer.seekTo(20)}>
                        <Text>SKIP 20 sec</Text>
                    </TouchableOpacity>

                    <TracksInputBlock onPress={() => navigation.navigate('screen')}>
                        <TracksInputSearch>
                            <LupaIcon
                                pointerEvents="none"
                                color={colors.silver.default}
                                height={16}
                                width={16}></LupaIcon>
                        </TracksInputSearch>
                        <TracksInputValue
                            pointerEvents="none"
                            onChangeText={setValue}
                            value={value}
                            placeholder={'Tracks, album, or artist'}
                        />
                    </TracksInputBlock>
                </Wrapper>
                <TracksContainers>
                    {arr.map((el) => {
                        return <TracksContainer key={Math.random()} />;
                    })}
                </TracksContainers>
            </TracksBlockContent>
        </TracksBlock>
    );
};

const TracksBlock = styled.ScrollView`
    margin-top: 15px;
`;

const TracksBlockContent = styled.View``;

const TracksInputBlock = styled.TouchableOpacity`
    position: relative;
`;

const TracksInputSearch = styled.View`
    position: absolute;
    top: 9px;
    left: 10px;
    z-index: 100;
`;

const TracksInputValue = styled.TextInput`
    background-color: ${colors.silver.bright};

    padding: 9px 35px;
    border-radius: 30px;
    font-weight: 500;
`;

const TracksContainers = styled.View`
    margin-top: 10px;
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;
