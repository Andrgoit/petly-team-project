import styled from 'styled-components';

export const Title = styled.h1`
  /* text-align: center; */
  font-size: 24px;
  font-weight: 700;

  line-height: 1.375;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 100px;
  background-color: #fdf7f2;

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 200px;
  }
`;

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

export const Input = styled.input`
  margin-top: 28px;
  width: 280px;
  height: 40px;
  padding: 9px 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  border: transparent;
  outline: none;

  @media screen and (min-width: 768px) {
    margin-top: 55px;

    width: 608px;
    height: 44px;
    padding: 8px 20px;

    font-size: 20px;
    line-height: 1.35;
    border-radius: 40px;
  }
`;
