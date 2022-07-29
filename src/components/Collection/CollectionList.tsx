import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ArrowIcon } from 'src/components/Elements/ArrowIcon';
import { AlbomsIcon } from 'src/components/icons/Collections/Icons/AlbomsIcon';
import { colors, config } from 'src/theme/config';
import { HomeIcon } from 'src/components/icons/NavigationIcons/HomeIcon';
import { ArtistsIcon } from 'src/components/icons/Collections/Icons/ArtistsIcon';
import { PlaylistIcon } from 'src/components/icons/Collections/Icons/PlaylistIcon';
import { PodcastIcon } from 'src/components/icons/NavigationIcons/PodcastIcon';
import { ChildIcon } from 'src/components/icons/Collections/Icons/ChildIcon';
import { DownloadIcon } from 'src/components/icons/Collections/Icons/DownloadIcon';
import { useNavigation } from '@react-navigation/native';
import { Screens } from 'src/components/Navigation/NavigationRoutes';

export const CollectionList = () => {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);

    const navigateScreen = (name: string) => {
        navigation.navigate(name);
    };
    return (
        <CollectionListBlock>
            <CollectionContainer
                underlayColor={colors.silver.opacity}
                onPress={() => navigateScreen(Screens.COLLECTION_SCREEN_TRACKS)}>
                <Wrapper>
                    <CollectionContainerInfo>
                        <HomeIcon
                            color={colors.silver.dim}
                            height={config.heightCollectionListIcon}
                            width={config.widthCollectionListIcon}
                        />
                        <CollectionContainerTitle>Tracks</CollectionContainerTitle>
                    </CollectionContainerInfo>
                    <CollectionContainerArrow>
                        <ArrowIcon />
                    </CollectionContainerArrow>
                </Wrapper>
            </CollectionContainer>

            <CollectionContainer
                underlayColor={colors.silver.opacity}
                onPress={() => setOpen(!open)}>
                <Wrapper>
                    <CollectionContainerInfo>
                        <AlbomsIcon
                            color={colors.silver.dim}
                            height={config.heightCollectionListIcon}
                            width={config.widthCollectionListIcon}
                        />
                        <CollectionContainerTitle>Albums</CollectionContainerTitle>
                    </CollectionContainerInfo>
                    <CollectionContainerArrow>
                        <ArrowIcon />
                    </CollectionContainerArrow>
                </Wrapper>
            </CollectionContainer>
            <CollectionContainer
                underlayColor={colors.silver.opacity}
                onPress={() => setOpen(!open)}>
                <Wrapper>
                    <CollectionContainerInfo>
                        <ArtistsIcon
                            color={colors.silver.dim}
                            height={config.heightCollectionListIcon}
                            width={config.widthCollectionListIcon}
                        />
                        <CollectionContainerTitle>Artists</CollectionContainerTitle>
                    </CollectionContainerInfo>
                    <CollectionContainerArrow>
                        <ArrowIcon />
                    </CollectionContainerArrow>
                </Wrapper>
            </CollectionContainer>
            <CollectionContainer
                underlayColor={colors.silver.opacity}
                onPress={() => setOpen(!open)}>
                <Wrapper>
                    <CollectionContainerInfo>
                        <PlaylistIcon
                            color={colors.silver.dim}
                            height={config.heightCollectionListIcon}
                            width={config.widthCollectionListIcon}
                        />
                        <CollectionContainerTitle>Playlists</CollectionContainerTitle>
                    </CollectionContainerInfo>
                    <CollectionContainerArrow>
                        <ArrowIcon />
                    </CollectionContainerArrow>
                </Wrapper>
            </CollectionContainer>
            <CollectionContainer
                underlayColor={colors.silver.opacity}
                onPress={() => setOpen(!open)}>
                <Wrapper>
                    <CollectionContainerInfo>
                        <PodcastIcon
                            color={colors.silver.dim}
                            height={config.heightCollectionListIcon}
                            width={config.widthCollectionListIcon}
                        />
                        <CollectionContainerTitle>Podcasts and books</CollectionContainerTitle>
                    </CollectionContainerInfo>
                    <CollectionContainerArrow>
                        <ArrowIcon />
                    </CollectionContainerArrow>
                </Wrapper>
            </CollectionContainer>

            <CollectionContainer
                underlayColor={colors.silver.opacity}
                onPress={() => setOpen(!open)}>
                <Wrapper>
                    <CollectionContainerInfo>
                        <ChildIcon
                            color={colors.silver.dim}
                            height={config.heightCollectionListIcon}
                            width={config.widthCollectionListIcon}
                        />
                        <CollectionContainerTitle>For kids</CollectionContainerTitle>
                    </CollectionContainerInfo>
                    <CollectionContainerArrow>
                        <ArrowIcon />
                    </CollectionContainerArrow>
                </Wrapper>
            </CollectionContainer>

            <CollectionContainer
                underlayColor={colors.silver.opacity}
                onPress={() => setOpen(!open)}>
                <Wrapper>
                    <CollectionContainerInfo>
                        <DownloadIcon
                            color={colors.silver.dim}
                            height={config.heightCollectionListIcon}
                            width={config.widthCollectionListIcon}
                        />
                        <CollectionContainerTitle>Download tracks</CollectionContainerTitle>
                    </CollectionContainerInfo>
                    <CollectionContainerArrow>
                        <ArrowIcon />
                    </CollectionContainerArrow>
                </Wrapper>
            </CollectionContainer>
        </CollectionListBlock>
    );
};

const CollectionListBlock = styled.View`
    margin-top: 15px;
    width: 100%;
`;

const CollectionContainer = styled.TouchableHighlight`
    flex-direction: row;
    align-items: center;
    padding-vertical: 15px;
    width: 100%;
`;

const CollectionContainerTitle = styled.Text`
    font-size: 16px;
    margin-left: 15px;
    font-weight: 500;
    color: ${colors.black.default};
`;
const CollectionContainerArrow = styled.View``;

const CollectionContainerInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
`;
