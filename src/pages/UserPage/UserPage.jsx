import { UserData } from '../../components/UserData/UserData';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllUserData,
  getLoading,
  //getError,
} from '../../redux/users/users-selectors';
import { getUser } from '../../redux/users/users-operations';
import { useEffect } from 'react';
import PetsData from 'components/PetsData/PetsData';
import { UserContainer, UserWrapper, PetsWrapper } from './UserPage.styled';
//import ModalAddsPet from '../../components/ModalAddsPet/ModalAddsPet';
import { MainContainer } from '../../components/App.styled';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const UserPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  //const [showModal, setShowModal] = useState(false);

  const data = useSelector(getAllUserData);
  const loading = useSelector(getLoading);
  // const error = useSelector(getError);

  const useAuth = () => {
    const result = useSelector(selectIsLoggedIn);
    return result;
  };

  //const onClose = () => {
  //  setShowModal(true);
  //};

  const { user } = data;
  const { pets } = data;
  const isLogin = useAuth();
  return (
    <section>
      {loading && <p>...Loading</p>}
      {/* {error && <p>Oops!</p>} */}
      {!loading && data && isLogin && (
        <MainContainer>
          <UserContainer>
            <UserWrapper>
              <UserData user={user} />
            </UserWrapper>
            <PetsWrapper>
              {/*<Wrapper>
                <PetsTitle>My pets:</PetsTitle>
                <ButtonWrapper>
                  <ButtonTitle>Add pet</ButtonTitle>
                  <AddButton onClick={onClose}>
                    <TfiPlus color="white" />
                  </AddButton>
                </ButtonWrapper>
                {showModal && <ModalAddsPet setShowModal={setShowModal} />}
              </Wrapper>*/}
              <PetsData pets={pets} />
            </PetsWrapper>
          </UserContainer>
        </MainContainer>
      )}
    </section>
  );
};

export default UserPage;
