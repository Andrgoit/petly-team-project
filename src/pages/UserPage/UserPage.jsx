import { UserData } from '../../components/UserData/UserData';
import { useSelector, useDispatch } from 'react-redux';

// import { getUser } from '../../redux/users/users-operations';
import { useState, useEffect } from 'react';
import PetsList from 'components/PetsList/PetsList';
import { TfiPlus } from 'react-icons/tfi';
import {
  UserContainer,
  UserWrapper,
  PetsWrapper,
  PetsTitle,
  ButtonWrapper,
  ButtonTitle,
  AddButton,
  Wrapper,
} from './UserPage.styled';
import ModalAddsPet from '../../components/ModalAddsPet/ModalAddsPet';
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
  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, []);

  const user = useSelector(selectUserData);
  // console.log(data);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [showModal, setShowModal] = useState(false);

  const useAuth = () => {
    const result = useSelector(selectIsLoggedIn);
    return result;
  };

  const onClose = () => {
    setShowModal(true);
  };

  // const { pets } = user;
  const isLogin = useAuth();
  return (
    <section>
      {loading && <p>...Loading</p>}
      {error && <p>Oops!</p>}
      {!loading && user && isLogin && (
        <MainContainer>
          <UserContainer>
            <UserWrapper>
              <UserData user={user} />
            </UserWrapper>
            <PetsWrapper>
              <Wrapper>
                <PetsTitle>My pets:</PetsTitle>
                <ButtonWrapper>
                  <ButtonTitle>Add pet</ButtonTitle>
                  <AddButton onClick={onClose}>
                    <TfiPlus color="white" />
                  </AddButton>
                </ButtonWrapper>
                {showModal && <ModalAddsPet setShowModal={setShowModal} />}
              </Wrapper>
              <PetsList pets={user.pets} />
            </PetsWrapper>
          </UserContainer>
        </MainContainer>
      )}
    </section>
  );
};

export default UserPage;
