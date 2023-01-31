import styled from 'styled-components';
import { theme } from '../../components/Theme/theme';
import { useMediaQuery } from 'react-responsive';

// const isDesktop = useMediaQuery({ minWidth: 1300 });
// const isTablet = useMediaQuery({ minWidth: 768 });
// const isMobile = useMediaQuery({ maxWidth: 320 });
export const FriendsList = styled.ul`
  display: grid;

  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  @media screen and (max-width: 767.5px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const CardFriend = styled.article`
  width: 280px;
  height: 192px;
  background: #fdf7f2;
  border: 1px solid #ffffff;
  box-shadow: rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  box-sizing: border-box;
  padding: 12px 4px;
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    width: 336px;
    height: 256px;
    padding: 16px 4px;
  }
  @media screen and (min-width: 1300px) {
    width: 395px;
    height: 297px;
  }
`;

export const FriendName = styled.h3`
  margin-bottom: 12px;
  font-weight: ${p => p.theme.fontWeights.bold};
  // font-size: 12px;
  font-size: ${p => p.theme.fontSizes.a};
  line-height: 1.33;
  text-align: center;

  text-decoration-line: underline;
  color: #f59256;
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    margin-bottom: 16px;
    font-size: ${p => p.theme.fontSizes.c};
    line-height: 1.38;
  }
  @media screen and (min-width: 1300px) {
    font-size: ${p => p.theme.fontSizes.i};
    line-height: 1.35;
    margin-bottom: 16px;
  }
`;

export const FriendContent = styled.div`
  display: flex;
  //   position: relative;
`;

export const FriendContentList = styled.div`
  display: block;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  margin-left: 12px;
  width: 150px;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    font-size: 14px;
    line-height: 1.38;
    margin-left: 14px;
    gap: 8px;
  }

  @media screen and (min-width: 1300px) {
    font-size: 16px;
    margin-left: 16px;
    gap: 12px;
  }
`;

export const FriendLogo = styled.img`
  width: 110px;
  height: 78px;
  border: 1px solid black;
  position: statick;
  left: 0;
  top: 0;
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    width: 120px;
    height: 85px;
  }

  @media screen and (min-width: 1300px) {
    width: 158px;
    height: 112px;
  }
`;

export const PageTitle = styled.h2`
  margin-bottom: 28px;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.38;

  text-align: center;

  color: #000000;

  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    margin-bottom: 40px;
    font-size: 48px;
  }
  @media screen and (min-width: 1300px) {
    margin-bottom: 60px;
    font-size: 48px;
  }
`;

export const FriendContentItemTime = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    color: #f59256;
    > div {
      display: flex;
      grid-template-columns: repeat(2, 1fr);
      gap: 4px;
    }
  }
`;
export const FriendContentItemWorkTime = styled.div`
  display: none;
  position: absolute;

  width: 120px;
  height: 160px;
  background-color: rgba(255, 255, 255);
  border: 1px solid #f59256;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.25);
  padding: 12px;
  font-size: ${p => p.theme.fontSizes.a};
  font-weight: ${p => p.theme.fontWeights.preBold};
  font-height: 1.33;

  color: ${p => p.theme.colors.text};
  > ul {
    padding: 0px;
  }
`;
