import React from 'react';
import { BoxTitleStyle, BoxSubTitleStyle } from './boxTitle.style';

export default (props) => {
  return (
    <div>
      {props.title ? <BoxTitleStyle className="teoBoxTitle"> {props.title} </BoxTitleStyle> : ''}
      {props.subtitle ? <BoxSubTitleStyle className="teoBoxSubTitle"> {props.subtitle} </BoxSubTitleStyle> : ''}
    </div>
  );
};
