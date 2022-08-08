import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { LupaIcon } from 'src/components/icons/HeaderIcons/LupaIcon';
import { colors } from 'src/theme/config';
import styled from 'styled-components/native';

export const TracksInputComponent = () => {
    const [value, setValue] = useState<string>('');
    const navigation = useNavigation();

    return (
        <TracksInputBlock onPress={() => navigation.navigate('screen')}>
            <TracksInputSearch>
                <LupaIcon
                    pointerEvents="none"
                    color={colors.silver.default}
                    height={16}
                    width={16}></LupaIcon>
            </TracksInputSearch>
            <TracksInputValue
                pointerEvents="none"
                onChangeText={setValue}
                value={value}
                placeholder={'Tracks, album, or artist'}
            />
        </TracksInputBlock>
    );
};

const TracksInputBlock = styled.TouchableOpacity`
    position: relative;
`;

const TracksInputSearch = styled.View`
    position: absolute;
    top: 9px;
    left: 10px;
    z-index: 100;
`;

const TracksInputValue = styled.TextInput`
    background-color: ${colors.silver.bright};

    padding: 9px 35px;
    border-radius: 30px;
    font-weight: 500;
`;
