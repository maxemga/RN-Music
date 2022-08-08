import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const TextIcon = (props: SvgProps) => (
    <Svg
        viewBox="0 0 24 24"
        width={props.width}
        height={props.height}
        {...props}
        fill={props.color}>
        <Path d="M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM23 9H9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 19H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM23 14H9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM1.707 16.245l2.974-2.974a1.092 1.092 0 0 0 0-1.542L1.707 8.755A1 1 0 0 0 0 9.463v6.074a1 1 0 0 0 1.707.708Z" />
    </Svg>
);
