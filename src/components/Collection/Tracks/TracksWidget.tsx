import { Slider } from '@miblanchard/react-native-slider';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { PauseIcon } from 'src/components/icons/Collections/Icons/PauseIcon';
import { PlayIcon } from 'src/components/icons/Collections/Icons/PlayIcon';
import { CollectionIcon } from 'src/components/icons/NavigationIcons/CollectionIcon';
import { Screens } from 'src/components/Navigation/NavigationRoutes';
import { useSound } from 'src/hooks/useSound';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { colors } from 'src/theme/config';
import styled from 'styled-components/native';

export const TracksWidget = () => {
    const { currentTrack } = useTypedSelector((state) => state.trackReducer);
    const { isPlaying, onClickPlay, progress, trackRewind } = useSound();

    const navigation = useNavigation();
    return (
        <>
            <Slider
                minimumValue={0}
                maximumValue={progress.duration}
                thumbStyle={{
                    height: 10,
                    width: 10,
                }}
                containerStyle={{ height: 1 }}
                renderThumbComponent={() => <View style={{ height: 0, width: 0 }}></View>}
                value={progress.position}
                minimumTrackTintColor={colors.yellow.mustard}
                maximumTrackTintColor={colors.silver.beige}
                thumbTintColor={colors.white.default}
                disabled={true}
            />

            <TracksWidgetBlock
                underlayColor={'none'}
                onPress={() => navigation.navigate(Screens.TRACKS_PLAYER_MODAL)}>
                <Wrapper>
                    <TracksWidgetContent>
                        <TracksWidgetInfo>
                            <TracksWidgetInfoIcon>
                                <CollectionIcon
                                    height={20}
                                    width={20}
                                    color={colors.black.default}
                                />
                            </TracksWidgetInfoIcon>
                            <TracksWidgetInfoText>
                                <TracksWidgetInfoTextTitle>
                                    {currentTrack.name}
                                </TracksWidgetInfoTextTitle>
                                <TracksWidgetInfoTextArtist>
                                    {currentTrack.artist}
                                </TracksWidgetInfoTextArtist>
                            </TracksWidgetInfoText>
                        </TracksWidgetInfo>
                        <TracksWidgetIcons>
                            <TrackWidgetIconsPlay underlayColor={'none'} onPress={onClickPlay}>
                                {isPlaying ? (
                                    <PauseIcon
                                        height={17}
                                        width={17}
                                        color={colors.black.default}
                                    />
                                ) : (
                                    <PlayIcon height={17} width={17} color={colors.black.default} />
                                )}
                            </TrackWidgetIconsPlay>
                        </TracksWidgetIcons>
                    </TracksWidgetContent>
                </Wrapper>
            </TracksWidgetBlock>
        </>
    );
};

const TracksWidgetBlock = styled.TouchableHighlight`
    padding-vertical: 7px;

    width: 100%;
    background-color: ${colors.white.default};
`;

const TracksWidgetContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const TracksWidgetInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

const TracksWidgetIcons = styled.View``;

const TracksWidgetInfoIcon = styled.View``;

const TracksWidgetInfoText = styled.View`
    margin-left: 15px;
`;

const TracksWidgetInfoTextTitle = styled.Text`
    font-weight: 500;
    color: ${colors.black.default};
`;

const TracksWidgetInfoTextArtist = styled.Text`
    font-weight: 600;
    color: ${colors.silver.default};
    font-size: 13px;
`;

const TrackWidgetIconsPlay = styled.TouchableHighlight`
    padding: 3px;
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;
