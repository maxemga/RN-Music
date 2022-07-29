import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { LupaIcon } from 'src/components/icons/HeaderIcons/LupaIcon';
import { colors } from 'src/theme/config';
import styled from 'styled-components/native';
import { TracksContainer } from './TracksContainer';
import TrackPlayer, { State } from 'react-native-track-player';
import { Text, TouchableOpacity } from 'react-native';
import { useSound } from 'src/hooks/useSound';

export const TracksComponent = () => {
    const [value, setValue] = useState<string>('');
    const { setUpTrackPlayer, trackPause, trackPlay, trackNext, trackPrevious } = useSound();
    const navigation = useNavigation();

    const tracks = [
        {
            id: 1,
            url: require('src/components/theWeekend.mp3'),
            image: require('src/components/icons/Collections/Tracks/weekend.jpeg'),
            title: 'Save Your Tears',
            artist: 'The Weekend',
        },
        {
            id: 2,
            url: require('src/components/problems.mp3'),
            image: require('src/components/icons/Collections/Tracks/problems.jpeg'),
            title: '99 problems',
            artist: 'Kizaru',
        },
        {
            id: 3,
            url: require('src/components/smuzi.mp3'),
            image: require('src/components/icons/Collections/Tracks/smuzi.jpeg'),
            title: 'Смузи',
            artist: 'The Limba',
        },
    ];

    useEffect(async () => {
        setUpTrackPlayer(tracks);

        return function () {
            TrackPlayer.destroy();
        };
    }, []);

    return (
        <TracksBlock contentOffset={{ y: 40 }}>
            <TracksBlockContent>
                <Wrapper>
                    <TouchableOpacity onPress={trackPause}>
                        <Text>PAUSE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={trackNext}>
                        <Text>NEXT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={trackPrevious}>
                        <Text>PREV</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                        <Text>NEXT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
                        <Text>PREVIOUS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => TrackPlayer.seekTo(20)}>
                        <Text>SKIP 20 sec</Text>
                    </TouchableOpacity> */}

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
                    {tracks.map((el) => {
                        return <TracksContainer {...el} key={Math.random()} />;
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
