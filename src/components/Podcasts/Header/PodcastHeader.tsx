import React from 'react';
import { LupaIcon } from 'src/components/icons/HeaderIcons/LupaIcon';
import { SettingsIcon } from 'src/components/icons/HeaderIcons/SettingsIcon';
import { UserIcon } from 'src/components/icons/HeaderIcons/UserIcon';
import { colors, config } from 'src/theme/config';
import styled from 'styled-components/native';

export const PodcastHeader = () => {
    return (
        <HeaderComponents>
            <Wrapper>
                <HeaderBlockTitle>
                    <HeaderTitle>Podcasts and books</HeaderTitle>
                </HeaderBlockTitle>
                <HeaderBlockGlass>
                    <LupaIcon />
                </HeaderBlockGlass>
            </Wrapper>
        </HeaderComponents>
    );
};

const HeaderComponents = styled.SafeAreaView`
    background-color: ${colors.white.opacity};
`;

const HeaderBlockTitle = styled.View`
    padding-top: 8px;
    padding-bottom: 12px;
    justify-content: center;
    align-items: center;
`;

const HeaderTitle = styled.Text`
    font-size: ${config.sizeTextHeader}px;
`;

const HeaderBlockGlass = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    top: 5px;
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;
