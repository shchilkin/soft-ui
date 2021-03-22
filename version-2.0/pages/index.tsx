import React, { useEffect } from 'react';
import { useTheme } from '../store/reducers/themeReducer';
import Header from '../components/Header';
import Preview from '../components/Preview';
import Editor from '../components/Editor';
import isValidHexColor from '../utils/isValidHexColor/isValidHexColor';
import getFontColor from '../utils/getFontColor/getFontColor';
import getShadowColor from '../utils/getShadowColor/getShadowColor';
import Footer from '../components/Footer';
import Output from '../components/Output';


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
      updateFontColor(getFontColor(hexFromURL, true));
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
    <div className={'app'} style={{ background: mainColor, color: fontColor }}>
      <Header />
      <Preview />
      <div className={'editor'}>
        <Editor />
        <Output />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
