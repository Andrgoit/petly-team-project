import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  width: 100%;
  margin-top: 45px;
  margin-bottom: 45px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 205px;
    width: 608px;
    margin-left: auto;
    margin-right: auto;
    padding: 60px 80px;
    background: #fff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }

  @media (min-width: 1300px) {
    width: 618px;
    margin-top: 80px;
  }
`;
export const ErrorInput = styled.div`
  color: rgb(228, 70, 70);
  position: absolute;
  bottom: -15px;
  font-size: ${p => p.theme.fontSizes.a};
  left: 24px;
`;
export const InputBox = styled.div`
  position: relative;
  margin-bottom: ${({ lastMargin }) => (lastMargin ? '40px' : '16px')};
`;
export const Input = styled.input`
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  padding:14px 11px;
  width:280px;
  color: rgba(17, 17, 17, 0.6);
font-size: 18px;
line-height: 25px;
:focus-visible {
  outline: 2px solid rgba(245, 146, 86, 0.5);
}
 @media (min-width: 768px){
  width:448px;
  padding: 14px 32px 13px 32px;
 }
  @media (min-width: 1300px) {
   width: 458px;
  }
 }
`;
export const Title = styled.h3`
  color: #111111;
  font-size: 36px;
  line-height: 49px;
  font-weight: 500;
  margin-bottom: 40px;
`;
export const LinkToRegister = styled(Link)`
  color: #3091eb;
  font-size: 12px;
  line-height: 16px;
  text-decoration: underline;
`;
export const DontLog = styled.h4`
  color: rgba(17, 17, 17, 0.6);
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
`;
export const Label = styled.label`
  background: #fdf7f2;
`;

export const Button = styled.button`
  background: #f59256;
  border-radius: 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  margin-bottom: 40px;
  padding: 10px 28px;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  border: none;
  cursor: pointer;
  color: #ffffff;
  padding: 14px 11px;
  width: 280px;
  :active {
    background-color: rgba(252, 173, 70, 1);
    transform: translate(0, 0.25em);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 768px) {
    width: 448px;
  }
  @media (min-width: 1300px) {
    width: 458px;
  }
`;
