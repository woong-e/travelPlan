// prettier-ignore
import styled from 'styled-components';

const BoxStyle = styled.div`
  margin: 0 0 16px;
  padding: 16px;
  width: 100%;
  background-color: #fff;
  border: 1px solid e9e9e9;
  border-radius: 5px;
  
  &.bordered {
    border: 1px solid e9e9e9;
    border-radius: 4px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 767px) {
    padding: 20px;
  }

  &.half {
    width: calc(50% - 34px);
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

export { BoxStyle };
