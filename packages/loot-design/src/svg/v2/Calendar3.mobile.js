import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgCalendar3 = props => (
  <Svg
    {...props}
    viewBox="0 0 24 24"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <Path
      d="M7.5 10.5h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2zM12.5 10.5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM17.5 10.5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM7.5 14.5h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2zM12.5 14.5h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2zM17.5 14.5h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2zM7.5 18.5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM12.5 18.5h-1a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2zM17.5 18.5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"
      fill="currentColor"
    />
    <Path
      d="M21.5 3h-2.75a.25.25 0 0 1-.25-.25V1a1 1 0 0 0-2 0v4.75a.75.75 0 1 1-1.5 0V3.5a.5.5 0 0 0-.5-.5H8.25A.25.25 0 0 1 8 2.751V1a1 1 0 1 0-2 0v4.75a.75.75 0 1 1-1.5 0V3.5A.5.5 0 0 0 4 3H2.5a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 18.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-12A.5.5 0 0 1 3 9h18a.5.5 0 0 1 .5.5z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgCalendar3;
