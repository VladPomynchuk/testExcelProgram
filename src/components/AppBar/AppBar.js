import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar as StyledAppBar, Toolbar } from '@mui/material';
import { StyledNavLink } from './AppBar.styled';

const AppBar = () => {
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <StyledNavLink to="/">GGT</StyledNavLink>
          <StyledNavLink style={{ marginLeft: 20 }} to="/discount">
            Discount
          </StyledNavLink>
          <StyledNavLink to="/parseUtility">Parse</StyledNavLink>
        </Toolbar>
      </StyledAppBar>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  );
};

export default AppBar;
