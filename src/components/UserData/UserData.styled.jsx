import styled from 'styled-components';

export const ContainerUserData = styled.div`
  padding-bottom: 40px;
`;

export const TitleUserData = styled.h3`
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  margin-bottom: 24px;
  margin-left: 17px;
  color: #111111;
`;

export const UserDataCard = styled.div`
  width: 411px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 0px 40px 40px 0px;
`;

export const PhotoContainer = styled.div`
  display: flex;
  padding-top: 15px;
`;

export const Avatar = styled.img`
  width: 233px;
  height: 233px;
  margin-left: 95px;
  background-color: antiquewhite;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
`;

export const EditPhotoContainer = styled.label`
  position: relative;
  width: 86px;
  margin-top: auto;
`;
export const EditPhotoInput = styled.input`
  position: absolute;
  left: 0;
  opacity: 0;
  width: 100px;
  z-index: 2;
`;
export const EditPhotoButton = styled.button`
  position: relative;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
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
