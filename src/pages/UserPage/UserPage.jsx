import { UserData } from '../../components/UserData/UserData';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllUserData,
  getLoading,
  getError,
} from '../../redux/users/users-selectors';
import { getUser } from '../../redux/users/users-operations';
import { useEffect } from 'react';

const UserPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const data = useSelector(getAllUserData);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const { user } = data;

  return (
    <section>
      {loading && <p>...Loading</p>}
      {error && <p>Oops!</p>}
      {!loading && data && (
        <>
          <UserData user={user} />
        </>
      )}
    </section>
  );
};

export default UserPage;
