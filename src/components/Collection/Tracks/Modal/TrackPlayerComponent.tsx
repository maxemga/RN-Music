import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, Text, View } from 'react-native';
import { FlatList, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowIcon } from 'src/components/Elements/ArrowIcon';
import { ArrowPlayIcon } from 'src/components/icons/Collections/Icons/ArrowPlayIcon';
import { DeviceIcon } from 'src/components/icons/Collections/Icons/DeviceIcon';
import { ListIcon } from 'src/components/icons/Collections/Icons/ListIcon';
import { PlayIcon } from 'src/components/icons/Collections/Icons/PlayIcon';
import { PointIcon } from 'src/components/icons/Collections/Icons/PointIcon';
import { RepeatIcon } from 'src/components/icons/Collections/Icons/RepeatIcon';
import { ShareIcon } from 'src/components/icons/Collections/Icons/ShareIcon';
import { ShuffleIcon } from 'src/components/icons/Collections/Icons/ShuffleIcon';
import { TextIcon } from 'src/components/icons/Collections/Icons/TextIcon';
import { TimerIcon } from 'src/components/icons/Collections/Icons/TimerIcon';
import { SettingsIcon } from 'src/components/icons/HeaderIcons/SettingsIcon';
import { CollectionIcon } from 'src/components/icons/NavigationIcons/CollectionIcon';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { colors } from 'src/theme/config';
import { Slider } from '@miblanchard/react-native-slider';
import styled from 'styled-components/native';
import Share from 'react-native-share';
import { useSound } from 'src/hooks/useSound';
import { PauseIcon } from 'src/components/icons/Collections/Icons/PauseIcon';
import { useActions } from 'src/hooks/useActions';

