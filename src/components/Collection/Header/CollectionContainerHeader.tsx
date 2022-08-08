import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Animated, TouchableHighlight } from 'react-native';
import { ArrowIcon } from 'src/components/Elements/ArrowIcon';
import { BurgerIcon } from 'src/components/icons/Collections/Icons/BurgerIcon';
import { DownloadIcon } from 'src/components/icons/Collections/Icons/DownloadIcon';
import { PauseIcon } from 'src/components/icons/Collections/Icons/PauseIcon';
import { PlayIcon } from 'src/components/icons/Collections/Icons/PlayIcon';
import { useSound } from 'src/hooks/useSound';
import { colors, config } from 'src/theme/config';
import styled from 'styled-components/native';

export const CollectionContainerHeader = () => {
    const { isPlaying, onClickPlay } = useSound();
    const navigation = useNavigation();

    const valueScale = useRef(new Animated.Value(1)).current;
    const timeAnimation = 150;

    const onPlay = () => {
        Animated.timing(valueScale, {
            toValue: 0.85,
            duration: timeAnimation,
            useNativeDriver: true,
        }).start();
    };

    const onPause = () => {
        setTimeout(() => {
            Animated.timing(valueScale, {
                toValue: 1,
                duration: timeAnimation,
                useNativeDriver: true,
            }).start();
        }, 0);
    };

    return (
        <HeaderContainer>
            <Wrapper>
                <HeaderContainerTop>
                    <HeaderContainerArrow onPress={() => navigation.goBack()}>
                        <ArrowIcon height={25} width={25} />
                    </HeaderContainerArrow>
                    <HeaderContainerTitleBlock>
                        <HeaderContainerTitle>All tracks</HeaderContainerTitle>
                    </HeaderContainerTitleBlock>
                    <HeaderContainerBurger>
                        <BurgerIcon />
                    </HeaderContainerBurger>
                </HeaderContainerTop>
                <HeaderContainerBottom>
                    <HeaderContainerLine></HeaderContainerLine>
                    <TouchableHighlight
                        underlayColor={'none'}
                        onPressIn={onPlay}
                        onPressOut={onPause}
                        onPress={onClickPlay}>
                        <Animated.View
                            style={{
                                paddingVertical: 16,
                                paddingHorizontal: 90,
                                transform: [{ scale: valueScale }],
                                borderRadius: 50,
                                backgroundColor: colors.yellow.mustard,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            {isPlaying ? (
                                <PauseIcon color={colors.black.default} height={15} width={15} />
                            ) : (
                                <PlayIcon color={colors.black.default} height={15} width={15} />
                            )}
                            <HeaderContainerPlayButtonTitle>
                                {isPlaying ? 'Pause' : 'Play'}
                            </HeaderContainerPlayButtonTitle>
                        </Animated.View>
                    </TouchableHighlight>
                </HeaderContainerBottom>
                <HeaderContainerBottom>
                    <HeaderContainerDownloadButton>
                        <DownloadIcon color={colors.black.default} height={15} width={15} />
                        <HeaderContainerDownloadButtonTitle>
                            DOWNLOAD
                        </HeaderContainerDownloadButtonTitle>
                    </HeaderContainerDownloadButton>
                </HeaderContainerBottom>
            </Wrapper>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.SafeAreaView`
    padding-bottom: 20px;
    background-color: ${colors.white.default};
`;

const HeaderContainerTop = styled.View`
    padding-vertical: 10px;
    flex-direction: row;
    justify-content: center;
`;

const HeaderContainerArrow = styled.TouchableOpacity`
    position: absolute;
    left: -10px;
    top: 10px;
`;

const HeaderContainerBurger = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    top: 10px;
`;

const HeaderContainerTitleBlock = styled.View``;

const HeaderContainerTitle = styled.Text`
    font-weight: 500;
    font-size: ${config.sizeTextHeader}px;
`;

const HeaderContainerBottom = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 10px;
`;

const HeaderContainerLine = styled.View`
    background-color: ${colors.silver.bright};
    height: 1px;
    width: 130%;
    position: absolute;
    left: -20%;
    top: 50%;
`;

const HeaderContainerPlayButtonTitle = styled.Text`
    font-weight: 500;
    font-size: 16px;
    margin-left: 5px;
`;

const HeaderContainerDownloadButton = styled.View`
    border-radius: 50px;
    padding: 10px 25px;
    background-color: ${colors.silver.bright};
    flex-direction: row;
    align-items: center;
`;

const HeaderContainerDownloadButtonTitle = styled.Text`
    font-weight: 700;
    font-size: 12px;
    margin-left: 5px;
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;
