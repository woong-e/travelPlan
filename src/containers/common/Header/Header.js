import React, {Component} from 'react';
import {Layout, Row, Col} from 'antd';

class Header extends Component {
  //
  render() {
    //
    const { Header } = Layout;
    const header = {
      width: '100%',
      height: '64px',
      position: 'fixed',
      backgroundColor: '#fff',
      zIndex: 10,
    }

    return (
      <Header
        style={header}
      >
        <Row gutter={16}>
          <Col span={6}>

          </Col>
          <Col span={18}>

          </Col>
        </Row>
      </Header>
    );
  }
}

export default Header;