export const TrackPlayerComponent = () => {
    const navigaion = useNavigation();
    const { tracks, currentTrack } = useTypedSelector((state) => state.trackReducer);
    const { isPlaying, onClickPlay, progress, trackRewind, getCurrentTrack } = useSound();

    const { width } = Dimensions.get('window');
    const ITEM_SIZE = width * 0.7;
    const SPACING = 15;
    const FULLSIZE = ITEM_SIZE * SPACING * 2;
    const BAR_ICONS_SIZE = 22;
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const ref = useRef<FlatList>(null);
    const [index, setIndex] = useState<number>(0);
    const { changeTrackPosition } = useActions();
    const { trackSkip } = useSound();

    const shareTrack = () => {
        const shareOptions = {
            title: 'Share via',
            message: 'Track name: name \n Author name: name',
            url: 'some share url',
            social: Share.Social.TELEGRAM,
        };
        Share.open(shareOptions)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    };

    useEffect(() => {
        ref.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5,
        });

        trackSkip(tracks.findIndex((el) => el.id == tracks[index].id));
        changeTrackPosition(index);
    }, [index]);

    const nextTrack = () => {
        setIndex(index + 1);
    };

    const prevTrack = () => {
        setIndex(index - 1);
    };

    return (
        <TrackPlayerBlock>
            <TrackPlayerHeader>
                <Wrapper
                    style={{
                        width: '95%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        aligntItems: 'center',
                    }}>
                    <TrackPlayerHeaderArrow>
                        <TouchableOpacity onPress={() => navigaion.goBack()}>
                            <ArrowIcon height={25} width={25} color={'#C0BCBB'} />
                        </TouchableOpacity>
                    </TrackPlayerHeaderArrow>
                    <TrackPlayerHeaderDevice>
                        <Text style={{ color: colors.silver.beige, fontWeight: '500' }}>
                            Now playing
                        </Text>
                        <Text
                            style={{
                                color: colors.white.default,
                                fontWeight: '500',
                                marginTop: 3,
                            }}>
                            Collection
                        </Text>
                    </TrackPlayerHeaderDevice>
                    <TrackPlayerHeaderMenu>
                        <TouchableOpacity style={{ marginRight: 20 }}>
                            <DeviceIcon height={21} width={21} color={colors.silver.beige} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ListIcon height={21} width={21} color={colors.silver.beige} />
                        </TouchableOpacity>
                    </TrackPlayerHeaderMenu>
                </Wrapper>
            </TrackPlayerHeader>
            <TrackPlayerImage>
                <Animated.FlatList
                    data={tracks}
                    // onScrollEndDrag={() => {
                    //     setValue(1);
                    //     if (value == 1) {
                    //         setValue(2);
                    //     } else {
                    //         setValue(1);
                    //     }
                    // }}
                    // onScrollEndDrag={() => {
                    //     setValue(1);
                    //     if (value == 1) {
                    //         setValue(2);
                    //     } else {
                    //         setValue(1);
                    //     }
                    // }}
                    ref={ref}
                    initialScrollIndex={index}
                    style={{ height: '50%' }}
                    keyExtractor={(el) => el.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: 'center' }}
                    decelerationRate={0}
                    bounces={false}
                    // snapToAlignment={'center'}
                    // snapToInterval={ITEM_SIZE}
                    // scrollEventThrottle={16}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: true,
                    })}
                    renderItem={({ item, index }) => {
                        return (
                            <Animated.View
                                style={{
                                    borderRadius: 8,
                                    height: ITEM_SIZE,
                                    width: ITEM_SIZE,
                                    marginHorizontal: SPACING,
                                    // transform: [{ scale: translateY }],
                                    overflow: 'hidden',
                                }}>
                                <Animated.Image
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        resizeMode: 'cover',
                                    }}
                                    source={item.image}
                                />
                            </Animated.View>
                        );
                    }}
                />
            </TrackPlayerImage>
            <TrackPlayerControl>
                <Wrapper style={{ width: '85%', flexDirection: 'row' }}>
                    <TrackPlayControlTitle>
                        <Text
                            numberOfLines={1}
                            style={{
                                color: colors.white.default,
                                fontWeight: '600',
                                fontSize: 18,
                            }}>
                            {currentTrack.name}
                        </Text>
                        <Text style={{ color: colors.silver.beige, marginTop: 4 }}>
                            {currentTrack.artist}
                        </Text>
                    </TrackPlayControlTitle>
                    <TrackPlayControlButtons>
                        <TouchableOpacity style={{ marginRight: 20 }} onPress={shareTrack}>
                            <ShareIcon height={20} width={20} color={colors.silver.beige} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <PointIcon height={20} width={20} color={colors.silver.beige} />
                        </TouchableOpacity>
                    </TrackPlayControlButtons>
                </Wrapper>
                <Wrapper style={{ width: '85%' }}>
                    <TrackPlayerControllSlider>
                        <Slider
                            style={{ width: '100%' }}
                            minimumValue={0}
                            maximumValue={progress.duration}
                            thumbStyle={{
                                height: 10,
                                width: 10,
                            }}
                            value={progress.position}
                            minimumTrackTintColor={colors.white.default}
                            maximumTrackTintColor={colors.silver.beige}
                            thumbTintColor={colors.white.default}
                            onValueChange={async (value) => {
                                trackRewind(Number(value));
                            }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TrackPlayerControllSliderText>
                                {new Date(progress.position * 1000).toISOString().substr(14, 5)}
                            </TrackPlayerControllSliderText>
                            <TrackPlayerControllSliderText>
                                {new Date((progress.duration - progress.position) * 1000)
                                    .toISOString()
                                    .substr(14, 5)}
                            </TrackPlayerControllSliderText>
                        </View>
                    </TrackPlayerControllSlider>
                    <TrackPlayerControllNav>
                        <TrackPlayerControllNavLike>
                            <TouchableHighlight>
                                <CollectionIcon
                                    height={20}
                                    width={20}
                                    color={colors.silver.beige}
                                />
                            </TouchableHighlight>
                        </TrackPlayerControllNavLike>
                        <TrackPlayerControllNavPlay>
                            <TouchableHighlight underlayColor={'none'} onPress={prevTrack}>
                                <ArrowPlayIcon
                                    height={23}
                                    width={23}
                                    color={colors.white.default}
                                />
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={onClickPlay}
                                underlayColor={'none'}
                                style={{
                                    backgroundColor: colors.white.default,
                                    padding: 20,
                                    borderRadius: 50,
                                    marginHorizontal: 20,
                                }}>
                                {isPlaying ? (
                                    <PauseIcon height={23} width={23} color={'#807a77'} />
                                ) : (
                                    <PlayIcon height={23} width={23} color={'#807a77'} />
                                )}
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'none'} onPress={nextTrack}>
                                <ArrowPlayIcon
                                    height={23}
                                    width={23}
                                    color={colors.white.default}
                                />
                            </TouchableHighlight>
                        </TrackPlayerControllNavPlay>
                        <TrackPlayerControllNavLike>
                            <TouchableHighlight>
                                <CollectionIcon
                                    height={20}
                                    width={20}
                                    color={colors.silver.beige}
                                />
                            </TouchableHighlight>
                        </TrackPlayerControllNavLike>
                    </TrackPlayerControllNav>
                    <TrackPlayerControllBar>
                        <TrackPlayerControllBarItem>
                            <RepeatIcon
                                height={BAR_ICONS_SIZE}
                                width={BAR_ICONS_SIZE}
                                color={colors.silver.beige}
                            />
                        </TrackPlayerControllBarItem>
                        <TrackPlayerControllBarItem>
                            <SettingsIcon
                                height={BAR_ICONS_SIZE}
                                width={BAR_ICONS_SIZE}
                                color={colors.silver.beige}
                            />
                        </TrackPlayerControllBarItem>
                        <TrackPlayerControllBarItem>
                            <TextIcon
                                height={BAR_ICONS_SIZE}
                                width={BAR_ICONS_SIZE}
                                color={colors.silver.beige}
                            />
                        </TrackPlayerControllBarItem>
                        <TrackPlayerControllBarItem>
                            <TimerIcon
                                height={BAR_ICONS_SIZE}
                                width={BAR_ICONS_SIZE}
                                color={colors.silver.beige}
                            />
                        </TrackPlayerControllBarItem>
                        <TrackPlayerControllBarItem>
                            <ShuffleIcon
                                height={BAR_ICONS_SIZE}
                                width={BAR_ICONS_SIZE}
                                color={colors.silver.beige}
                            />
                        </TrackPlayerControllBarItem>
                    </TrackPlayerControllBar>
                </Wrapper>
            </TrackPlayerControl>
        </TrackPlayerBlock>
    );
};

