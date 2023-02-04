import styled from 'styled-components';
import vector from '../../img/Vector.png';
import vectorTablet from '../../img/Vector-tablet.png';
import frame from '../../img/Frame.png';
import frame2x from '../../img/Frame@2x.png';
import heart from '../../img/Heart.png';
import heart2x from '../../img/Heart@2x.png';

export const HomeTitle = styled.h1`
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.h};
  line-height: 1.38;
  margin-bottom: 58px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 620px;
    height: 200px;
    font-size: 68px;
    line-height: 1.47;
    padding-left: 32px;
    margin-bottom: 118px;
    text-align: left;
  }
  @media screen and (min-width: 1300px) {
    width: 658px;
    height: 200px;
    padding-left: 16px;
    text-align: left;
    margin-top: 30px;
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
  padding-top: 60px;

  @media screen and (min-width: 768px) {
    background-image: url('${vectorTablet}');
    background-size: inherit;
    padding-top: 90px;
  }

  @media screen and (min-width: 1300px) {
    background-image: url('${frame}');
    background-size: 1320px 440px;
    padding-top: 60px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${frame2x}');
    }
  }
`;
export const HomeWrapp = styled.div`
  @media screen and (min-width: 1300px) {
    display: flex;
  }
`;

export const ImagesWrapper = styled.div`
  @media screen and (min-width: 1300px) {
    background-image: url('${heart}');
    background-repeat: no-repeat;
    background-position: top 42px left 88px;
    width: auto;
    height: 640px;
    margin-left: 0px;
    margin-right: 10px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${heart2x}');
      background-size: 90px 90px;
    }
  }
`;
