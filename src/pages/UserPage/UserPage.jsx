import { UserData } from '../../components/UserData/UserData';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllUserData,
  getLoading,
  getError,
} from '../../redux/users/users-selectors';
import { getUser } from '../../redux/users/users-operations';
import { useEffect } from 'react';
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
import { MainContainer } from '../../components/App.styled';
const UserPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const data = useSelector(getAllUserData);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const { user } = data;
  const { pets } = data;

  return (
    <section>
      {loading && <p>...Loading</p>}
      {error && <p>Oops!</p>}
      {!loading && data && (
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
                  <AddButton>
                    <TfiPlus color="white" />
                  </AddButton>
                </ButtonWrapper>
              </Wrapper>
              <PetsList pets={pets} />
            </PetsWrapper>
          </UserContainer>
        </MainContainer>
      )}
    </section>
  );
};

export default UserPage;
