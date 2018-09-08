// @flow
import React from 'react';

type Props = {
  height: number,
  width: number,
  fill: string
};

const EbabaLogo = ({ height = 24, width = 24, fill = '#ec9d00' }: Props) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 720 720"
    preserveAspectRatio="xMidYMid meet">
    <g id="layer101" fill={fill} stroke="none">
      <path d="M105 707 c-80 -32 -105 -66 -105 -145 0 -121 175 -274 370 -323 147 -37 242 -13 248 64 6 71 -97 150 -244 187 -42 11 -99 20 -126 20 l-49 0 3 37 c4 51 33 66 119 59 110 -8 224 -64 331 -164 51 -47 68 -48 68 -1 0 34 -33 70 -135 146 -75 57 -158 99 -232 118 -67 18 -205 19 -248 2z m242 -298 c34 -16 76 -46 94 -67 32 -36 32 -37 11 -40 -32 -5 -99 30 -159 84 -84 73 -67 81 54 23z" />
      <path d="M340 124 c-25 -19 -46 -39 -48 -44 -3 -8 85 -80 98 -80 10 0 100 71 100 79 0 7 -93 81 -101 81 -2 0 -24 -16 -49 -36z" />
    </g>
  </svg>
);

export default EbabaLogo;
