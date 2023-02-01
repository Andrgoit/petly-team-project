import styled from 'styled-components';

export const CardFriend = styled.article`
  width: 280px;
  height: 192px;
  background: #ffffff;
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: 7px 4px 14px 0px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  box-sizing: border-box;
  padding: 12px 4px;
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    width: 336px;
    height: 246px;
    padding: 16px 4px;
  }
  @media screen and (min-width: 1300px) {
    width: 395px;
    height: 287px;
    padding: 16px 4px;
  }
`;

export const FriendName = styled.h3`
  margin-bottom: 12px;
  font-weight: ${p => p.theme.fontWeights.bold};
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
`;

export const FriendContentList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  margin-left: 12px;

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

export const FriendLogo = styled.div`
  width: 110px;
  height: 78px;
  display: flex;
  //   position: relative;
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    width: 120px;
    height: 85px;
  }
  @media screen and (min-width: 1300px) {
    width: 158px;
    height: 112px;
  }
  > img {
    display: block;
    margin: auto;

    @media screen and (min-width: 1300px) {
      width: auto;
    }
  }
`;

export const FriendContentItemTime = styled.div`
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

  color: ${p => p.theme.colors.text};
  > ul {
    font-size: 12px;
    font-weight: 500;
    font-height: 1.33;
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;
