import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;

export const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;

  @media screen and (min-width: 1280px) {
    padding-top: 45px;
    padding-bottom: 116px;
  }
`;
