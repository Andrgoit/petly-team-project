import styled from 'styled-components';

import vector from '../../img/Vector.png';
import vectorTablet from '../../img/Vector-tablet.png';
import frame from '../../img/Frame.png';
import heart from '../../img/Heart.png';
export const HomeTitle = styled.h1`
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.h};
  line-height: 1.38;
  margin-top: 58px;
  margin-bottom: 58px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 620px;
    height: 200px;
    font-size: 68px;
    line-height: 1.47;
    padding-left: 32px;
    margin-top: 90px;
    margin-bottom: 118px;
    text-align: left;
  }
  @media screen and (min-width: 1300px) {
    width: 658px;
    height: 200px;
    padding-left: 16px;
    text-align: left;
  }
`;
export const Image = styled.img`
  @media screen and (max-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 645px;
    max-height: 715px;
    margin-left: 61px;
    margin-right: 62px;
  }
  @media screen and (min-width: 1300px) {
    max-width: 590px;
    max-height: 640px;
  }
`;
export const HomeContainer = styled.div`
  background-image: url('${vector}');
  background-repeat: no-repeat;
  background-position: bottom;
  max-width: 1300px;
  @media screen and (min-width: 768px) {
    background-image: url('${vectorTablet}');
    background-size: inherit;
    max-width: 1270px;
  }
  @media screen and (min-width: 1300px) {
    background-image: url('${frame}');
    background-size: 1300px 440px;
    width: 100%;
    display: flex;
  }
`;
export const ImagesWrapper = styled.div`
  @media screen and (min-width: 1300px) {
    background-image: url('${heart}');
    background-repeat: no-repeat;
    background-position: top 42px left 38px;
    width: auto;
    height: 640px;
    margin-left: 0px;
    margin-right: 10px;
  }
`;
