import React, { useEffect } from 'react';
import { useTheme } from '../store/reducers/themeReducer';
import Header from '../components/Header';
import Preview from '../components/Preview';
import Editor from '../components/Editor';
import isValidHexColor from '../utils/ECMAScript/isValidHexColor/isValidHexColor';
import getFontColor from '../utils/ECMAScript/getFontColor/getFontColor';
import getShadowColor from '../utils/ECMAScript/getShadowColor/getShadowColor';

const Home = (): unknown => {
  import('../utils/rust/soft-ui-utils/pkg').then((module) => {
    console.log(module);
    // module.greet(module.to_hex(10).toString());
  });

  const { mainColor, fontColor, updateMainColor, updateFontColor, updateDarkShadow, updateLightShadow } = useTheme();

  useEffect(() => {
    const url = new URL(window.location.href);
    const hexFromURL = url.hash;

    if (isValidHexColor(hexFromURL)) {
      updateMainColor(hexFromURL);
      updateFontColor(getFontColor(hexFromURL));
      updateLightShadow(getShadowColor(hexFromURL).lightShadow);
      updateDarkShadow(getShadowColor(hexFromURL).darkShadow);
    }
  }, []);

  return (
    <div className={'flex-test'} style={{ background: mainColor, color: fontColor }}>
      <Header />
      <Preview />
      <Editor />
    </div>
  );
};

export default Home;
