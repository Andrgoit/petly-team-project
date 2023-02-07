import PropTypes from 'prop-types';
import UserDataItem from '../UserDataItem/UserDataItemNew';
import cameraLogo from '../../img/Camera_2.svg';
import {
  ContainerUserData,
  TitleUserData,
  UserDataCard,
  PhotoContainer,
  Avatar,
  EditPhotoContainer,
  EditPhotoInput,
  EditPhotoButton,
  CameraLogo,
} from './UserData.styled';

export const UserData = ({ user }) => {
  if (user) {
    const { avatar } = user;
    return (
      <ContainerUserData key="user-data-container">
        <TitleUserData key="title">My information:</TitleUserData>
        <UserDataCard key="user-data">
          <PhotoContainer key="photo-container">
            <Avatar src={avatar} alt="avatar" key="photo-container"></Avatar>
            <EditPhotoContainer key="edit-photo-btn-container">
              <EditPhotoInput
                type="file"
                name="input-avatar"
                key="input-avatar"
              />
              <EditPhotoButton key="data-edit-photo">
                <CameraLogo
                  src={cameraLogo}
                  alt="camera logo"
                  key="camera-logo"
                ></CameraLogo>
                Edit photo
              </EditPhotoButton>
            </EditPhotoContainer>
          </PhotoContainer>
          <UserDataItem user={user} />
        </UserDataCard>
      </ContainerUserData>
    );
  }
  return 'You are not authorised...';
};

UserData.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.exact({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string,
      birthdate: PropTypes.string,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
