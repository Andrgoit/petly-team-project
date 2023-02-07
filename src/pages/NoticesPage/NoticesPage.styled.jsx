import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-items: center;
  @media screen and (min-width: 768px) {
    margin-left: -32px;
    margin-right: -32px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: -16px;
    margin-right: -16px;
  }
`;
export const Section = styled.section`
  padding-top: 52px;
  padding-bottom: 100px;
  font-size: ${p => p.theme.fontSizes.c};
  line-height: ${p => p.theme.lineHeights.d};
  color: ${p => p.theme.colors.home.text};
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    padding-top: 90px;
    padding-bottom: 100px;
  }
  @media screen and (min-width: 1300px) {
    padding-top: 72px;
  }
`;
export const PageTitle = styled.h2`
  padding: 10px 0 28px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.38;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.f};
  line-height: ${p => p.theme.lineHeights.d};
  text-align: center;
  color: #000000;
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    padding: 40px 0;
    font-size: ${p => p.theme.fontSizes.j};
  }
  @media screen and (min-width: 1300px) {
    padding: 23px 0 60px 0;
    font-size: ${p => p.theme.fontSizes.j};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
