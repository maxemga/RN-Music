import React from 'react';
import { FlatList } from 'react-native';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import styled from 'styled-components/native';
import { TracksContainer } from './TracksContainer';

export const TracksContainersComponent = () => {
    const { tracks } = useTypedSelector((state) => state.trackReducer);

    return (
        <TracksContainers>
            <FlatList
                data={tracks}
                renderItem={(el) => <TracksContainer {...el.item} />}
                keyExtractor={(el) => String(el.id)}
                style={{ height: '100%' }}
            />
        </TracksContainers>
    );
};

const TracksContainers = styled.View`
    margin-top: 10px;
`;
