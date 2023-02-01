import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FriendList } from '../../components/OurFriends/OurFriendList/OurFriendsList';
import { PageTitle, Container, Section } from './OurFriendsPage.styled';

import {
  getAllFriends,
  getLoading,
  getError,
} from 'redux/friends/friends-selectors';
import { getFriends } from 'redux/friends/friends_operations';
// import friends from '../../components/OurFriends/friends.json';

function OurFriendsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  const friends = useSelector(getAllFriends);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  return (
    <Section>
      <Container>
        <PageTitle>Our friends</PageTitle>
        {loading && <p>...Loading</p>}
        {error && <p>Что-то пошло не так</p>}
        {!loading && friends && <FriendList friends={friends} />}
      </Container>
    </Section>
  );
}

export default OurFriendsPage;
