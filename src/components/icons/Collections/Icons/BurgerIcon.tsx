import * as React from 'react';
import Svg, { SvgProps, Rect } from 'react-native-svg';
import { colors } from 'src/theme/config';

export const BurgerIcon = (props: SvgProps) => (
    <Svg
        viewBox="0 0 24 24"
        width={props.width || 23}
        height={props.height || 23}
        {...props}
        fill={props.color || colors.black.default}>
        <Rect y={11} width={24} height={2} rx={1} />
        <Rect y={4} width={24} height={2} rx={1} />
        <Rect y={18} width={24} height={2} rx={1} />
    </Svg>
);
