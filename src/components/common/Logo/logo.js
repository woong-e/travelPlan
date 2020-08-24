import React from 'react';
import {Link} from 'react-router-dom';

import {LogoStyle} from './logo.style';
import {appRootPath, siteConfig} from "../../../settings";

export default (props) => {
  return (
    <LogoStyle className={`${props.className}`} style={props.style}>
      <Link to={appRootPath}>
        {siteConfig.siteName}
      </Link>
    </LogoStyle>
  )
}