import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;

  align-items: center;
  padding-top: 16px;

  @media (min-width: 768px) {
    padding-top: 24px;
  }

  @media (min-width: 1300px) {
    padding-top: 20px;
  }
`;
