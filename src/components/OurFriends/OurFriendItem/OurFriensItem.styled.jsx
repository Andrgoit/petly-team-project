import styled from 'styled-components';

export const CardFriend = styled.article`
  display: block;
  width: 280px;
  height: 192px;
  background: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: 7px 4px 14px 0px rgba(49, 21, 4, 0.07);
  box-sizing: border-box;
  padding: 12px 4px;
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    width: 336px;
    height: 246px;
    padding: 16px 4px;
    border-radius: ${p => p.theme.radii.lg};
  }
  @media screen and (min-width: 1300px) {
    width: 395px;
    height: 287px;
    padding: 16px 4px;
    border-radius: ${p => p.theme.radii.lg};
  }
`;

export const FriendName = styled.a`
  display: block;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.a};
  line-height: 1.33;
  text-align: center;

  text-decoration-line: underline;
  color: #f59256;
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    font-size: ${p => p.theme.fontSizes.c};
    line-height: ${p => p.theme.lineHeights.d};
  }
  @media screen and (min-width: 1300px) {
    font-size: ${p => p.theme.fontSizes.i};
    line-height: ${p => p.theme.lineHeights.c};
  }
`;

export const FriendContent = styled.div`
  display: flex;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`;

export const FriendContentList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  margin-left: 12px;

  font-weight: ${p => p.theme.fontWeights.preBold};
  font-size: ${p => p.theme.fontSizes.a};
  line-height: 1.33;

  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    font-size: ${p => p.theme.fontSizes.b};
    line-height: 1.38;
    margin-left: 14px;
    gap: 8px;
  }

  @media screen and (min-width: 1300px) {
    font-size: ${p => p.theme.fontSizes.c};
    margin-left: 16px;
    gap: 12px;
  }
`;

export const FriendLogo = styled.div`
  width: 110px;
  height: 78px;
  display: flex;
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    width: 120px;
    height: 85px;
  }
  @media screen and (min-width: 1300px) {
    width: 158px;
    height: 112px;
  }
`;

export const FriendLogoImg = styled.img`
  object-fit: contain;
  @media screen and (min-width: 1300px) {
    margin: auto;
    width: auto;
  }
`;

export const AdressLink = styled.a`
  color: ${p => p.theme.colors.home.text};
  &:hover {
    font-weight: ${p => p.theme.fontWeights.preBold};
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
  background-color: ${p => p.theme.colors.white};
  border: 1px solid #f59256;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.25);
  padding: 12px;

  color: ${p => p.theme.colors.text};
  > ul {
    font-weight: ${p => p.theme.fontWeights.preBold};
    font-size: ${p => p.theme.fontSizes.a};
    font-height: 1.33;
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;