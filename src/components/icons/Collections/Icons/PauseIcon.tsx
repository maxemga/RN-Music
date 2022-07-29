import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { colors } from 'src/theme/config';

export const PauseIcon = (props: SvgProps) => (
    <Svg
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width={props.width}
        height={props.height}
        {...props}
        fill={props.color || colors.black.default}>
        <Path d="M3 0h7v24H3zM14 0h7v24h-7z" />
    </Svg>
);
