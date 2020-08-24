import React, {Component} from 'react';
import {Card, Col, Divider} from 'antd';

import {PlusButton, Tag} from '../../components/common/Ant';

class Supplies extends Component {
  //
  renderTagList = (list, color) => {
    return list.map((name, index) =>
      <Tag key={`${name}${index}`} color={color}>{name}</Tag>
    );
  }

  render() {
    //
    const {
      meal,
      dessert,
      etc,
    } = this.props;

    return (
      <Col span={6}>
        <Card title='준비물' extra={<PlusButton type='primary' shape='circle' />}>
          <Divider orientation='left'>식사</Divider>
          {this.renderTagList(meal, 'green')}

          <Divider orientation='left'>후식</Divider>
          {this.renderTagList(dessert, 'red')}

          <Divider orientation='left'>기타</Divider>
          {this.renderTagList(etc, 'blue')}
        </Card>
      </Col>
    )
  }
}

export default Supplies;