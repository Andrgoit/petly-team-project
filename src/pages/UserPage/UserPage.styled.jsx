import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 61px 20px 80px 20px;

  @media screen and (min-width: 768px) {
    align-items: start;
    padding: 0;
    padding-top: 88px;
    padding-bottom: 100px;
  }
  @media screen and (min-width: 1300px) {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 58px 0px 40px 0px;
  }
`;
export const PetsTitle = styled.h2`
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.preBold};
  font-size: ${props => props.theme.fontSizes.i};
  line-height: ${props => props.theme.lineHeights.e};
  width: 87px;
  margin-bottom: 24px;
  font-size: 20px;
  line-height: 27px;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.g};
    line-height: ${props => props.theme.lineHeights.d};
    width: 113px;
    margin-bottom: 32px;
    margin-left: 33px;
  }
  @media screen and (min-width: 1300px) {
    font-size: ${props => props.theme.fontSizes.g};
    line-height: ${props => props.theme.lineHeights.d};
    width: 207px;
    margin-bottom: 24px;
    margin-left: 0px;
  }
`;
export const ButtonTitle = styled.h3`
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.preBold};
  font-size: ${props => props.theme.fontSizes.i};
  line-height: ${props => props.theme.lineHeights.e};
  width: 73px;
  margin-right: 15px;
`;
export const UserWrapper = styled.div`
  @media screen and (min-width: 1300px) {
    position: sticky;
    top: 58px;
    margin-right: 32px;
  }
`;
export const Wrapper = styled.div`
  width: inherit;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1300px) {
  }
`;
export const PetsWrapper = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  @media screen and (min-width: 1300px) {
    display: block;
    width: auto;
  }
`;
export const ButtonWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  display: flex;
  align-items: center;
  margin-bottom: 31px;
  margin-top: -6px;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0px;
    right: 0;
    margin-top: 0;
  }
  @media screen and (min-width: 1300px) {
    position: absolute;
    top: 0px;
    right: 0px;
    margin-top: 0;
  }
`;
export const AddButton = styled.button`
  display: flex;
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 0;
  justify-content: center;
  align-items: center;
  border: ${p => p.theme.colors.home.buttonBorder};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.home.buttonBorder};
  color: ${p => p.theme.colors.secondaryBackground};
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  :hover,
  :focus {
    transform: scale(1.05);
    background-color: #eb7f3c;
  }
`;
