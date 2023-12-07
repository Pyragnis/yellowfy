// src/pages/AlbumDetail.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const AlbumDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000; /* Fond noir */
  color: #ffd700; /* Texte jaune */
`;

const AlbumTitle = styled.h2`
  margin-bottom: 20px;
`;

const TrackList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TrackItem = styled.li`
  margin-bottom: 10px;
`;

const AlbumDetail = () => {
  const { albumId } = useParams();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // Effectue une requête à votre API pour récupérer la liste des morceaux de l'album
    // Assurez-vous de mettre à jour l'URL de l'API et de passer l'ID de l'album
    fetch(`https://votre-api.com/albums/${albumId}/tracks`)
      .then(response => response.json())
      .then(data => setTracks(data))
      .catch(error => console.error('Error fetching tracks:', error));
  }, [albumId]);

  return (
    <AlbumDetailWrapper>
      <AlbumTitle>Album Detail</AlbumTitle>
      <TrackList>
        {tracks.map(track => (
          <TrackItem key={track.id}>{track.title}</TrackItem>
        ))}
      </TrackList>
    </AlbumDetailWrapper>
  );
};

export default AlbumDetail;
