import React from 'react';
import { useTheme } from '../store/reducers/themeReducer';
import Header from '../components/Header';
import Preview from '../components/Preview';
import Editor from '../components/Editor';

const Home = (): unknown => {
  import('../utils/rust/soft-ui-utils/pkg').then((module) => {
    console.log(module);
    // module.greet(module.to_hex(10).toString());
  });

  const { mainColor, fontColor } = useTheme();

  return (
    <div className={'flex-test'} style={{ background: mainColor, color: fontColor }}>
      <Header />
      <Preview />
      <Editor />
    </div>
  );
};

export default Home;
