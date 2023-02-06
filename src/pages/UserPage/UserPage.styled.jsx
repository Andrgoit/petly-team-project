import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 61px 20px 80px 20px;

  @media screen and (min-width: 768px) {
    align-items: start;
    padding: 0;
    padding-top: 88px;
    padding-bottom: 100px;
  }
  @media screen and (min-width: 1300px) {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 58px 0px 40px 0px;
  }
`;

export const UserWrapper = styled.div`
  @media screen and (min-width: 1300px) {
    position: sticky;
    top: 58px;
    margin-right: 32px;
  }
`;

export const PetsWrapper = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  @media screen and (min-width: 1300px) {
    display: block;
    width: auto;
  }
`;