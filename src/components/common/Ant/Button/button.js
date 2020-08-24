import React from 'react';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

const PlusButton = (props) => (
  <Button type={props.type} shape={props.shape} icon={<PlusOutlined/>} />
);

export default Button;
export {
  PlusButton,
}