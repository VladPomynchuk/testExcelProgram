import { Container } from '@mui/system';
import GlobalStyle from './GlobalStyle';
import { Route, Routes, Navigate } from 'react-router-dom';
import PublicRoute from './utils/PublicRoute';
import ParsePage from './views/ParsePage';
import DiscountPage from './views/DiscountPage';
import AppBar from './AppBar/AppBar';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <AppBar />
      <Routes>
        <Route path="/" element={<Navigate to="/discount" />} />
        <Route
          path="/parseUtility"
          element={
            <PublicRoute>
              <ParsePage />
            </PublicRoute>
          }
        />
        <Route
          path="/discount"
          element={
            <PublicRoute>
              <DiscountPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};
