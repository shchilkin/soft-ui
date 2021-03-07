import React, { ReactElement } from 'react';
import { useTheme } from '../../store/reducers/themeReducer';
import { useSoftUIProperties } from '../../store/reducers/softUIPropertiesReducer';

const Preview = (): ReactElement => {
  const { mainColor, fontColor, darkShadow, lightShadow } = useTheme();
  const { shadowBlur, shadowLength } = useSoftUIProperties();

  return (
    <div id={'Preview'} style={{ padding: '20px' }}>
      {/*TODO: change to styled components css*/}
      <div
        style={{
          margin: '10px',
          minHeight: '150px',
          backgroundColor: mainColor,
          borderRadius: 12,
          color: fontColor,
          boxShadow: `${darkShadow} ${shadowLength}px ${shadowLength}px ${shadowBlur}px 0, 
            ${lightShadow} -${shadowLength}px -${shadowLength}px ${shadowBlur}px 0`
        }}
      />
    </div>

  );
};

export default Preview;