'use client';

import React from 'react';
import { useThemeStore, useGeneratorStore } from '@/store';

const Preview = () => {
  const { mainColor, darkShadow, lightShadow } = useThemeStore();
  const { blur, spread, width, height, radius, shape } = useGeneratorStore();

  const isFlat = shape === 1 || shape === 3;
  const isInset = shape === 2 || shape === 4;

  const boxShadow = `${isInset ? 'inset ' : ''}${spread}px ${spread}px ${blur}px ${darkShadow}, ${isInset ? 'inset ' : ''}-${spread}px -${spread}px ${blur}px ${lightShadow}`;

  let background = mainColor;
  if (shape === 3) {
      background = `linear-gradient(145deg, ${lightShadow}, ${darkShadow})`;
  } else if (shape === 4) {
      background = `linear-gradient(145deg, ${darkShadow}, ${lightShadow})`;
  }

  return (
    <div className="flex-1 flex items-center justify-center p-8 w-full">
      <div
        className="transition-all duration-300"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: `${radius}px`,
          background: background,
          boxShadow: boxShadow,
        }}
      />
    </div>
  );
};

export default Preview;