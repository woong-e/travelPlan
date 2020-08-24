import React from 'react';
import BoxTitleWrapper from './boxTitle';
import { BoxStyle } from './box.style';

export default (props) => (
  <BoxStyle className={`${props.className}`} style={props.style}>
    {props.title ? <BoxTitleWrapper title={props.title} subtitle={props.subtitle} /> : ''}
    {props.children}
  </BoxStyle>
);
