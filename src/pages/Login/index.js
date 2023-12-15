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
      <MusicPlayer trackUrl={'https://yellowfy.s3.eu-west-3.amazonaws.com/77185e24477843482bb1b922423b49f6eef4b1f103acafbd01f7dc27166a560b.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA4XITKHRTD2OIYOFL%2F20231215%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20231215T081919Z&X-Amz-Expires=518400&X-Amz-Signature=024f66f04c3affccd67cfdaa45c78e9d070c1225665f472257a16e556df96ada&X-Amz-SignedHeaders=host&x-id=GetObject'} imageUrl={'https://yellowfy.s3.eu-west-3.amazonaws.com/f1ff48af71be445a621b4b3e1c273c4156331ea5ec51b09073becf37d1e80dfc.avif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA4XITKHRTD2OIYOFL%2F20231215%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20231215T081919Z&X-Amz-Expires=518400&X-Amz-Signature=af08830b408bf75f0ad1d95016f4c867a7dd148488f439dd81227127264ee404&X-Amz-SignedHeaders=host&x-id=GetObject'} />

    </LoginPage>
  );
};

export default Login;
