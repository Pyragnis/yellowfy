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
      <MusicPlayer trackUrl={'https://yellowfy.s3.eu-west-3.amazonaws.com/8ae85c09e3a9f8cf37e1dacbe2613f70d4d773c4a719a2bccdde19e9a16e6233.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA4XITKHRTD2OIYOFL%2F20231207%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20231207T151648Z&X-Amz-Expires=518400&X-Amz-Signature=a299b58bd9e5e2285f65ff883b3b48ff0a99cc9fda77623ce871028f7b292fb1&X-Amz-SignedHeaders=host&x-id=GetObject'} imageUrl={'https://www.powertrafic.fr/wp-content/uploads/2023/04/image-ia-exemple.png'} />

    </LoginPage>
  );
};

export default Login;
