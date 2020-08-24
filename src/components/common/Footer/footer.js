import React, {Component} from 'react';
import {Layout} from 'antd';

import {siteConfig} from "../../../settings";

class Footer extends Component {
  //
  render() {
    //
    const { Footer } = Layout;

    return (
      <Footer
        style={{
          background: '#ffffff',
          textAlign: 'center',
          borderTop: '1px solid #ededed',
        }}
      >
        {siteConfig.footerText}
      </Footer>
    );
  }
}

export default Footer;
