import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const RepeatIcon = (props: SvgProps) => (
    <Svg
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width={props.width}
        height={props.height}
        {...props}
        fill={props.color}>
        <Path d="m18.318 14.718 4.95-4.95a2.5 2.5 0 0 0 0-3.536l-4.95-4.95L16.9 2.7 21.2 7H3.1A3.031 3.031 0 0 0 0 9.95v11.1A3.031 3.031 0 0 0 3.1 24H22v-2H3.1a1.034 1.034 0 0 1-1.1-.95V9.95A1.034 1.034 0 0 1 3.1 9h18.107l-4.3 4.3Z" />
    </Svg>
);
