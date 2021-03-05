import React, { ReactElement } from 'react';
import { useTheme } from '../../store/reducers/themeReducer';

const Preview = (): ReactElement => {
  const { mainColor, fontColor, darkShadow, lightShadow } = useTheme();

  return (
    <div id={'Preview'} style={{ padding: '20px' }}>
      <div
        style={{
          margin: '10px',
          minHeight: '150px',
          backgroundColor: mainColor,
          borderRadius: 12,
          color: fontColor,
          boxShadow: `${darkShadow} 5px 5px 20px 0, ${lightShadow} -5px -5px 20px 0`
        }}
      />
    </div>

  );
};

export default Preview;