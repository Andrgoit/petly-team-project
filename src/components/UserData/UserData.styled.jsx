import styled from 'styled-components';

export const ContainerUserData = styled.div`
  padding-left: auto;
  padding-right: auto;
  @media screen and (min-width: 768px) and (max-width: 1299px) {
    width: 379px;
    margin-top: 40px;
    margin-left: 32px;
    padding: 0;
  }
  @media screen and (min-width: 1300px) {
    padding-bottom: 40px;
  }
`;

export const TitleUserData = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  display: flex;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) and (max-width: 1299px) {
    font-size: 28px;
    font-weight: 500;
    line-height: 1.36;
  }
  @media screen and (min-width: 1300px) {
    margin-bottom: 24px;
    margin-left: 17px;
    color: #111111;
  }
`;

export const UserDataCard = styled.div`
  width: 280px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  @media screen and (min-width: 768px) and (max-width: 1299px) {
    display: flex;
    justify-content: left;
    flex-direction: row-reverse;
    width: 736px;
    border-radius: 0px 40px 40px 0px;
  }
  @media screen and (min-width: 1300px) {
    width: 411px;
  }
`;

export const PhotoContainer = styled.div`
  display: block;
  padding-top: 20px;
  @media screen and (min-width: 768px) and (max-width: 1299px) {
    padding-top: 15px;
    margin-left: 52px;
  }
  @media screen and (min-width: 1300px) {
    display: flex;
    padding-top: 15px;
  }
`;

export const Avatar = styled.img`
  width: 233px;
  height: 233px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
  background-color: antiquewhite;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  @media screen and (min-width: 768px) and (max-width: 1299px) {
    width: 233px;
    height: 233px;
    margin-left: 0;
  }
  @media screen and (min-width: 1300px) {
    width: 233px;
    height: 233px;
    margin-left: 95px;
    background-color: antiquewhite;
    border-radius: 50%;
    filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  }
`;

export const EditPhotoContainer = styled.label`
  position: relative;
  width: 86px;
  margin-left: 170px;
  @media screen and (min-width: 768px) and (max-width: 1299px) {
    margin-left: 180px;
  }
  @media screen and (min-width: 1300px) {
    margin-top: auto;
  }
`;
export const EditPhotoInput = styled.input`
  position: absolute;
  left: 0;
  opacity: 0;
  width: 86px;

  z-index: 2;
  @media screen and (min-width: 1300px) {
    width: 100px;
  }
`;
export const EditPhotoButton = styled.button`
  position: relative;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: #111111;
  background: transparent;
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    color: rgba(245, 146, 86, 1);
    cursor: pointer;
  }
`;
export const CameraLogo = styled.img`
  position: absolute;
  left: -20px;
  width: 20px;
`;
