import React, { ReactElement } from 'react';
import { hexColor } from '../../../shared';

export interface IconProps {
  fillColor: hexColor
}

const FlatIcon = (props: IconProps): ReactElement => {

  return <svg width='36' height='24' viewBox='0 0 36 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13L6 11ZM30 13C30.5523 13 31 12.5523 31 12C31 11.4477 30.5523 11 30 11V13ZM17.5 7L17.5 8L17.5 7ZM6 13H9L9 11H6L6 13ZM27 13L30 13V11H27V13ZM17.5 8L25 8L25 6L17.5 6L17.5 8ZM25 8V11L27 11V8H25ZM11 11V8L9 8V11L11 11ZM11 8L17.5 8L17.5 6L11 6L11 8ZM11 8L11 8L11 6C9.89543 6 9 6.89543 9 8L11 8ZM25 8L25 8H27C27 6.89543 26.1046 6 25 6L25 8ZM27 11V11L25 11C25 12.1046 25.8954 13 27 13V11ZM9 13C10.1046 13 11 12.1046 11 11L9 11V11L9 13Z'
      fill={props.fillColor} />
  </svg>;
};

export default FlatIcon;