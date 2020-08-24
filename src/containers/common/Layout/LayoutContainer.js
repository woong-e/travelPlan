import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {Layout} from 'antd';
import {Debounce} from 'react-throttle';
import WindowResizeListener from 'react-window-size-listener';

import actions from '../../../store/app/actions';
import {indexSelector} from '../../../store/app/selectors';

import Header from "../Header/Header";
import Footer from "../../../components/common/Footer/footer";
import AppRouter from "../../../routers/AppRouter";
import Sidebar from "../Sidebar/Sidebar";

export class LayoutContainer extends Component {
  //
  toggleAll = ({windowWidth, windowHeight}) => {
    this.props.actions.toggleAll(windowWidth, windowHeight)
  }

  render() {
    //
    const {url} = this.props.match;
    const appHeight = window.innerHeight;
    const { Content } = Layout;

    return (
      <Layout style={{height: appHeight}}>

        <Debounce time="1000" handler="onResize">
          <WindowResizeListener
            onResize={(windowSize) => this.toggleAll(windowSize)}
          />
        </Debounce>

        <Sidebar />

        <Layout>

          <Header />

          <Content style={{
            marginTop: '64px',
            padding: '20px',
            flexShrink: '0',
            position: 'relative',
          }}>
            <AppRouter url={url}/>
          </Content>

          <Footer />
        </Layout>
      </Layout>
    );
  }
}

const stateToProps = (state) => ({
  form: indexSelector.form(state),
});

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps,
)(LayoutContainer);
