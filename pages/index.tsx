import React from 'react';
import Logo from '../components/logo/logo';
import { useTheme } from '../store/reducers/themeReducer';

const Home = (): unknown => {
  import('../utils/rust/soft-ui-utils/pkg').then((module) => {
    console.log(module);
    // module.greet(module.to_hex(10).toString());
  });

  const { mainColor, fontColor, darkShadow, lightShadow } = useTheme();

  return (
    <div id={'page'} style={{ background: mainColor, borderRadius: 12 }}>
      <div style={{ display: 'flex' }}>
        <Logo />
        <div style={{ alignSelf: 'center' }}>
          <h1 className={'header'}>
            <span className={'bold'}>Soft UI</span> - <span className={'regular'}>Open source design tool</span>
          </h1>
        </div>
      </div>
      <div className={'generator-grid'}>
        <div
          className={'softui-preview'}
          style={{
            backgroundColor: mainColor,
            color: fontColor,
            boxShadow: `${darkShadow} 5px 5px 20px 0px, ${lightShadow} -5px -5px 20px 0px;`
          }}
        >
          <h1>{mainColor}</h1>
          <h2>{fontColor}</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
