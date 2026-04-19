'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  const mainColor = '#E1E3EA';
  const fontColor = '#45484d';
  const lightShadow = '#ffffff';
  const darkShadow = '#c0c2c8';

  const insetShadowStyle = `inset 4px 4px 8px ${darkShadow}, inset -4px -4px 8px ${lightShadow}`;
  const boxShadowStyle = `6px 6px 12px ${darkShadow}, -6px -6px 12px ${lightShadow}`;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: mainColor, color: fontColor }}>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-4 text-center">
        <div
          className="rounded-[50px] p-8 mb-8"
          style={{ boxShadow: boxShadowStyle }}
        >
          <svg width="100px" height="100px" viewBox="0 0 173 173" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
             <path d="M155.311,28.461c10.358,6.678 17.223,18.317 17.223,31.547l0,75.017c0,20.702 -16.807,37.509 -37.509,37.509l-75.017,0c-13.215,0 -24.844,-6.85 -31.525,-17.19c5.851,3.773 12.815,5.962 20.286,5.962l75.017,0c20.701,0 37.508,-16.807 37.508,-37.509l0,-75.016c0,-7.486 -2.197,-14.462 -5.983,-20.32Z" style={{ fill: darkShadow }} />
             <path d="M17.209,144.064c-10.351,-6.68 -17.209,-18.315 -17.209,-31.539l0,-75.017c0,-20.701 16.807,-37.508 37.508,-37.508l75.017,0c13.239,0 24.885,6.873 31.56,17.242c-5.853,-3.777 -12.822,-5.97 -20.299,-5.97l-75.017,0c-20.701,0 -37.508,16.807 -37.508,37.509l0,75.016c0,7.463 2.184,14.42 5.948,20.267Z" style={{ fill: lightShadow }} />
             <path d="M144.085,57.385c0,-15.952 -12.951,-28.904 -28.904,-28.904l-57.808,0c-15.952,0 -28.903,12.952 -28.903,28.904l0,57.808c0,15.952 12.951,28.904 28.903,28.904l57.808,0c15.953,0 28.904,-12.952 28.904,-28.904l0,-57.808Z" style={{ fill: mainColor }} />
          </svg>
        </div>
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Soft UI</h1>
        <p className="text-xl mb-2 opacity-80">Build beautiful products in Neumorphic style</p>
        <p className="text-sm mb-12 opacity-60">Version 3.0</p>

        <Link href="/generator" passHref>
          <button
            className="px-12 py-4 rounded-2xl text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: mainColor,
              color: fontColor,
              boxShadow: boxShadowStyle
            }}
          >
            Get Started
          </button>
        </Link>
      </section>

      {/* Showcase Section */}
      <section className="flex-1 py-16 px-4 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-6" style={{ boxShadow: boxShadowStyle }}>
                <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ boxShadow: insetShadowStyle }}>
                    <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#ff5e5e', boxShadow: `3px 3px 6px ${darkShadow}, -3px -3px 6px ${lightShadow}` }} />
                </div>
                <h3 className="text-xl font-bold">Colors</h3>
                <p className="opacity-80">Easily generate soft shadows for any color palette.</p>
            </div>

            <div className="rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-6" style={{ backgroundColor: '#2d3035', color: '#E1E3EA', boxShadow: `6px 6px 12px ${darkShadow}, -6px -6px 12px ${lightShadow}` }}>
                 <div className="w-24 h-24 rounded-2xl" style={{ boxShadow: 'inset 4px 4px 8px #1e2023, inset -4px -4px 8px #3c4047' }}></div>
                <h3 className="text-xl font-bold">Dark Mode</h3>
                <p className="opacity-80">Seamlessly create dark neumorphic elements.</p>
            </div>

            <div className="rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-6" style={{ boxShadow: boxShadowStyle }}>
                <div className="w-24 h-24 rounded-2xl" style={{ backgroundColor: '#4a90e2', boxShadow: `4px 4px 8px ${darkShadow}, -4px -4px 8px ${lightShadow}` }}></div>
                <h3 className="text-xl font-bold">Components</h3>
                <p className="opacity-80">Export CSS and apply it directly to your components.</p>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center" style={{ backgroundColor: mainColor }}>
        <a href="https://github.com/CrazyRedKitten/soft-ui" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
          GitHub
        </a>
      </footer>
    </div>
  );
}
