import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';

import HomePage from '../pages/HomePage/HomePage';
import NewsPage from '../pages/NewsPage/NewsPage';
import NoticesPage from '../pages/NoticesPage/NoticesPage';
import OurFriendsPage from '../pages/OurFriendsPage/OurFriendsPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
