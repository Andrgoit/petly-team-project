import { UserData } from '../../components/UserData/UserData';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PetsData from 'components/PetsData/PetsData';

import {
  UserContainer,
  UserWrapper,
  PetsWrapper,
  UserTitle,
} from './UserPage.styled';
import Loader from 'components/Loader/Loader';
import { MainContainer } from '../../components/App.styled';
import {
  selectError,
  selectIsLoading,
  selectIsLoggedIn,
  selectUserData,
} from '../../redux/auth/authSelectors';
import { getUser } from 'redux/auth/authOperations';

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLogin = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, [dispatch, user]);

  return (
    <section>
      {loading && <Loader />}
      {error && <p>Oops!</p>}
      {!loading && user && isLogin && (
        <MainContainer>
          <UserContainer>
            <UserWrapper>
              <UserTitle>My information:</UserTitle>
              <UserData user={user} />
            </UserWrapper>
            <PetsWrapper>
              <PetsData pets={user.pets} />
            </PetsWrapper>
          </UserContainer>
        </MainContainer>
      )}
    </section>
  );
};

export default UserPage;
