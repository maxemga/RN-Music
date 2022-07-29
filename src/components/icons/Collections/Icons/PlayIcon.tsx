import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const PlayIcon = (props: SvgProps) => (
    <Svg
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width={props.width}
        height={props.height}
        {...props}
        fill={props.color}>
        <Path d="M19.749 9.464 5 .048v23.941l14.743-9.449a3 3 0 0 0 .006-5.076Z" />
    </Svg>
);
