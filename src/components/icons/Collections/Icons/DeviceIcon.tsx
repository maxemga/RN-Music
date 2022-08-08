import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const DeviceIcon = (props: SvgProps) => (
    <Svg
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width={props.width}
        height={props.height}
        {...props}
        fill={props.color}>
        <Path d="M24 19V5c0-1.654-1.346-3-3-3H3C1.346 2 0 3.346 0 5v14h11v1H7v2h10v-2h-4v-1h11ZM2 5c0-.551.449-1 1-1h18c.552 0 1 .449 1 1v12H2V5Zm12 1h2v2h-2v4.5a2.5 2.5 0 1 1-2-2.45V8c0-1.103.897-2 2-2Z" />
    </Svg>
);
