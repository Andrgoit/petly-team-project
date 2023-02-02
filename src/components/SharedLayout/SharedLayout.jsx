import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from 'components/Header/Header';
// import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
// import PublicRoute from 'components/PublicRoute/PublicRoute';
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
export default function SharedLayout() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Header />
      <Routes>
        {/* public route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
        {/* <Route element={<PublicRoute />}> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* </Route> */}
        {/* private route to do */}
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/user" element={<UserPage />} />
        {/* </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
