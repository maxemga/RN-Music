import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';
import { colors } from 'src/theme/config';

export const PointIcon = (props: SvgProps) => (
    <Svg
        data-name="Isolation Mode"
        viewBox="0 0 24 24"
        width={props.height || 50}
        height={props.height || 50}
        fill={props.color || colors.black.default}
        {...props}>
        <Circle cx={21.517} cy={12.066} r={2.5} />
        <Circle cx={12} cy={12} r={2.5} />
        <Circle cx={2.5} cy={12} r={2.5} />
    </Svg>
);
