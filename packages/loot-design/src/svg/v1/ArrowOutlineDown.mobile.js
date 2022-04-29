import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgArrowOutlineDown = props => (
  <Svg
    {...props}
    viewBox="0 0 20 20"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <Path
      d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-8V5h4v5h3l-5 5-5-5h3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgArrowOutlineDown;
