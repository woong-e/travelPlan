import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {PageHeader, Descriptions, Row} from 'antd';

import actions from '../../store/plan/actions';
import {indexSelector} from "../../store/plan/selectors";

import Box from '../../components/common/Box/box';
import Schedule from "../../components/Plan/Schedule";
import Supplies from "../../components/Plan/Supplies";
import Place from "../../components/Plan/Place";
import Expense from "../../components/Plan/Expense";

class Plan extends Component {
  //
  componentDidMount() {
    this.props.actions.fetch('mungyeong');
  }

  render() {
    //
    const {
      plan: {
        title,
        period,
        destination,
        lodging,
        schedule,
        supplies,
        place,
        expense,
      }
    } = this.props;

    return (
      <>
        <Box>
          <PageHeader
            title={title}
          >
            <Descriptions size='small' colum={3}>
              <Descriptions.Item label="여행기간">{period}</Descriptions.Item>
              <Descriptions.Item label="여행지">{destination}</Descriptions.Item>
              <Descriptions.Item label="숙소">{lodging}</Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </Box>

        <Box>
          <Row gutter={16}>

            {/* 일정 */}
            <Schedule
              schedule={schedule || []}
            />

            {/* 준비물 */}
            <Supplies
              supplies={supplies || []}
            />

            {/* 관광장소 */}
            <Place
              place={place || []}
            />

            {/* 경비 */}
            <Expense
              list={expense || []}
            />

          </Row>
        </Box>
      </>
    )
  }
}

const stateToProps = (state) => ({
  plan: indexSelector.plan(state),
});

const dispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps,
)(Plan);