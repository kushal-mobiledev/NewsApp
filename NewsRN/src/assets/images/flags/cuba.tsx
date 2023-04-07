import React from 'react';
import {Svg, G, Path, Ellipse} from 'react-native-svg';

function Icon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve">
      <G fill="#41479B">
        <Path d="M0 0H512V102.4H0z"></Path>
        <Path d="M0 409.6H512V512H0z"></Path>
      </G>
      <Path fill="#F5F5F5" d="M0 102.4H512V204.8H0z"></Path>
      <Path fill="#41479B" d="M0 204.8H512V307.20000000000005H0z"></Path>
      <Path fill="#F5F5F5" d="M0 307.2H512V409.6H0z"></Path>
      <Path
        fill="#FF4B55"
        d="M0 512l253.908-250.09c2.789-2.747 2.789-9.074 0-11.821L0 0v512z"></Path>
      <Path
        fill="#F5F5F5"
        d="M102.751 191.042l13.834 41.479 43.723.339c3.387.026 4.792 4.349 2.067 6.361l-35.174 25.974 13.189 41.688c1.022 3.23-2.655 5.901-5.411 3.932l-35.572-25.426-35.572 25.426c-2.756 1.97-6.433-.702-5.411-3.932l13.189-41.688-35.174-25.974c-2.725-2.012-1.32-6.335 2.067-6.361l43.723-.339 13.834-41.479c1.071-3.214 5.616-3.214 6.688 0z"></Path>
    </Svg>
  );
}

export default Icon;
