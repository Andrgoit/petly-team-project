// import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { NavLink, Nav, AuthWrapper } from './NoticesCategoriesNav.styled';
// import { useSelector } from 'react-redux';
// import { AddNoticeButton } from 'components/AddNoticeButton/AddNoticeButton';

export const NoticesCategoriesNav = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <NavLink to="/notices/lost-found">lost/found</NavLink>
      <NavLink to="/notices/for-free">in good hands</NavLink>
      <NavLink to="/notices/sell">sell</NavLink>

      <AuthWrapper>
        <NavLink to="/notices/favorite">favorite ads</NavLink>
        <NavLink to="/notices/own">my ads</NavLink>
      </AuthWrapper>
      {/* <AddNoticeButton /> */}

      {/* {isLoggedIn && (
        <AuthWrapper>
          <NavLink to="/notices/favorite">favorite ads</NavLink>
        <NavLink to="/notices/own">my ads</NavLink>
        </AuthWrapper>
      )} */}
    </Nav>
  );
};

export default NoticesCategoriesNav;
