import React, {Component} from 'react';
import {Layout, Menu} from 'antd';

import Logo from "../../../components/common/Logo/logo";
import menu from './menu';
import {Link} from "react-router-dom";
import {appRootPath} from "../../../settings";

class Sidebar extends Component {
  //
  getMenuItem = ({key, label}) => {

    return <Menu.Item key={key}>
      <Link to={`${appRootPath}/${key}`}>
        {label}
      </Link>
    </Menu.Item>
  }

  render() {
    //
    const { Sider } = Layout;

    return (
      <Sider
        theme='dark'
        width={200}
      >
        <Logo />
        <Menu
          theme='dark'
          mode="inline"
        >
          {menu.map(item => this.getMenuItem(item))}
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
