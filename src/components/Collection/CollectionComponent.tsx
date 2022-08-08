import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { colors } from 'src/theme/config';
import styled from 'styled-components/native';
import { CollectionList } from 'src/components/Collection/CollectionList';
import TrackPlayer from 'react-native-track-player';
import { useSound } from 'src/hooks/useSound';
import { useTypedSelector } from 'src/hooks/useTypedSelector';

export const CollectionComponent = () => {
    const { tracks } = useTypedSelector((state) => state.trackReducer);

    const { setUpTrackPlayer, getCurrentTrack, isPlaying } = useSound();

    async function registerMusic() {
        setUpTrackPlayer(tracks);
        return function () {
            TrackPlayer.destroy();
        };
    }

    useEffect(() => {
        registerMusic();
    }, []);
    return (
        <CollectionBlock>
            <CollectionContent>
                <Wrapper>
                    <FavoriteTracks>
                        <Image
                            style={{ height: 90, width: 90 }}
                            source={require('src/components/icons/Collections/Alboms/Untitled.png')}
                        />
                        <FavoriteTracksText>
                            <FavoriteTracksTitle>Favorite tracks</FavoriteTracksTitle>
                            <FavoriteTracksCount>248 tracks</FavoriteTracksCount>
                        </FavoriteTracksText>
                    </FavoriteTracks>
                </Wrapper>
                <CollectionList />
            </CollectionContent>
        </CollectionBlock>
    );
};

const CollectionBlock = styled.ScrollView``;

const CollectionContent = styled.ScrollView``;

const FavoriteTracks = styled.View`
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
`;

const FavoriteTracksText = styled.View`
    margin-left: 15px;
`;

const FavoriteTracksTitle = styled.Text`
    font-size: 16px;
    color: ${colors.black.default}
    font-weight: 500;
    margin-bottom: 3px;
`;
const FavoriteTracksCount = styled.Text`
    color: ${colors.silver.default};
    font-size: 14px;
    font-weight: 500;
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;

// <Image
//     style={{ height: 200, width: 200 }}
//     source={require('src/components/icons/Collections/Alboms/Untitled.png')}
// />
