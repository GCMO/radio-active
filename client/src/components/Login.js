import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './auth/LoginButton';
import LogoutButton from './auth/LogoutButton';

const Login = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      {isAuthenticated ? <p className="logoutText">Logout</p> : <p className="loginText">Login</p>}
    </Wrapper>
  );
};

const Wrapper = styled.section`
display: inherit;
flex-direction: column;
font-size: .8rem;
font-weight: bold;
color: #fdf6ed;

.loginText{
  color: #2dc847;
}

.logoutText{
  color: #8a847a;
}

@media (min-width: 768px){
  font-size: 1.1rem;
 }
`;
export default Login;

// elements needed :
// anchor tag sign up ,email, password, anchor tag forgot your pass,ok btn
