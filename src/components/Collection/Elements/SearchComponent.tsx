import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    Animated,
    FlatList,
    SectionList,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { CrossIcon } from 'src/components/icons/Collections/Icons/CrossIcon';
import { LupaIcon } from 'src/components/icons/HeaderIcons/LupaIcon';
import { colors } from 'src/theme/config';
import styled from 'styled-components/native';
import { TracksContainer } from '../Tracks/TracksContainer';

export const SearchComponent = () => {
    const [name, setName] = useState<string>('');
    const [isActive, setIsActive] = useState<boolean>(false);
    const navigation = useNavigation();

    const [arr, setArr] = useState([
        { id: 1, title: '99 problems' },
        { id: 2, title: 'Angel' },
        { id: 3, title: 'Больше>' },
        { id: 4, title: 'Young' },
        { id: 5, title: '99 problems' },
        { id: 6, title: '99 problems' },
    ]);

    const tracks = [
        { id: 1, title: '89 problems' },
        { id: 2, title: 'Angel' },
        { id: 3, title: 'Больше>' },
        { id: 4, title: 'Young' },
        { id: 5, title: '99 problems' },
        { id: 6, title: '99 problems' },
    ];

    const artists = [
        { id: 10, title: '88 problems' },
        { id: 11, title: '99 problems' },
        { id: 12, title: 'Angel' },
        { id: 13, title: 'Больше>' },
        { id: 14, title: '99 problems' },
        { id: 15, title: 'Angel' },
        { id: 16, title: 'Больше>' },
        { id: 17, title: '99 problems' },
        { id: 18, title: 'Angel' },
        { id: 19, title: 'Больше>' },
        { id: 20, title: '89 problems' },
        { id: 21, title: 'Angel' },
        { id: 22, title: 'Больше>' },
        { id: 23, title: 'Young' },
        { id: 24, title: '99 problems' },
        { id: 25, title: '99 problems' },
    ];

    useEffect(() => {
        // setNewArr(tracks.filter((el) => el.title.includes(name.toLowerCase())));
        // console.log(newArr);
    }, [name]);

    return (
        <SearchBlock>
            <InputBlock>
                <Wrapper
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <InputBlockContent>
                        <InputSearch>
                            <LupaIcon color={colors.silver.default} height={16} width={16} />
                        </InputSearch>
                        <InputValue
                            onChangeText={setName}
                            onChange={() => setIsActive(true)}
                            value={name}
                            placeholder={'Tracks, album, or artist'}
                            autoFocus={'true'}
                        />
                        {name !== '' && (
                            <InputCross onPress={() => setName('')}>
                                <CrossIcon color={colors.silver.default} height={16} width={16} />
                            </InputCross>
                        )}
                    </InputBlockContent>

                    <InputBlockClose onPress={() => navigation.goBack()}>
                        <InputBlockCloseTitle>Cancel</InputBlockCloseTitle>
                    </InputBlockClose>
                </Wrapper>
            </InputBlock>

            <ListBlock>
                {isActive && newArr.length == 0 ? (
                    <ListEmptyBlock>
                        <ListEmptyIcon>
                            <LupaIcon height={40} width={40} color={colors.silver.default} />
                        </ListEmptyIcon>
                        <ListEmptyTitle>Nothing found</ListEmptyTitle>
                        <ListEmptySubTitle>
                            In your Collection matching your search
                        </ListEmptySubTitle>
                    </ListEmptyBlock>
                ) : (
                    <ListContentBlock>
                        <ListContentTracks>
                            <View>
                                <SectionList
                                    sections={[
                                        { title: `${tracks.length} TRACKS`, data: tracks },
                                        { title: `${artists.length} ARTISTS`, data: artists },
                                    ]}
                                    stickySectionHeadersEnabled={true}
                                    renderItem={({ item }) => {
                                        return <TracksContainer id={item.id} title={item.title} />;
                                    }}
                                    keyExtractor={(item, index) => String(item.id)}
                                    renderSectionHeader={({ section }: { section: any }) => {
                                        return (
                                            <ListContentCount>
                                                <Wrapper>
                                                    <ListContentCountTitle>
                                                        {section.title}
                                                    </ListContentCountTitle>
                                                </Wrapper>
                                            </ListContentCount>
                                        );
                                    }}
                                />
                            </View>
                        </ListContentTracks>
                    </ListContentBlock>
                )}
            </ListBlock>
        </SearchBlock>
    );
};

const SearchBlock = styled.View``;

const ListBlock = styled.View`
    width: 100%;
    height: 100%;
`;

const ListContentBlock = styled.View`
    margin-bottom: 197px;
`;

const ListEmptyBlock = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: -80px;
`;

const ListContentTracks = styled.View`
    background-color: ${colors.white.default};
`;

const ListContentCount = styled.View`
    background-color: ${colors.white.default};
    padding-vertical: 10px;
`;

const ListContentCountTitle = styled.Text`
    color: ${colors.silver.default};
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 13px;
`;

const ListEmptyIcon = styled.View`
    margin-bottom: 30px;
`;

const ListEmptyTitle = styled.Text`
    color: ${colors.black.default};
    font-weight: 500;
    font-size: 16px;
`;

const ListEmptySubTitle = styled.Text`
    color: ${colors.black.default};
    font-weight: 500;
    margin-top: 5px;
    font-size: 14px;
`;

const InputBlock = styled.SafeAreaView`
    z-index: 101;
    background-color: white;
`;
const InputBlockContent = styled.View`
    width: 80%;
    padding-bottom: 10px;
    padding-top: 10px;
    position: relative;
`;

const InputSearch = styled.View`
    position: absolute;
    top: 18px;
    left: 10px;
    z-index: 100;
`;

const InputCross = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    right: 10px;
    z-index: 100;
`;
const InputBlockClose = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-end;
    text-align: center;
    width: 20%;
`;

const InputBlockCloseTitle = styled.Text`
    color: #2c57d9;
    font-weight: 500;
    font-size: 16px;
`;

const InputValue = styled.TextInput`
    background-color: ${colors.silver.bright};

    padding: 9px 35px;
    border-radius: 30px;
    font-weight: 500;
`;
const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;
