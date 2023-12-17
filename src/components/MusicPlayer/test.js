import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactH5AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const PlayerWrapper = styled.div`
  position: relative;
  background-color: #000; /* Fond noir */
  color: #ffd700; /* Texte jaune */
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 50%;

  .custom-image-container {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    margin-top: 10px;
  }

  .custom-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: contain; /* Ajout pour empêcher l'image de disparaître */
  }

  .fullscreen-button {
    background-color: #ffd700;
    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
  }

  .fullscreen-icon {
    color: #000;
  }

  .rhap_container {
    background-color: #121212; /* Fond noir foncé */
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    position: relative; /* Ajout pour z-index */
    z-index: 2; /* Pour être au-dessus de l'image de fond */
    width:100%
  }

  .rhap_container.fullscreen {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
  

  .fullscreen-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1; /* Assure que l'image est en arrière-plan */
  }
  
`;

const MusicPlayer = ({ trackUrl, imageUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Mettez à jour le lecteur lorsque l'URL de la piste change
    setIsPlaying(false);
  }, [trackUrl]);

  const toggleFullScreen = () => {
    const playerContainer = document.querySelector('.rhap_container');

    if (playerContainer) {
      if (!isFullscreen) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <PlayerWrapper>
      <h2>Now Playing</h2>
      {isFullscreen && imageUrl && (
        <img src={imageUrl} alt="Album Cover" className="fullscreen-image" />
      )}
      <div className="fullscreen-button" onClick={toggleFullScreen} title="Toggle Fullscreen">
        ⛶
      </div>
      <div className="custom-image-container">
        {!isFullscreen && imageUrl && (
          <img src={imageUrl} alt="Album Cover" className="custom-image" />
        )}
      </div>
      <div className="rhap_container">
        <ReactH5AudioPlayer
          src={trackUrl}
          autoPlay={isPlaying}
          customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </PlayerWrapper>
  );
};

export default MusicPlayer;