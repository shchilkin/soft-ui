'use client';

import React from 'react';
import { useThemeStore, useGeneratorStore } from '@/store';
import getShadowColor from '@/utils/getShadowColor/getShadowColor';
import getFontColor from '@/utils/getFontColor/getFontColor';
import isValidHexColor from '@/utils/isValidHexColor/isValidHexColor';

const Editor = () => {
  const { mainColor, setMainColor, setFontColor, setLightShadow, setDarkShadow } = useThemeStore();
  const {
    blur, setBlur,
    spread, setSpread,
    width, setWidth,
    height, setHeight,
    radius, setRadius,
    shape, setShape
  } = useGeneratorStore();

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    setMainColor(hex);

    if (isValidHexColor(hex)) {
        setFontColor(getFontColor(hex, true));
        const shadows = getShadowColor(hex);
        setLightShadow(shadows.lightShadow);
        setDarkShadow(shadows.darkShadow);
        window.history.replaceState('', '', `/generator#${hex.replace('#', '')}`);
    }
  };

  return (
    <div className="bg-white/5 p-6 rounded-2xl shadow-sm backdrop-blur-md border border-white/10 w-full max-w-md mx-auto space-y-6">
      <div className="space-y-4">
        <label className="block text-sm font-medium">Pick a color:</label>
        <div className="flex items-center space-x-4">
            <input
                type="color"
                value={mainColor}
                onChange={handleColorChange}
                className="w-12 h-12 rounded cursor-pointer border-0 bg-transparent p-0"
            />
            <input
                type="text"
                value={mainColor}
                onChange={handleColorChange}
                className="bg-transparent border-b border-current focus:outline-none flex-1 font-mono text-lg"
            />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
            <label className="block text-xs font-medium opacity-80">Size (Width)</label>
            <input type="range" min="50" max="400" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="w-full accent-current" />
        </div>
        <div className="space-y-2">
            <label className="block text-xs font-medium opacity-80">Size (Height)</label>
            <input type="range" min="50" max="400" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full accent-current" />
        </div>
        <div className="space-y-2">
            <label className="block text-xs font-medium opacity-80">Radius</label>
            <input type="range" min="0" max="200" value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="w-full accent-current" />
        </div>
        <div className="space-y-2">
            <label className="block text-xs font-medium opacity-80">Distance</label>
            <input type="range" min="1" max="50" value={spread} onChange={(e) => setSpread(Number(e.target.value))} className="w-full accent-current" />
        </div>
        <div className="space-y-2 col-span-2">
            <label className="block text-xs font-medium opacity-80">Blur</label>
            <input type="range" min="0" max="100" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full accent-current" />
        </div>
      </div>

      <div className="space-y-2 pt-4 border-t border-white/10">
          <label className="block text-sm font-medium">Shape</label>
          <div className="flex space-x-2">
              {[1, 2, 3, 4].map((s) => (
                  <button
                      key={s}
                      onClick={() => setShape(s)}
                      className={`flex-1 py-2 text-sm rounded transition-colors ${shape === s ? 'text-white' : 'bg-black/5 hover:bg-black/10'}`}
                      style={{ backgroundColor: shape === s ? mainColor : '' }}
                  >
                      {s === 1 && 'Flat'}
                      {s === 2 && 'Inset'}
                      {s === 3 && 'Convex'}
                      {s === 4 && 'Concave'}
                  </button>
              ))}
          </div>
      </div>
    </div>
  );
};

export default Editor;