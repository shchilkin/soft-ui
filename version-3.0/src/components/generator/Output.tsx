'use client';

import React, { useState } from 'react';
import { useThemeStore, useGeneratorStore } from '@/store';
import { Copy, Check } from 'lucide-react';

const Output = () => {
  const { mainColor, darkShadow, lightShadow } = useThemeStore();
  const { blur, spread, radius, shape } = useGeneratorStore();
  const [copied, setCopied] = useState(false);

  const isFlat = shape === 1 || shape === 3;
  const isInset = shape === 2 || shape === 4;

  const boxShadow = `${isInset ? 'inset ' : ''}${spread}px ${spread}px ${blur}px ${darkShadow},
${isInset ? 'inset ' : ''}-${spread}px -${spread}px ${blur}px ${lightShadow}`;

  let background = mainColor;
  if (shape === 3) {
      background = `linear-gradient(145deg, ${lightShadow}, ${darkShadow})`;
  } else if (shape === 4) {
      background = `linear-gradient(145deg, ${darkShadow}, ${lightShadow})`;
  }

  const cssCode = `border-radius: ${radius}px;
background: ${background};
box-shadow: ${boxShadow};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/5 p-6 rounded-2xl shadow-sm backdrop-blur-md border border-white/10 w-full max-w-md mx-auto mt-4 relative group">
      <h3 className="text-sm font-medium mb-3 opacity-80 flex justify-between items-center">
        CSS Output
        <button
          onClick={copyToClipboard}
          className="text-xs flex items-center space-x-1 opacity-60 hover:opacity-100 transition-opacity"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </h3>
      <pre className="text-xs font-mono overflow-x-auto whitespace-pre-wrap p-4 bg-black/10 rounded-lg">
        <code>{cssCode}</code>
      </pre>
    </div>
  );
};

export default Output;