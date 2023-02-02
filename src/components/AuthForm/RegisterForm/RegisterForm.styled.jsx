import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TitleForm = styled.div`
  margin-bottom: 40px;
  font-weight: ${p => p.theme.fontWeights.preBold};
  font-size: 36px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};
`;
export const BoxLink = styled.div`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.a};
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.login.firstFormText};
`;
export const LinkLogin = styled(Link)`
  margin-left: 3px;
  color: ${p => p.theme.colors.login.secFormText};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.home.secButton};
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 52px;
  padding: 14px 32px;

  background-color: ${p => p.theme.colors.login.bgInput};
  border: 1px solid ${p => p.theme.colors.login.borderInput};
  border-radius: ${p => p.theme.radii.lg};

  &::placeholder {
    color: ${p => p.theme.colors.login.placeholderInput};
  }

  &:focus {
    outline: none;
    box-shadow: rgb(51 51 51 / 11%) 0px 3px 9px;
    border-color: ${p => p.theme.colors.login.secButton};
  }
`;
export const InputBox = styled.div`
  position: relative;
  margin-bottom: ${({ lastMargin }) => (lastMargin ? '40px' : '16px')};
`;
export const ErrorInput = styled.div`
  color: rgb(228, 70, 70);
  position: absolute;
  bottom: -15px;
  font-size: ${p => p.theme.fontSizes.a};
  left: 24px;
`;
export const ButtonForm = styled.button`
  width: 100%;
  padding: 10.5px;
  margin-bottom: ${({ lastMargin }) => (lastMargin ? '16px' : '40px')};
  border: none;
  background-color: ${p => p.theme.colors.login.secButton};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.lg};
  font-weight: ${p => p.theme.fontWeights.preBold};
  font-size: ${p => p.theme.fontSizes.i};
  line-height: 1.35;
  letter-spacing: 0.04em;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #eb7f3c;
  }
`;
export const ButtonPrev = styled.button`
  width: 100%;
  padding: 10.5px;
  margin-bottom: 40px;
  border: 2px solid ${p => p.theme.colors.login.secButton};
  background-color: ${p => p.theme.colors.login.primButton};
  color: ${p => p.theme.colors.primButtonText};
  border-radius: ${p => p.theme.radii.lg};
  font-weight: ${p => p.theme.fontWeights.preBold};
  font-size: ${p => p.theme.fontSizes.i};
  line-height: 1.35;
  letter-spacing: 0.04em;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.login.secButton};
    color: ${p => p.theme.colors.white};
  }
`;
