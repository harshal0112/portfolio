import React from "react";
const SVGComponent = (props) => (
  <svg
    viewBox="0 0 200 187"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={330}
    height={320}
    className={`scale-75 md:scale-100 ${props.svgShadow}`}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          className={`${props.svgColorMode1}`}
          style={{ stopOpacity: "1" }}
        />
        <stop
          offset="50%"
          className={`${props.svgColorMode2}`}
          style={{ stopOpacity: "1" }}
        />
        <stop
          offset="100%"
          className={`${props.svgColorMode1}`}
          style={{ stopOpacity: "1" }}
        />
      </linearGradient>
    </defs>
    <mask id="mask0" mask-type="alpha">
      <path d="M190.312 36.488c16.27 25.63 10.997 66.338 -7.984 97.698 -18.982 31.361 -51.521 53.373 -82.102 52.167 -30.58 -1.056 -59.203 -25.33 -78.486 -56.991C2.458 97.852 -7.485 59.103 6.676 34.528 20.987 10.103 59.703 -0.15 97.966 0.002c38.264 0.301 76.227 10.855 92.346 36.486Z" />
    </mask>
    <g mask="url(#mask0)" fill="url(#grad1)">
      <path d="M190.312 36.488c16.27 25.63 10.997 66.338 -7.984 97.698 -18.982 31.361 -51.521 53.373 -82.102 52.167 -30.58 -1.056 -59.203 -25.33 -78.486 -56.991C2.458 97.852 -7.485 59.103 6.676 34.528 20.987 10.103 59.703 -0.15 97.966 0.002c38.264 0.301 76.227 10.855 92.346 36.486Z" />
      <image
        xlinkHref="https://i.ibb.co/ph5w74q/pnge.png"
        alt="/"
        className="imageLink"
      />
    </g>
  </svg>
);
export default SVGComponent;