const TrackPlayerBlock = styled.SafeAreaView`
    justify-content: space-between;
    height: 100%;
`;

const TrackPlayerHeader = styled.View`
    margin-top: 10px;
`;

const TrackPlayerHeaderArrow = styled.View`
    position: absolute;
    left: 0;
    top: 5px;
`;

const TrackPlayerHeaderDevice = styled.View`
    align-items: center;
`;

const TrackPlayerHeaderMenu = styled.View`
    flex-direction: row;
    position: absolute;
    right: 0;
    top: 7px;
`;

const TrackPlayControlTitle = styled.View`
    margin-bottom: 15px;
`;

const TrackPlayControlButtons = styled.View`
    position: absolute;
    right: 0;
    top: 0;
    flex-direction: row;
    background-color: #807a77;
    padding-left: 10px;
    padding-vertical: 10px;
`;

const TrackPlayerImage = styled.View``;

const TrackPlayerControl = styled.View``;

const TrackPlayerControllNav = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 15px;
`;

const TrackPlayerControllNavPlay = styled.View`
    flex-direction: row;

    align-items: center;
`;

const TrackPlayerControllNavLike = styled.View``;

const TrackPlayerControllBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 50px;
`;

const TrackPlayerControllBarItem = styled.TouchableOpacity``;

const TrackPlayerControllSlider = styled.View`
    margin-bottom: 20px;
`;

const TrackPlayerControllSliderText = styled.Text`
font-weight: 500;
color: ${colors.silver.beige}
font-size: 12px`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;
