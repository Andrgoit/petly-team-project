import styled from 'styled-components';

export const Line = styled.span`
  margin-bottom: 13px;
  display: block;

  width: 200px;
  height: 4px;

  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 768px) {
    width: 280px;
    height: 8px;
  }

  @media screen and (min-width: 1280px) {
    width: 340px;
  }
`;

export const Item = styled.li`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  margin-bottom: 16px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  letter-spacing: -0.01em;
`;

export const Description = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.375;

  color: #111321;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    -webkit-line-clamp: 6;
  }
  @media screen and (min-width: 1280px) {
    -webkit-line-clamp: 5;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.time`
  font-size: 16px;
  line-height: 1.375;
  color: rgba(17, 17, 17, 0.6);
`;

export const Link = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  text-decoration-line: underline;
  color: #f59256;

  &:hover,
  &:focus {
    scale: 1.1;
    color: #ff634e;
  }
`;
