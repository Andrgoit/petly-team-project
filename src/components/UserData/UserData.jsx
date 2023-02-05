import PropTypes from 'prop-types';
import UserDataItem from '../UserDataItem/UserDataItem';

export const UserData = ({ user }) => {
  if (user) {
    const { name, avatar, email, location, birthdate, phone } = user;
    return (
      <UserDataItem
        name={name}
        avatar={avatar}
        email={email}
        location={location}
        birthdate={birthdate}
        phone={phone}
      />
    );
  }
  return 'Oops...';
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
