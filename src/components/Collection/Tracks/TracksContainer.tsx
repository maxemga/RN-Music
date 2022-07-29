import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { PointIcon } from 'src/components/icons/Collections/Icons/PointIcon';
import { useSound } from 'src/hooks/useSound';
import { colors } from 'src/theme/config';
import { ITrack } from 'src/types/type';
import styled from 'styled-components/native';

export const TracksContainer: React.FC<ITrack> = React.memo(({ id, title, artist, url, image }) => {
    const navigation = useNavigation();
    const { trackPlay } = useSound();

    return (
        <TracksContainerBlock underlayColor={colors.silver.opacity} onPress={trackPlay}>
            <Wrapper>
                <TracksContainerContent>
                    <TracksContainerContentInfo>
                        <TracksContainerInfoImage>
                            <View style={{ borderRadius: 5, overflow: 'hidden' }}>
                                <Image
                                    style={{ height: 50, width: 50, overflow: 'hidden' }}
                                    source={image}
                                />
                            </View>
                            <TracksContainerInfoTitle>
                                <TracksContainerInfoTitleName>{title}</TracksContainerInfoTitleName>
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

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;
