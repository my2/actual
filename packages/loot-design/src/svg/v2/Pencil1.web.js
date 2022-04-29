import React from 'react';

const SvgPencil1 = props => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    style={{
      color: '#242134',
      ...props.style
    }}
  >
    <path
      d="M15.067 3.986a.5.5 0 0 0-.354-.148.5.5 0 0 0-.354.147L3.437 14.91a.5.5 0 0 0 0 .707l4.948 4.948a.5.5 0 0 0 .707 0L20.009 9.648a.5.5 0 0 0 0-.706zM2.43 16.8a.5.5 0 0 0-.489-.127.5.5 0 0 0-.351.364L.084 23.314a.5.5 0 0 0 .133.47.507.507 0 0 0 .47.132l6.272-1.5a.5.5 0 0 0 .237-.84zM23.2 2.924L21.077.8a2.5 2.5 0 0 0-3.532 0l-1.418 1.417a.5.5 0 0 0 0 .707l4.95 4.949a.5.5 0 0 0 .707 0L23.2 6.454a2.5 2.5 0 0 0 0-3.53z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPencil1;
