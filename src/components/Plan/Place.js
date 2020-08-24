import React, {Component} from 'react';
import {Button, Card, Col, Rate, Row} from 'antd';
import {PlusButton} from "../common/Ant";

class Place extends Component {
  //
  renderPlace = ({place, url, rate}, index) => {
    return (
      <Row key={`${place}${index}`} style={{height: '30px'}}>
        <Col span={14}>
          {
            // eslint-disable-next-line
            url ? <a href={url} target='_blank' >{place}</a> : place
          }
        </Col>
        <Col span={10} style={{textAlign: 'center'}}>
          {
            rate ?
              <Rate value={rate} style={{fontSize: '14px', lineHeight: '22px', margin: '0 0 0 10px', verticalAlign: 'text-bottom'}}/> :
              <Button size='small' shape="round">별점주기</Button>
          }
        </Col>
      </Row>
    )
  }

  render() {
    //
    const {
      place
    } = this.props;

    return (
      <Col span={6}>
        <Card title='관광장소' extra={<PlusButton type='primary' shape='circle' />}>
          {place.map((item, index) => this.renderPlace(item, index))}
        </Card>
      </Col>
    )
  }
}

export default Place;