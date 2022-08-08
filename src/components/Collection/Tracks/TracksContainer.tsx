import React, { useEffect } from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import { PointIcon } from 'src/components/icons/Collections/Icons/PointIcon';
import { useActions } from 'src/hooks/useActions';
import { useSound } from 'src/hooks/useSound';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { colors } from 'src/theme/config';
import { ITrack } from 'src/types/type';
import styled from 'styled-components/native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

export const TracksContainer: React.FC<ITrack> = React.memo(({ id, name, artist, url, image }) => {
    const { trackPlay, trackSkip, trackPause, isPlaying } = useSound();
    const { changeTrack } = useActions();
    const { tracks, currentTrack } = useTypedSelector((state) => state.trackReducer);

    const onChange = async () => {
        if (currentTrack.id == id) {
            if (isPlaying) {
                trackPause();
            } else {
                trackPlay();
            }
        } else {
            trackSkip(tracks.findIndex((el) => el.id == id));
            changeTrack(id);
            trackPlay();
        }
    };
    const animation = useSharedValue(1);
    const animationStyle = useAnimatedStyle(() => {
        return {
            height: 8,
            width: 8,
            position: 'absolute',
            left: 21,
            top: 21,
            borderRadius: 50,
            backgroundColor: colors.yellow.mustard,
            zIndex: 100,
            transform: [{ scale: isPlaying ? animation.value : 1 }],
        };
    });

    useEffect(() => {
        animation.value = withRepeat(withTiming(2, { duration: 300 }), -1, true);
    }, []);

    return (
        <TracksContainerBlock
            style={{
                backgroundColor: currentTrack.id == id ? colors.silver.opacity : 'transparent',
            }}
            underlayColor={colors.silver.opacity}
            onPress={onChange}>
            <Wrapper>
                <TracksContainerContent>
                    <TracksContainerContentInfo>
                        {/* <TouchableOpacity
                            onPress={() =>
                                (animation.value = withRepeat(
                                    withTiming(2, { duration: 300 }),
                                    -1,
                                    true,
                                ))
                            }>
                            <Text>Play</Text>
                        </TouchableOpacity> */}
                        {/* <TouchableOpacity onPress={() =>}>
                            <Text>Pause</Text>
                        </TouchableOpacity> */}
                        <TracksContainerInfoImage>
                            <View
                                style={{
                                    borderRadius: 5,
                                    overflow: 'hidden',
                                }}>
                                <Image
                                    style={{ height: 50, width: 50, overflow: 'hidden' }}
                                    source={image}
                                />
                                {currentTrack.id == id && <Animated.View style={animationStyle} />}

                                {currentTrack.id == id && <ImageOverlay></ImageOverlay>}
                            </View>
                            <TracksContainerInfoTitle>
                                <TracksContainerInfoTitleName>{name}</TracksContainerInfoTitleName>

                                <TracksContainerInfoTitleArtist>
                                    {artist}
                                </TracksContainerInfoTitleArtist>
                            </TracksContainerInfoTitle>
                        </TracksContainerInfoImage>
                    </TracksContainerContentInfo>
                    <TracksContainerContentPoints>
                        <TouchableHighlight style={{ padding: 3 }}>
                            <PointIcon color={colors.silver.default} height={20} width={20} />
                        </TouchableHighlight>
                    </TracksContainerContentPoints>
                </TracksContainerContent>
            </Wrapper>
        </TracksContainerBlock>
    );
});

const TracksContainerBlock = styled.TouchableHighlight`
    padding-vertical: 5px;
`;

const TracksContainerContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const TracksContainerInfoImage = styled.View`
    flex-direction: row;
    align-items: center;
`;

const TracksContainerInfoTitle = styled.View`
    margin-left: 15px;
`;

const TracksContainerInfoTitleName = styled.Text`
    font-weight: 500;
    font-size: 15px;
    color: ${colors.black.default};
`;

const TracksContainerInfoTitleArtist = styled.Text`
    font-weight: 600;
    font-size: 13px;
    margin-top: 3px;
    color: ${colors.silver.default};
`;

const TracksContainerContentInfo = styled.View``;

const TracksContainerContentPoints = styled.View``;

const ImageOverlay = styled.View`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.black.opacity};
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;
