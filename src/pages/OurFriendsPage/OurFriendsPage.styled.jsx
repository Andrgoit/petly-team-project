import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  display: grid;
  justify-items: center;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;
export const Section = styled.section`
  padding-top: 52px;
  padding-bottom: 100px;

  font-size: ${p => p.theme.fontSizes.c};
  line-height: ${p => p.theme.lineHeights.d};
  color: ${p => p.theme.colors.news.text};
  @media screen and (min-width: 768px) and (max-width: 1299.5px) {
    padding-top: 90px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1300px) {
    padding-top: 72px;
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
