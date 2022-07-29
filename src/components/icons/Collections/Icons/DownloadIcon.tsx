import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const DownloadIcon = (props: SvgProps) => (
    <Svg
        viewBox="0 0 24 24"
        width={props.width}
        height={props.height}
        {...props}
        fill={props.color}>
        <Path d="M9.878 18.122a3 3 0 0 0 4.244 0l3.211-3.211a1 1 0 0 0-1.414-1.411l-2.926 2.927L13 1a1 1 0 0 0-1-1 1 1 0 0 0-1 1l-.009 15.408-2.91-2.908a1 1 0 0 0-1.414 1.415Z" />
        <Path d="M23 16a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Z" />
    </Svg>
);
