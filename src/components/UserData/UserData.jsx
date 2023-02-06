import PropTypes from 'prop-types';
import UserDataItem from '../UserDataItem/UserDataItem';

export const UserData = ({ user }) => {
  if (user) {
    return <UserDataItem user={user} key="UserDataItem"></UserDataItem>;
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
