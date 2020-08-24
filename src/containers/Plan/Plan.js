import React, {Component} from 'react';
import {PageHeader, Descriptions, Row} from 'antd';

import Box from '../../components/common/Box/box';
import Schedule from "../../components/Plan/Schedule";
import Supplies from "../../components/Plan/Supplies";
import Place from "../../components/Plan/Place";
import Expense from "../../components/Plan/Expense";

const place = [
  {
    place: '문경새재',
    url: '',
    rate: 4,
  },
  {
    place: '화수원 카페',
    url: 'https://blog.naver.com/twinkling_j/222048852327',
    rate: 4,
  },
  {
    place: '정육점',
    rate: 0,
  },
  {
    place: '계곡',
    rate: 0,
  },
  {
    place: '비 맞고',
    rate: 0,
  },
  {
    place: '돈까스',
    url: 'https://store.naver.com/restaurants/detail?entry=pll&id=1057445258&query=%EB%AF%B8%EC%8A%A4%ED%84%B0%EB%B9%A0%EC%82%AD%20%EB%AC%B8%EA%B2%BD%EC%A0%90',
    rate: 0,
  },
  {
    place: '패러글라이딩 (가능하면)',
    rate: 0,
  },
  {
    place: '뉴욕제과',
    rate: 0,
  },
];

class Plan extends Component {
  //
  constructor(props) {
    super(props);

    this.data = [
      {
        key: 0,
        name: '이마트',
        cost: 59260,
      },
      {
        key: 1,
        name: '코스트코',
        cost: 252030,
      },
      {
        key: 2,
        name: '감자탕',
        cost: 24000,
      },
      {
        key: 3,
        name: '문경새재 주차비',
        cost: 2000,
      },
      {
        key: 4,
        name: '오미자 막걸리',
        cost: 2800,
      },
      {
        key: 5,
        name: '스타벅스',
        cost: 17200,
      },
      {
        key: 6,
        name: '숯불',
        cost: 10000,
      },
      {
        key: 7,
        name: '그릴, 얼음',
        cost: 8000,
      },
      {
        key: 8,
        name: '화수헌 카페',
        cost: 16500,
      },
      {
        key: 9,
        name: '휴게소',
        cost: 43300,
      },
      {
        key: 10,
        name: '세차비',
        cost: 10000,
      },
      {
        key: 11,
        name: '교통비 (주유비, 톨비)',
        cost: 100000,
      },
    ]

  }

  render() {
    //
    const meal = ['한식 (할머니댁) or 곤드레', '스시', '토마호크', '라면 (짜파게티, 너구리, 사리곰탕)', '감자전과 오미자 막걸리', '약돌 먹은 고기', '돈까스'];
    const dessert = ['위스키 및 보드카', '레몬', '토닉워터', '과자', '과일 (샤인머스켓, 수박)', '문경 찹쌀떡 (뉴욕제과)', '전 재료', '트리플 치즈 타르트', '맥주'];
    const etc = ['숯', '상추', '쌈장', '허브솔트', '수건'];

    return (
      <>
        <Box>
          <PageHeader
            title='꿈과 희망의 문경 여행'
          >
            <Descriptions size='small' colum={3}>
              <Descriptions.Item label="여행기간">2020.08.07 ~ 2020.08.09</Descriptions.Item>
              <Descriptions.Item label="여행지">문경</Descriptions.Item>
              <Descriptions.Item label="숙소">치원이 할머니댁</Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </Box>

        <Box>
          <Row gutter={16}>

            {/* 일정 */}
            <Schedule

            />

            {/* 준비물 */}
            <Supplies
              meal={meal}
              dessert={dessert}
              etc={etc}
            />

            {/* 관광장소 */}
            <Place
              place={place}
            />

            {/* 경비 */}
            <Expense
              list={this.data}
            />

          </Row>
        </Box>
      </>
    )
  }
}

export default Plan;