'use client';

import React, { useEffect } from 'react';
import { useThemeStore } from '@/store';
import isValidHexColor from '@/utils/isValidHexColor/isValidHexColor';
import getFontColor from '@/utils/getFontColor/getFontColor';
import getShadowColor from '@/utils/getShadowColor/getShadowColor';
import Header from '@/components/generator/Header';
import Preview from '@/components/generator/Preview';
import Editor from '@/components/generator/Editor';
import Output from '@/components/generator/Output';
import Footer from '@/components/generator/Footer';

export default function GeneratorPage() {
  const { mainColor, fontColor, setLightShadow, setDarkShadow, setFontColor, setMainColor } = useThemeStore();

  useEffect(() => {
    const url = new URL(window.location.href);
    const hexFromURL = url.hash;

    if (isValidHexColor(hexFromURL)) {
      setMainColor(hexFromURL);
      setFontColor(getFontColor(hexFromURL, true));
      setLightShadow(getShadowColor(hexFromURL).lightShadow);
      setDarkShadow(getShadowColor(hexFromURL).darkShadow);
    }

    if (hexFromURL.length === 0) {
      window.history.replaceState('', '', `/generator${mainColor}`);
    }
  }, [mainColor, setMainColor, setFontColor, setLightShadow, setDarkShadow]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: mainColor, color: fontColor }}>
      <Header />
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 space-y-8 lg:space-y-0 lg:space-x-12">
        <Preview />
        <div className="w-full max-w-lg space-y-8">
            <Editor />
            <Output />
        </div>
      </div>
      <Footer />
    </div>
  );
}
