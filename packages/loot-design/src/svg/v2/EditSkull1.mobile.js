import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgEditSkull1 = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <Path
      d="M12 0a10.286 10.286 0 0 0-6.243 18.45 1.714 1.714 0 0 1 .672 1.36v1.619A2.571 2.571 0 0 0 9 24a1.714 1.714 0 0 0 1.714-1.714V21a1.286 1.286 0 0 1 2.572 0v1.286A1.714 1.714 0 0 0 15 24a2.571 2.571 0 0 0 2.571-2.571V19.81a1.714 1.714 0 0 1 .672-1.36A10.286 10.286 0 0 0 12 0zM7.714 12.429a2.143 2.143 0 1 1 2.143-2.143 2.143 2.143 0 0 1-2.143 2.143zm8.572 0a2.143 2.143 0 1 1 2.143-2.143 2.143 2.143 0 0 1-2.143 2.143z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgEditSkull1;
