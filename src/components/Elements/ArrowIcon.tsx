import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { colors } from 'src/theme/config';

export const ArrowIcon = (props: SvgProps) => (
    <Svg
        viewBox="0 0 24 24"
        width={props.width || 25}
        height={props.height || 25}
        {...props}
        fill={props.color || colors.black.default}>
        <Path d="m15.4 9.88-4.59-4.59a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l4.6 4.58a1 1 0 0 1 0 1.42l-4.6 4.58a1 1 0 0 0 1.41 1.42l4.59-4.59a3 3 0 0 0 0-4.24Z" />
    </Svg>
);
