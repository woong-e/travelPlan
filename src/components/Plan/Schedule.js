import React, {Component} from 'react';
import {Card, Col} from 'antd';

import {PlusButton, Timeline} from "../common/Ant";

class Schedule extends Component {
  //
  render() {
    //
    return (
      <Col span={6}>
        <Card title='일정' extra={<PlusButton type='primary' shape='circle' />}>
          <span style={{fontWeight: 600, fontSize: '16px'}}>1일차</span>

          <Timeline mode='left'>
            <Timeline.Item label='11:00 ~ 12:00'>아점</Timeline.Item>
            <Timeline.Item label='12:00 ~ 14:00'>문경새재</Timeline.Item>
            <Timeline.Item label='14:00 ~ 16:00'>화수원 카페</Timeline.Item>
            <Timeline.Item label='16:00 ~ 17:00'>정육점에서 고기구매</Timeline.Item>
            <Timeline.Item label='17:00 ~ 18:00'>귀가 후 바베큐 세팅</Timeline.Item>
            <Timeline.Item label='18:00 ~ 20:00'>저녁</Timeline.Item>
            <Timeline.Item label='20:00 ~ 23:00'>루미큐브 및 넷플릭스</Timeline.Item>
            <Timeline.Item label='23:00 ~ 24:00'>취침</Timeline.Item>
          </Timeline>
        </Card>
      </Col>
    )
  }
}

export default Schedule;