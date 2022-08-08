import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ShareIcon = (props: SvgProps) => (
    <Svg
        viewBox="0 0 24 24"
        width={props.width}
        height={props.height}
        {...props}
        fill={props.color}>
        <Path
            d="M2.007 24h-2v-8A9.007 9.007 0 0 1 9 7l4.843-.154V.432l9.287 9.293a3 3 0 0 1 0 4.242l-9.285 9.293v-6.414L9 17a7.006 7.006 0 0 0-6.993 7Zm7-9 6.842-.154v3.586l5.874-5.879a1 1 0 0 0 0-1.414L15.844 5.26v3.586L9 9a7.006 7.006 0 0 0-7 7v2.349A8.98 8.98 0 0 1 9 15Z"
            data-name="01 align center"
        />
    </Svg>
);
