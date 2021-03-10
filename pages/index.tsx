import React, { useEffect } from 'react';
import { useTheme } from '../store/reducers/themeReducer';
import Header from '../components/Header';
import Preview from '../components/Preview';
import Editor from '../components/Editor';
import isValidHexColor from '../utils/ECMAScript/isValidHexColor/isValidHexColor';
import getFontColor from '../utils/ECMAScript/getFontColor/getFontColor';
import getShadowColor from '../utils/ECMAScript/getShadowColor/getShadowColor';

const Home = (): unknown => {
  //TODO: Add rust WASM module later
  // import('../utils/rust/soft-ui-utils/pkg').then((module) => {
  //   console.log(module);
  //   // module.greet(module.to_hex(10).toString());
  // });

  const { mainColor, fontColor, updateLightShadow, updateDarkShadow, updateFontColor, updateMainColor } = useTheme();


  useEffect(() => {
    const url = new URL(window.location.href);
    const hexFromURL = url.hash;

    // Update app's color scheme if there are valid hex triplet in URL
    if (isValidHexColor(hexFromURL)) {
      updateMainColor(hexFromURL);
      updateFontColor(getFontColor(hexFromURL));
      updateLightShadow(getShadowColor(hexFromURL).lightShadow);
      updateDarkShadow(getShadowColor(hexFromURL).darkShadow);
    }

    // Update URL with current current color if there no color information in URL
    if (hexFromURL.length === 0) {
      window.history.replaceState('', '', `/${mainColor}`);
    }
  }, []);

  return (
    //TODO: change to styled components css
    <div className={'flex-test'} style={{ background: mainColor, color: fontColor }}>
      <Header />
      <Preview />
      <Editor />
    </div>
  );
};

export default Home;
