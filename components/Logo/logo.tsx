import React from 'react';
import { useTheme } from '../../store/reducers/themeReducer';

/**
 * Soft UI Vector Logo
 */
const Logo = (): JSX.Element => {
  const { mainColor, darkShadow, lightShadow } = useTheme();
  console.log("MAIN, dark, light", mainColor, darkShadow, lightShadow)

  return (
    <div id='logo'>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 222 222'
        style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
      >
        <path
          id='Main'
          d='M221.978,55.495c0,-30.629 -24.866,-55.495 -55.494,-55.495l-110.989,0c-30.629,0 -55.495,24.866 -55.495,55.495l0,110.989c0,30.628 24.866,55.494 55.495,55.494l110.989,0c30.628,0 55.494,-24.866 55.494,-55.494l0,-110.989Z'
          style={{ fill: mainColor }}
        />
        <path
          id='BottomShadow'
          d='M180.615,53.184c10.358,6.677 17.222,18.316 17.222,31.547l0,75.016c0,20.702 -16.806,37.509 -37.508,37.509l-75.017,0c-13.216,0 -24.844,-6.85 -31.525,-17.189c5.851,3.772 12.815,5.961 20.286,5.961l75.017,0c20.701,0 37.508,-16.807 37.508,-37.508l0,-75.017c0,-7.486 -2.198,-14.462 -5.983,-20.319Z'
          style={{ fill: darkShadow }}
        />
        <path
          id='TopShadow'
          d='M169.389,82.107c0,-15.952 -12.951,-28.903 -28.904,-28.903l-57.808,0c-15.952,0 -28.903,12.951 -28.903,28.903l0,57.808c0,15.953 12.951,28.904 28.903,28.904l57.808,0c15.953,0 28.904,-12.951 28.904,-28.904l0,-57.808Zm-126.876,86.679c-10.351,-6.68 -17.209,-18.314 -17.209,-31.539l0,-75.016c0,-20.702 16.807,-37.509 37.508,-37.509l75.017,0c13.239,0 24.885,6.874 31.56,17.242c-5.853,-3.777 -12.822,-5.969 -20.299,-5.969l-75.017,0c-20.702,0 -37.509,16.806 -37.509,37.508l0,75.017c0,7.463 2.185,14.419 5.949,20.266Z'
          style={{ fill: lightShadow }}
        />
      </svg>
    </div>
  );
};

export default Logo;
