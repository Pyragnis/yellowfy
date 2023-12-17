import React, { useState, useRef } from 'react';
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
  border-radius:33px;   

  img {
    width: 100%;
    border-radius: 8px;
    margin-top: 10px;
  }

  button {
    background-color: yellow;
    color: black;
    border: none;
    
    
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
  }

  button:hover {
    background-color: black;
    color: yellow;
  }
`;

const AudioPlayer = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioPlayer = useRef(null);

  const handleSongChange = (newIndex) => {
    setCurrentSongIndex(newIndex);
    audioPlayer.current.audio.current.pause();
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
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.mozRequestFullScreen) {
      player.mozRequestFullScreen();
    } else if (player.webkitRequestFullscreen) {
      player.webkitRequestFullscreen();
    } else if (player.msRequestFullscreen) {
      player.msRequestFullscreen();
    }
  };

  const currentSong = songs[currentSongIndex];

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
      />
      <div>
        <button onClick={handlePrevSong}>Previous</button>
        <button onClick={handleNextSong}>Next</button>
        <button onClick={handleFullScreen}>Fullscreen</button>
      </div>
      
    </AudioPlayerWrapper>
  );
};

export default AudioPlayer;
