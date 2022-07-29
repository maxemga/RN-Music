import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ArtistsIcon = (props: SvgProps) => (
    <Svg
        viewBox="0 0 24 24"
        data-name="Layer 1"
        width={props.width}
        height={props.height}
        {...props}
        fill={props.color}>
        <Path d="M7.5 13A4.5 4.5 0 1 1 12 8.5 4.505 4.505 0 0 1 7.5 13zm0-7A2.5 2.5 0 1 0 10 8.5 2.5 2.5 0 0 0 7.5 6zM15 23v-.5a7.5 7.5 0 0 0-15 0v.5a1 1 0 0 0 2 0v-.5a5.5 5.5 0 0 1 11 0v.5a1 1 0 0 0 2 0zm9-5a7 7 0 0 0-11.667-5.217 1 1 0 1 0 1.334 1.49A5 5 0 0 1 22 18a1 1 0 0 0 2 0zm-6.5-9A4.5 4.5 0 1 1 22 4.5 4.505 4.505 0 0 1 17.5 9zm0-7A2.5 2.5 0 1 0 20 4.5 2.5 2.5 0 0 0 17.5 2z" />
    </Svg>
);