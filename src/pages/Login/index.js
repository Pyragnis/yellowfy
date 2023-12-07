// src/pages/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import MusicPlayer from '../../components/MusicPlayer';

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

`;

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate authentication (replace with real authentication logic if needed)
    // ...

    // Redirect to the main page after login
    navigate('/home');
  };

  return (
    <LoginPage>
      <h1 style={{ color: '#ffd700' }}>Yellowfy</h1>
      <Button onClick={handleLogin}>Connexion sur Yellowfy</Button>
      <MusicPlayer trackUrl={'test'} imageUrl={'https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png'} />

    </LoginPage>
  );
};

export default Login;
