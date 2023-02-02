import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 455px;
  right: 20px;
  @media (min-width: 768px) {
    position: relative;
    right: 0;
    top: 0;
  }
`;

export const StyledAddNoticeBtn = styled.button`
  border: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f59256;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const StyledText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #111111;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
    margin-right: 12px;
  }
`;

export const StyledImg = styled.img`
  width: 22px;
  height: 22px;
  margin-top: 21px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
    margin-top: 14px;
    margin-bottom: 14px;
  }
`;
