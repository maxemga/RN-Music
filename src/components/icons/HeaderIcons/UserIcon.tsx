import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
import { colors, config } from 'src/theme/config';

export const UserIcon = (props: SvgProps) => (
    <Svg viewBox="0 0 24 24" width={23} height={23} {...props} fill={colors.black.default}>
        <G data-name="01 align center">
            <Path d="M21 24h-2v-5.043A2.96 2.96 0 0 0 16.043 16H7.957A2.96 2.96 0 0 0 5 18.957V24H3v-5.043A4.963 4.963 0 0 1 7.957 14h8.086A4.963 4.963 0 0 1 21 18.957ZM12 12a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6Zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z" />
        </G>
    </Svg>
);
