import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ReactH5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioPlayerWrapper = styled.div`
  background-color: black;
  color: black;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: auto;
  text-align: center;
  border-redius:33px;


  img {
    width: 100%;
    border-radius: 8px;
    margin-top: 10px;
  }

  button {
    background-color: yellow;
    color: black;
    border: none;
    padding:2px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
  }

  button:hover {
    background-color: black;
    color: yellow;
  }

`;
const CustomButton = styled.button`
background-color: yellow;
color: black;
border: none;
padding:2px;
cursor: pointer;
border-radius: 4px;
font-size: 16px;
padding: 10px 20px;
  margin: 10px;
  
`;

const AudioPlayer = ({ songs }) => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const audioPlayer = useRef(null);
  
    const handleSongChange = (newIndex) => {
      setCurrentSongIndex(newIndex);
    };
  
    const handleNextSong = () => {
      const newIndex = (currentSongIndex + 1) % songs.length;
      handleSongChange(newIndex);
    };
  
    const handlePrevSong = () => {
      const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      handleSongChange(newIndex);
    };
  
    const handleFullScreen = () => {
      const player = audioPlayer.current.audio.current;
  
      if (!isFullScreen) {
        if (player.requestFullscreen) {
          player.requestFullscreen();
        } else if (player.mozRequestFullScreen) {
          player.mozRequestFullScreen();
        } else if (player.webkitRequestFullscreen) {
          player.webkitRequestFullscreen();
        } else if (player.msRequestFullscreen) {
          player.msRequestFullscreen();
        }
  
        // Ajoutez la vérification pour le verrouillage du clavier en mode plein écran
        document.addEventListener('fullscreenchange', handleFullScreenChange);
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
  
      setIsFullScreen(!isFullScreen);
    };
  
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        document.removeEventListener('fullscreenchange', handleFullScreenChange);
      }
    };
  
    const currentSong = songs[currentSongIndex];
  
    useEffect(() => {
      // Reset player position when the song changes
      if (isPlayerReady) {
        audioPlayer.current.audio.current.currentTime = 0;
        audioPlayer.current.audio.current.play();
      }
    }, [currentSongIndex, isPlayerReady]);
  
    return (
      <AudioPlayerWrapper>
        <img src={currentSong.imageUrl} alt={currentSong.title} />
        <ReactH5AudioPlayer
          ref={audioPlayer}
          autoPlay
          src={currentSong.audioUrl}
          onEnded={handleNextSong}
          customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
          header={`Now Playing: ${currentSong.title}`}
          layout="stacked-reverse"
          onPlay={() => setIsPlayerReady(true)}
        />
        <div>
          <CustomButton onClick={handlePrevSong}>
            Previous
          </CustomButton>
          <CustomButton onClick={handleNextSong}>
            Next
          </CustomButton>
          <CustomButton onClick={handleFullScreen}>
            Fullscreen
          </CustomButton>
        </div>
      </AudioPlayerWrapper>
    );
  };
  
  export default AudioPlayer;
