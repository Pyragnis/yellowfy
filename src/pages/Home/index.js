// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000; /* Fond noir */
  color: #ffd700; /* Texte jaune */
`;

const Heading = styled.h1`
  margin-bottom: 20px;
`;

const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #333; /* Couleur de fond pour la barre de recherche */
  color: #fff; /* Couleur du texte pour la barre de recherche */
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #fff; /* Couleur de l'icône de recherche */
  cursor: pointer;
`;

const AlbumList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AlbumItem = styled.li`
  margin-bottom: 10px;
`;

const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Effectue une requête à votre API pour récupérer la liste des albums
    // Assurez-vous de mettre à jour l'URL de l'API
    fetch('https://votre-api.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.error('Error fetching albums:', error));
  }, []);

  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HomeWrapper>
      <Heading>Welcome to Yellowfy</Heading>
      <SearchBarWrapper>
        <SearchBar
          type="text"
          placeholder="Search for albums..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <SearchIcon>🔍</SearchIcon>
      </SearchBarWrapper>
      <AlbumList>
        {filteredAlbums.map(album => (
          <AlbumItem key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </AlbumItem>
        ))}
      </AlbumList>
    </HomeWrapper>
  );
};

export default Home;
