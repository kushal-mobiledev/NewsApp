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
      <Path fill="#41479B" d="M0 512L256 256 0 0z"></Path>
      <Path fill="#FF4B55" d="M0 512L512 512 512 256 256 256z"></Path>
      <Path fill="#F5F5F5" d="M0 0L512 0 512 256 256 256z"></Path>
    </Svg>
  );
}

export default Icon;
