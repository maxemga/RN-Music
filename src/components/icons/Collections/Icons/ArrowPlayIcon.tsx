import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ArrowPlayIcon = (props: SvgProps) => (
    <Svg
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width={props.width}
        height={props.height}
        {...props}
        fill={props.color}>
        <Path d="M22 21h-2V3h2v18Zm-4 0h-2V3h2v18Zm-16-.002V3.002l10.88 6.946c.699.439 1.12 1.203 1.12 2.039s-.424 1.601-1.135 2.047L2 20.998Z" />
    </Svg>
);
