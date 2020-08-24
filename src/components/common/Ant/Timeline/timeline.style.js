import styled from "styled-components";

const TimelineStyle = ComponentName => styled(ComponentName)`
  &.ant-timeline {
    margin-top: 16px;
    
    .ant-timeline-item-label {
      width: calc(28% - 12px);
    }
    
    .ant-timeline-item-tail {
      left: 30%;
    }
    
    .ant-timeline-item-head {
      left: 30%;
    }
    
    .ant-timeline.ant-timeline-item-content {
      left: calc(30% - 4px);
    }
    
    &.ant-timeline-label {
      .ant-timeline-item-content {
        left: calc(30% - 4px);
      }
    }
  }

`;

export default TimelineStyle;