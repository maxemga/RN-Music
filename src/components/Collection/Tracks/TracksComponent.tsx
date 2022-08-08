import React from 'react';
import styled from 'styled-components/native';
import { TracksInputComponent } from './Modal/TracksInputComponent';
import { TracksContainersComponent } from './TracksContainersComponent';

export const TracksComponent = () => {
    return (
        <TracksBlock contentOffset={{ y: 40 }}>
            <TracksBlockContent>
                <Wrapper>
                    <TracksInputComponent />
                </Wrapper>
                <TracksContainersComponent />
            </TracksBlockContent>
        </TracksBlock>
    );
};

const TracksBlock = styled.View`
    margin-top: 15px;
`;

const TracksBlockContent = styled.View``;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;
