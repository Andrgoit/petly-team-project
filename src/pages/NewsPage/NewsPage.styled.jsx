import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.f};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: 35px;
  @media screen and (min-width: 768px) {
    margin-bottom: 55px;

    font-size: ${p => p.theme.fontSizes.j};
  }
`;

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 100px;

  font-size: ${p => p.theme.fontSizes.c};
  line-height: ${p => p.theme.lineHeights.d};
  color: ${p => p.theme.colors.news.text};

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 200px;
  }
`;

export const Container = styled.div`
  padding: 0 20px;
  display: grid;
  justify-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;

export const Input = styled.input`
  padding: 11px 12px;

  width: 280px;
  font-weight: ${p => p.theme.fontWeights.preBold};
  font-size: ${p => p.theme.fontSizes.c};
  line-height: ${p => p.theme.lineHeights.d};
  background: ${p => p.theme.colors.news.inputBgColor};
  color: ${p => p.theme.colors.news.input};
  letter-spacing: ${p => p.theme.letterSpacing.b};
  box-shadow: ${p => p.theme.colors.news.inputShadow};
  border-radius: ${p => p.theme.radii.md};
  border: transparent;
  outline: none;

  @media screen and (min-width: 768px) {
    padding: 8px 20px;
    width: 608px;

    font-size: ${p => p.theme.fontSizes.i};
    line-height: ${p => p.theme.lineHeights.e};
    border-radius: ${p => p.theme.radii.lg};
  }

  @media screen and (min-width: 1280px) {
    padding: 15px 20px;

    line-height: ${p => p.theme.lineHeights.f};
    border-radius: ${p => p.theme.radii.md};
  }
`;

export const Form = styled.form`
  position: relative;
`;

export const Button = styled.button`
  padding: 5px;
  box-sizing: content-box;
  position: absolute;
  top: 8px;
  right: 13px;

  border: none;
  border-radius: 50%;
  background: transparent;
  &:hover {
    background-color: red;
  }
`;
