import PropTypes from 'prop-types';

import OurFriensItem from '../OurFriendItem/OurfriensItem';
import { FriendsList } from './OurFriendList.styled';

export const FriendList = ({ friends }) => {
  const elements = friends.map(
    ({ _id, name, logo, adress, email, phone, worktime }) => (
      <OurFriensItem
        key={_id}
        name={name}
        logo={logo}
        adress={adress}
        email={email}
        phone={phone}
        worktime={worktime}
      />
    )
  );
  return <FriendsList>{elements}</FriendsList>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      adress: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      worktime: PropTypes.array.isRequired,
    })
  ),
};
