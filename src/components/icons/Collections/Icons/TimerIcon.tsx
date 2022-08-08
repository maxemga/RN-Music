import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const TimerIcon = (props: SvgProps) => (
    <Svg
        viewBox="0 0 24 24"
        data-name="Layer 1"
        width={props.width}
        height={props.height}
        {...props}
        fill={props.color}>
        <Path d="M14 13a2 2 0 1 1-3-1.723V6h2v5.277A1.994 1.994 0 0 1 14 13zm6.06-7.461a11 11 0 1 1-16.12 0l-.978-1.087-.88.88L.668 3.918l3.25-3.25 1.414 1.414-.954.954L5.426 4.2A10.923 10.923 0 0 1 11 2.051V0h2v2.051A10.923 10.923 0 0 1 18.574 4.2l1.048-1.165-.892-.891L20.145.73l3.187 3.188-1.414 1.414-.88-.88zM21 13a9 9 0 1 0-9 9 9.01 9.01 0 0 0 9-9z" />
    </Svg>
);
