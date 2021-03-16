import React, { ReactElement } from 'react';
import { useTheme } from '../../store/reducers/themeReducer';
import SoftContainer from '../SoftContainer';


const Output = (): ReactElement => {
  const { mainColor, fontColor, lightShadow, darkShadow } = useTheme();
  return <div style={{ padding: 20 }}>
    <h2 style={{ fontSize: '12pt', fontWeight: 400 }}> CSS / TOKEN Output</h2>
    <SoftContainer inset={true} style={{ padding: 10, fontSize: '12pt' }}>
      {/*<pre>*/}
      <p style={{ paddingLeft: '10px' }}>
        background: <strong>{mainColor}</strong>
        <br />
        font color: <strong>{fontColor}</strong>
        <br />
        light shadow: <strong>{lightShadow}</strong>
        <br />
        dark shadow: <strong>{darkShadow}</strong>
      </p>
      {/*</pre>*/}
    </SoftContainer></div>;
};


export default Output;
;
;