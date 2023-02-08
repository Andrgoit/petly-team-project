import { UserData } from '../../components/UserData/UserData';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PetsData from 'components/PetsData/PetsData';

import { UserContainer, UserWrapper, PetsWrapper } from './UserPage.styled';
// import ModalAddsPet from '../../components/ModalAddsPet/ModalAddsPet';
import { MainContainer } from '../../components/App.styled';
import Loader from 'components/Loader/Loader';

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

  // const [showModal, setShowModal] = useState(false);

  //const onClose = () => {
  //  setShowModal(true);
  //};

  // const { pets } = user;

  return (
    <section>
      {loading && <Loader />}
      {error && <p>Oops!</p>}
      {!loading && user && isLogin && (
        <MainContainer>
          <UserContainer>
            <UserWrapper>
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
