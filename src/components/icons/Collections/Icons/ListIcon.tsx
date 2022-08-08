import * as React from 'react';
import Svg, { SvgProps, G, Path, Circle } from 'react-native-svg';

export const ListIcon = (props: SvgProps) => (
    <Svg
        viewBox="0 0 24 24"
        width={props.width}
        height={props.height}
        {...props}
        fill={props.color}>
        <G data-name="01 align center">
            <Path d="M7 4h17v2H7zM7 11h17v2H7zM7 18h17v2H7z" />
            <Circle cx={2} cy={5} r={2} />
            <Circle cx={2} cy={12} r={2} />
            <Circle cx={2} cy={19} r={2} />
        </G>
    </Svg>
);
