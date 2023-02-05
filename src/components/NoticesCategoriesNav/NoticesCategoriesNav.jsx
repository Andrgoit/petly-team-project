// import { useSelector } from 'react-redux';
// import { selectIsLogin } from 'redux/auth/auth-selectors';
import { NavLink, Nav, AuthWrapper } from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  // const isLoggedIn = useSelector(selectIsLogin);

  return (
    <Nav>
      <NavLink to="/notices/lost-found">lost/found</NavLink>
      <NavLink to="/notices/for-free">in good hands</NavLink>
      <NavLink to="/notices/sell">sell</NavLink>

      <AuthWrapper>
        <NavLink to="/notices/favorite">favorite ads</NavLink>
        <NavLink to="/notices/own">my ads</NavLink>
      </AuthWrapper>

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
