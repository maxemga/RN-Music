import React from 'react';
import { LupaIcon } from 'src/components/icons/HeaderIcons/LupaIcon';
import { SettingsIcon } from 'src/components/icons/HeaderIcons/SettingsIcon';
import { UserIcon } from 'src/components/icons/HeaderIcons/UserIcon';
import { colors, config } from 'src/theme/config';
import styled from 'styled-components/native';

export const CollectionHeader = () => {
    return (
        <HeaderComponents>
            <Wrapper>
                <HeaderBlockUser>
                    <UserIcon />
                </HeaderBlockUser>
                <HeaderBlockSettings>
                    <SettingsIcon />
                </HeaderBlockSettings>
                <HeaderBlockTitle>
                    <HeaderTitle>Collection</HeaderTitle>
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
const HeaderBlockSettings = styled.TouchableOpacity`
    position: absolute;
    left: 35px;
    top: 5px;
    z-index: 100;
`;

const HeaderBlockUser = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 5px;
    z-index: 100;
`;

const HeaderBlockTitle = styled.View`
    padding-top: 8px;
    padding-bottom: 12px;
    justify-content: center;
    align-items: center;
`;

const HeaderTitle = styled.Text`
    font-size: ${config.sizeTextHeader}px;
    font-weight: 500;
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
