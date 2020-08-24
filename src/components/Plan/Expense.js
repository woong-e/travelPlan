import React, {Component} from 'react';
import {Card, Col} from 'antd';

import {PlusButton, Table} from "../common/Ant";
import {formatNumber} from "../../helpers/utility";

class Expense extends Component {
  //
  constructor(props) {
    super(props);

    this.columns = [
      {
        title: '내용',
        dataIndex: 'name',
      },
      {
        title: '비용',
        dataIndex: 'cost',
        align: 'right',
        render: (text) => formatNumber(text),
      },
    ];
  }

  total = () => {
    const { list } = this.props;
    let total = 0;

    list && list.map(item => total += item.cost);

    return formatNumber(total);
  }

  render() {
    //
    const {
      list,
    } = this.props;

    return (
      <Col span={6}>
        <Card title='경비' extra={<PlusButton type='primary' shape='circle' />}>
          <Table
            dataSource={list}
            columns={this.columns}
            pagination={false}
            size='small'
            footer={this.total}
          />
        </Card>
      </Col>
    )
  }
}

export default Expense;