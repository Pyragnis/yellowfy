import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactH5AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const PlayerWrapper = styled.div`
  background-color: #000; /* Fond noir */
  color: #ffd700; /* Texte jaune */
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width:50%;


  .rhap_container {
    background-color: #121212; /* Fond noir foncé */
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  .rhap_container:focus {
    outline: none;
  }

  .rhap_controls-section {
    background-color: #1e1e1e; /* Fond noir un peu plus clair */
    border-radius: 12px;
  }

  .rhap_play-pause {
    &:before {
      background-color: #ffd700; /* Bouton de lecture jaune */
      border-radius: 50%;
    }
  }

  .rhap_volume {
    input {
      background-color: #ffd700; /* Curseur de volume jaune */
    }
  }

  .rhap_time {
    color: #ffd700; /* Texte jaune */
  }

  .rhap_progress-bar {
    background-color: #ffd700; /* Barre de progression jaune */
    border-radius: 33px;
  }

  .custom-image {
    max-width: 50%;
    height: auto;
    margin-top: 10px; /* Adjust as needed */
  }
`;

const MusicPlayer = ({ trackUrl, imageUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Mettez à jour le lecteur lorsque l'URL de la piste change
    setIsPlaying(false);
  }, [trackUrl]);

  return (
    <PlayerWrapper>
      <h2>Now Playing</h2>
      {imageUrl && <img src={imageUrl} alt="Album Cover" className="custom-image" />}
      <ReactH5AudioPlayer
        src={trackUrl}
        autoPlay={isPlaying}
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
    </PlayerWrapper>
  );
};

export default MusicPlayer;
