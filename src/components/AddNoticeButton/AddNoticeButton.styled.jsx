import styled from 'styled-components';
import { IoAdd } from 'react-icons/io5';

export const Wrapper = styled.div`
  @media only screen and (min-width: 767px) {
    
    bottom: 0px;
    right: 16px;
    display: flex;
    align-items: center;
    margin: auto;
  }
  @media only screen and (max-width: 1279px) {
    right: 32px;
  }
  
  bottom: 0px;
  right: 16px;
  display: flex;
  align-items: center;
`;



export const Text = styled.p`
  
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.3;
    color: rgba(17, 17, 17, 1);
    margin-right: 12px;
    margin-bottom: 0;
  }
`;

export const AddBtn = styled.button`
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    background: rgba(245, 146, 86, 1);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const IconAdd = styled(IoAdd)`
  color: rgba(255, 255, 255, 1);
  width: 24px;
  height: 24px;
`;
